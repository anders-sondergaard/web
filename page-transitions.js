// Page transitions between the site's pages, modelled on koalition.com:
// leaving a page, the content accelerates up and off screen while a vertical motion blur builds;
// the next page slides up from below, decelerating while the blur clears. The fixed header stays put.
//
// Load this in <head> (not deferred): it hides the incoming page before first paint so it can slide in.
(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const STORAGE_KEY = 'ct-page-transition';
    const EXIT_MS = 550;
    const ENTER_MS = 800;
    const MAX_BLUR = 20;
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const REGION_PAD = 120; // px around the viewport, so the blur has room to spread

    // Only animate the way in when we arrived through one of our own transitions
    let incoming = false;
    try {
        incoming = sessionStorage.getItem(STORAGE_KEY) === '1';
        sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) { /* storage unavailable: no enter animation */ }

    // Everything but the fixed header moves. Before the page wrapper exists that is each body child;
    // afterwards it is the wrapper itself.
    const style = document.createElement('style');
    style.textContent = `
        html.pt-enter body > :not(header) { transform: translate3d(0, 100vh, 0); }
        #pt-page { display: flex; flex-direction: column; flex: 1 0 auto; width: 100%; }
    `;
    document.head.appendChild(style);
    if (incoming && !reduceMotion) document.documentElement.classList.add('pt-enter');

    // All page content (main, footer, modals) goes into one wrapper, so it moves as a single layer.
    // Animating main and footer separately let the footer drift out of step with the page.
    let page = null;
    function pageWrapper() {
        if (page) return page;
        page = document.createElement('div');
        page.id = 'pt-page';
        const header = document.querySelector('body > header');
        const content = [...document.body.children].filter(el => el !== header && el.tagName !== 'SCRIPT');
        document.body.insertBefore(page, content[0] || null);
        content.forEach(el => page.appendChild(el));
        return page;
    }

    // One vertical-blur filter whose region is kept to the slice of the page that is on screen:
    // blurring the whole (long) page every frame drops the animation to ~35 fps.
    let blur = null;
    function blurFilter() {
        if (blur) return blur;
        const host = document.createElementNS(SVG_NS, 'svg');
        host.setAttribute('aria-hidden', 'true');
        host.setAttribute('width', '0');
        host.setAttribute('height', '0');
        host.style.position = 'absolute';
        blur = document.createElementNS(SVG_NS, 'filter');
        blur.id = 'pt-blur';
        blur.setAttribute('filterUnits', 'userSpaceOnUse');
        const gaussian = document.createElementNS(SVG_NS, 'feGaussianBlur');
        gaussian.setAttribute('in', 'SourceGraphic');
        gaussian.setAttribute('stdDeviation', '0 0');
        blur.appendChild(gaussian);
        host.appendChild(blur);
        document.body.appendChild(host);
        return blur;
    }

    function setFrame(el, y, amount) {
        el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
        // The viewport in the page's own (untransformed) coordinates
        blur.setAttribute('x', String(-REGION_PAD));
        blur.setAttribute('y', (window.scrollY - el.offsetTop - y - REGION_PAD).toFixed(1));
        blur.setAttribute('width', String(el.offsetWidth + REGION_PAD * 2));
        blur.setAttribute('height', String(window.innerHeight + REGION_PAD * 2));
        blur.firstChild.setAttribute('stdDeviation', `0 ${amount.toFixed(2)}`);
    }

    function prepare(el) {
        blurFilter();
        el.style.willChange = 'transform';
        el.style.filter = 'url(#pt-blur)';
    }

    function clearFrame(el) {
        el.style.transform = '';
        el.style.filter = '';
        el.style.willChange = '';
    }

    function run(duration, onFrame) {
        return new Promise(resolve => {
            const start = performance.now();
            (function frame(now) {
                const t = Math.min(1, (now - start) / duration);
                onFrame(t);
                if (t < 1) requestAnimationFrame(frame); else resolve();
            })(start);
        });
    }

    async function leave(href) {
        const el = pageWrapper();
        prepare(el);
        const distance = window.innerHeight * 1.6;
        await run(EXIT_MS, t => {
            const eased = t * t * t;                       // accelerate away
            setFrame(el, -eased * distance, Math.min(MAX_BLUR, MAX_BLUR * t / 0.55));
        });
        try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) { /* no enter animation then */ }
        window.location.href = href;
    }

    async function arrive() {
        const el = pageWrapper();
        prepare(el);
        const distance = window.innerHeight;
        setFrame(el, distance, MAX_BLUR);
        document.documentElement.classList.remove('pt-enter');
        await run(ENTER_MS, t => {
            const eased = 1 - Math.pow(1 - t, 4);          // decelerate into place
            setFrame(el, (1 - eased) * distance, MAX_BLUR * Math.pow(1 - eased, 0.6));
        });
        clearFrame(el);
    }

    function isPageLink(event, link) {
        if (event.defaultPrevented || event.button !== 0) return false;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
        if ((link.target && link.target !== '_self') || link.hasAttribute('download')) return false;
        let url;
        try { url = new URL(link.href, window.location.href); } catch (e) { return false; }
        if (url.origin !== window.location.origin || !/^(https?|file):$/.test(url.protocol)) return false;
        // A jump within the same page is not a page change
        const samePage = url.pathname === window.location.pathname && url.search === window.location.search;
        return !samePage;
    }

    document.addEventListener('click', event => {
        const link = event.target.closest && event.target.closest('a[href]');
        if (!link || reduceMotion || !isPageLink(event, link)) return;
        event.preventDefault();
        leave(link.href);
    });

    // Coming back through the back/forward cache restores the page as it was when we left: mid-exit
    window.addEventListener('pageshow', event => {
        if (event.persisted && page) {
            document.documentElement.classList.remove('pt-enter');
            clearFrame(page);
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        pageWrapper();
        if (document.documentElement.classList.contains('pt-enter')) arrive();
    });
})();

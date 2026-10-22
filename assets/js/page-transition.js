// Page transition, recreated from the "cover" transition on the old cinemataztic.com
// (gatsby-plugin-transition-link AniLink cover, direction "up", duration 0.8s):
// a full-screen panel slides up from the bottom and covers the page, holds briefly while the
// next page loads, then carries on up and out of the top, revealing the new page.
// Loaded in <head> so a page reached through the transition starts covered (no flash).
(function () {
    const DURATION = 0.8;               // seconds, as on the old site
    const HOLD = DURATION / 6;          // pause while covered
    const MOVE = (DURATION - HOLD) / 2; // each slide (in, then out)
    const COLOR = '#1f1f26';
    const KEY = 'ctz-page-transition';
    const root = document.documentElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const style = document.createElement('style');
    style.textContent = `
        /* The panel sits in the page at the current scroll position (absolute, not fixed): iPhone Safari
           draws the page under its bottom toolbar but not fixed elements, so a fixed panel left that
           strip uncovered. Taller than the screen and only shown during a transition, so it never
           makes the page longer. */
        html::after {
            content: '';
            display: none;
            position: absolute;
            left: 0;
            right: 0;
            top: calc(var(--pt-top, 0px) - 25vh);
            height: 150vh;
            z-index: 10000;
            background: ${COLOR};
            transform: translateY(100%);
            pointer-events: none;
        }
        html.pt-covered::after, html.pt-in::after, html.pt-out::after { display: block; }
        html.pt-covered::after { transform: translateY(0); }
        /* While fully covered, the page itself is hidden on the panel's colour: iPhone Safari does not
           draw the fixed panel under its bottom toolbar on a freshly loaded page, so the page showed
           through there */
        html.pt-covered { background: ${COLOR} !important; }
        html.pt-covered body { visibility: hidden; }
        html.pt-in::after { animation: pt-in ${MOVE}s cubic-bezier(0.45, 0, 0.55, 1) forwards; }
        html.pt-out::after { animation: pt-out ${MOVE}s cubic-bezier(0.55, 0, 1, 0.45) forwards; }
        @keyframes pt-in { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes pt-out { from { transform: translateY(0); } to { transform: translateY(-100%); } }
    `;
    document.head.appendChild(style);

    // Arriving through the transition: start covered, then slide the panel out once the page is drawn
    let arriving = false;
    try { arriving = sessionStorage.getItem(KEY) === '1'; sessionStorage.removeItem(KEY); } catch (e) { /* storage unavailable */ }
    if (arriving) {
        root.classList.add('pt-covered');
        const reveal = () => requestAnimationFrame(() => {
            root.classList.remove('pt-covered');
            root.classList.add('pt-out');
            setTimeout(() => root.classList.remove('pt-out'), MOVE * 1000 + 50);
        });
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', reveal, { once: true });
        else reveal();
    }

    // Leaving: links to another page of the site cover the screen first, then navigate
    function isPageLink(a, event) {
        if (!a || event.defaultPrevented || event.button !== 0) return false;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
        if (a.target && a.target !== '_self') return false;
        if (a.hasAttribute('download')) return false;
        const url = new URL(a.href, location.href);
        if (url.origin !== location.origin || !/^https?:$/.test(url.protocol)) return false;
        // Jumps within the current page scroll as usual
        if (url.pathname === location.pathname && url.search === location.search) return false;
        return true;
    }

    document.addEventListener('click', event => {
        const a = event.target.closest && event.target.closest('a[href]');
        if (!isPageLink(a, event)) return;
        event.preventDefault();
        try { sessionStorage.setItem(KEY, '1'); } catch (e) { /* storage unavailable */ }
        root.style.setProperty('--pt-top', `${window.scrollY}px`); // cover what is on screen now
        root.classList.add('pt-in');
        setTimeout(() => root.classList.add('pt-covered'), MOVE * 1000); // panel is up: hide the page behind it too
        setTimeout(() => { location.href = a.href; }, (MOVE + HOLD) * 1000);
    });

    // Coming back with the browser's back button can restore a covered page from cache: uncover it
    window.addEventListener('pageshow', event => {
        if (event.persisted) root.classList.remove('pt-in', 'pt-covered', 'pt-out');
    });
})();

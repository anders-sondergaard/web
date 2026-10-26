// Splash intro on the front page: a pink, a blue and a yellow panel rise from the bottom one after the
// other. Once the yellow panel is up it stays put and the page fades in over it (the header is the same
// yellow, so only the content appears).
// Shown once per visit, not when arriving from another page of the site (the page transition handles
// that) and not for people who prefer reduced motion. Loaded in <head> so the page starts covered.
(function () {
    const KEY = 'ctz-intro-seen';
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (root.classList.contains('pt-covered')) return;
    let seen = false;
    try { seen = sessionStorage.getItem(KEY) === '1'; sessionStorage.setItem(KEY, '1'); } catch (e) { /* storage unavailable */ }
    if (seen) return;

    const RISE = 0.7, GAP = 0.28, HOLD = 0.15, FADE = 0.8; // seconds
    const LEAVE_AT = (GAP * 2 + RISE + HOLD) * 1000;

    const style = document.createElement('style');
    style.textContent = `
        html.intro { background: #0a0a0c !important; overflow: hidden; }
        html.intro body { visibility: hidden; }
        .intro-splash { position: fixed; top: -10vh; left: 0; right: 0; height: 120vh; z-index: 10001; visibility: visible; pointer-events: none; }
        .intro-splash > div { position: absolute; inset: 0; transform: translateY(100%); animation: intro-up ${RISE}s cubic-bezier(0.65, 0, 0.35, 1) forwards; }
        .intro-splash > :nth-child(1) { background: #f869b9; }
        .intro-splash > :nth-child(2) { background: #3dc0c8; animation-delay: ${GAP}s; }
        .intro-splash > :nth-child(3) { background: #fece00; animation-delay: ${GAP * 2}s; }
        .intro-splash.is-leaving { opacity: 0; transition: opacity ${FADE}s ease; }
        @keyframes intro-up { to { transform: translateY(0); } }
    `;
    document.head.appendChild(style);
    root.classList.add('intro');

    const start = () => {
        const splash = document.createElement('div');
        splash.className = 'intro-splash';
        splash.setAttribute('aria-hidden', 'true');
        splash.innerHTML = '<div></div><div></div><div></div>';
        document.body.appendChild(splash);
        setTimeout(() => {
            root.classList.remove('intro');
            splash.classList.add('is-leaving');
            setTimeout(() => splash.remove(), FADE * 1000 + 100);
        }, LEAVE_AT);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
    else start();
})();

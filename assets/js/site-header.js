// Menu logo: the CINEMATAZTIC wordmark turns into the round Cinemataztic mark once the page is
// scrolled, and back again at the top. The wordmark wipes away to the left while the mark spins in
// where it started. Shared by every page; loaded with defer so the header is already there.
(function () {
    const wordmark = document.querySelector('body > header .font-logo');
    const link = wordmark && wordmark.closest('a');
    if (!link) return;
    const header = link.closest('header');
    const THRESHOLD = 80; // px scrolled before the logo turns into the mark

    const style = document.createElement('style');
    style.textContent = `
        .logo-morph { position: relative; }
        .logo-morph .font-logo {
            display: inline-block;
            clip-path: inset(0 0 0 0);
            transition: clip-path 500ms cubic-bezier(0.65, 0, 0.35, 1), opacity 400ms ease;
        }
        .logo-morph .logo-mark {
            position: absolute;
            left: 0;
            top: 50%;
            width: 34px;
            height: 34px;
            margin-top: -17px;
            opacity: 0;
            transform: scale(0.4) rotate(-120deg);
            transition: opacity 350ms ease, transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
            pointer-events: none;
        }
        header.logo-compact .logo-morph .font-logo { clip-path: inset(0 100% 0 0); opacity: 0; }
        header.logo-compact .logo-morph .logo-mark { opacity: 1; transform: scale(1) rotate(0); transition-delay: 150ms; }
        @media (prefers-reduced-motion: reduce) {
            .logo-morph .font-logo, .logo-morph .logo-mark { transition: none; }
        }
    `;
    document.head.appendChild(style);

    // The round mark (same shape as assets/logos/cinemataztic-mark-white.svg), in the text colour so it
    // turns dark on the coloured hero menus just like the wordmark does
    link.classList.add('logo-morph');
    link.insertAdjacentHTML('beforeend', `
        <svg class="logo-mark text-white" viewBox="0 0 32 32" aria-hidden="true">
            <g transform="matrix(0.0309066,0,0,0.0309066,0.17581,0.10728)">
                <path fill="currentColor" d="M594.616,1020.23L594.616,773.955C636.148,760.745 675.091,737.331 707.489,703.782C811.75,595.816 808.747,423.772 700.782,319.511C592.816,215.25 420.772,218.253 316.511,326.218C212.25,434.184 215.253,606.228 323.218,710.489C354.336,740.539 390.777,761.679 429.384,773.963L429.384,1020.36C361.433,1009.29 294.622,984.251 233.178,944.349C-3.945,790.36 -71.338,473.3 82.651,236.178C236.64,-0.945 553.7,-68.338 790.822,85.651C1027.94,239.64 1095.34,556.7 941.349,793.822C859.606,919.696 731.911,997.742 594.616,1020.23ZM531.135,503.594C498.411,482.343 489.11,438.587 510.362,405.863C531.613,373.139 575.368,363.839 608.092,385.09C640.816,406.341 650.117,450.097 628.866,482.821C607.614,515.544 563.859,524.845 531.135,503.594Z"/>
            </g>
        </svg>`);
    link.setAttribute('aria-label', 'Cinemataztic home');

    let frame = 0;
    const update = () => { frame = 0; header.classList.toggle('logo-compact', window.scrollY > THRESHOLD); };
    window.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
    update();
})();

// Phone menu, in the style of koalition.com: a full-screen dark panel under the menu bar with big
// links that rise in one after another, then contact details and the office. The
// hamburger folds into a cross. Built from each page's own #mobileDrawer, so the links stay per page.
(function () {
    const oldDrawer = document.getElementById('mobileDrawer');
    const oldBtn = document.getElementById('mobileMenuBtn');
    if (!oldDrawer || !oldBtn) return;
    const header = oldBtn.closest('header');

    const style = document.createElement('style');
    style.textContent = `
        .m-menu {
            position: fixed; inset: 0; z-index: 40;
            display: flex; flex-direction: column;
            padding-top: 80px; overflow-y: auto; overscroll-behavior: contain;
            background: #121216; color: #ffffff;
            /* Rolls down from the top, so the menu bar is on the dark panel from the first frame */
            clip-path: inset(0 0 100% 0); visibility: hidden;
            transition: clip-path 450ms cubic-bezier(0.65, 0, 0.35, 1), visibility 0s linear 450ms;
        }
        .m-menu.is-open { clip-path: inset(0 0 0 0); visibility: visible; transition-delay: 0s; }
        @media (min-width: 768px) { .m-menu { display: none; } }
        .m-menu__inner { display: flex; flex-direction: column; flex: 1; padding: 32px 16px 24px; }
        @media (min-width: 640px) { .m-menu__inner { padding-left: 24px; padding-right: 24px; } }
        .m-menu__links a {
            display: block; padding: clamp(0.4rem, 2vw, 0.7rem) 0;
            font-size: 36px; font-weight: 700; letter-spacing: -0.025em; line-height: 1.05;
            color: rgba(255, 255, 255, 0.6); transition: color 150ms;
        }
        .m-menu__links a:hover, .m-menu__links a.is-current { color: #ffffff; }
        .m-menu__rise { opacity: 0; transform: translateY(24px); transition: opacity 500ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1); }
        .m-menu.is-open .m-menu__rise { opacity: 1; transform: none; transition-delay: calc(80ms + var(--i, 0) * 55ms); }
        .m-menu__rule { border: 0; border-top: 1px solid #1f1f26; margin: 40px 0; }
        .m-menu__contact a { display: block; font-size: 17px; line-height: 1.6; }
        .m-menu__contact a:first-child { font-weight: 700; }
        .m-menu__code { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; line-height: 1; }
        .m-menu__foot { margin-top: auto; padding-top: 40px; display: flex; align-items: center; justify-content: space-between; gap: 16px; font-size: 12px; color: #9ca3af; }
        .m-menu__foot a, .m-menu__foot button { color: inherit; text-transform: uppercase; font-weight: 700; letter-spacing: 0.1em; }
        .m-menu__foot a:hover, .m-menu__foot button:hover { color: #ffffff; }
        /* While the panel is open the menu bar is see-through with white logo and cross */
        /* The bar switches colour at once (no fade), in step with the panel */
        header.menu-open, header.menu-switch, header.menu-switch * { transition: none !important; }
        header.menu-open { background-color: transparent !important; border-color: transparent !important; -webkit-backdrop-filter: none !important; backdrop-filter: none !important; }
        header.menu-open, header.menu-open .text-white { color: #ffffff !important; }
        .m-burger { width: 32px; height: 32px; display: block; }
        .m-burger line { transition: transform 400ms cubic-bezier(0.65, 0, 0.35, 1), opacity 200ms ease; transform-origin: 16px 16px; }
        header.menu-open .m-burger line:nth-child(1) { transform: rotate(45deg) translateY(6px); }
        header.menu-open .m-burger line:nth-child(2) { opacity: 0; }
        header.menu-open .m-burger line:nth-child(3) { transform: rotate(-45deg) translateY(-6px); }
        html.menu-locked, html.menu-locked body { overflow: hidden; }
        @media (prefers-reduced-motion: reduce) {
            .m-menu, .m-menu__rise, .m-burger line { transition: none !important; }
        }
    `;
    document.head.appendChild(style);

    // Links from the old drawer; the one for this page is shown white
    const here = location.pathname.split('/').pop() || 'index.html';
    const links = [...oldDrawer.querySelectorAll(':scope > a')];

    const menu = document.createElement('div');
    menu.className = 'm-menu';
    menu.id = 'mobileDrawer';
    menu.setAttribute('aria-hidden', 'true');
    menu.innerHTML = `
        <div class="m-menu__inner">
            <nav class="m-menu__links" aria-label="Menu"></nav>
            <hr class="m-menu__rule m-menu__rise">
            <div class="m-menu__contact m-menu__rise">
                <a href="mailto:info@cinemataztic.com">info@cinemataztic.com</a>
                <a href="tel:+4553587129">+45 5358 7129</a>
            </div>
            <div class="m-menu__rise" style="margin-top: 48px">
                <div class="m-menu__code">HQ</div>
                <div style="margin-top: 8px; font-size: 13px; font-weight: 700; text-transform: uppercase">Denmark</div>
                <div style="margin-top: 4px; font-size: 13px; line-height: 1.5; color: #9ca3af">Hellerupvej 46<br>2900 Hellerup<br>Denmark</div>
            </div>
            <div class="m-menu__foot m-menu__rise">
                <span>© 2026 Cinemataztic</span>
            </div>
        </div>`;
    const nav = menu.querySelector('nav');
    links.forEach(a => {
        const link = document.createElement('a');
        link.href = a.getAttribute('href');
        link.textContent = a.textContent.trim();
        if (link.getAttribute('href') === here) link.classList.add('is-current');
        nav.appendChild(link);
    });
    // Everything after the links rises in on the same stagger
    [...nav.children, ...menu.querySelectorAll('.m-menu__inner > .m-menu__rise')].forEach((el, i) => {
        el.classList.add('m-menu__rise');
        el.style.setProperty('--i', i);
    });
    oldDrawer.remove();
    document.body.appendChild(menu); // outside the blurred header, so it can cover the whole screen

    // A fresh button drops the page's old toggle; three lines that fold into a cross
    const btn = oldBtn.cloneNode(false);
    btn.innerHTML = '<svg class="m-burger" viewBox="0 0 32 32" fill="none" aria-hidden="true"><line x1="6" y1="10" x2="26" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="6" y1="22" x2="26" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    btn.setAttribute('aria-expanded', 'false');
    oldBtn.replaceWith(btn);

    // Opening: the bar turns see-through at once while the panel rolls down from the top. Closing: the
    // panel rolls back up and the bar gets its colour back only once the panel is gone.
    let closeTimer = 0;
    const setOpen = (open) => {
        if (open === menu.classList.contains('is-open')) return;
        menu.classList.remove('hidden');
        menu.classList.toggle('is-open', open);
        menu.setAttribute('aria-hidden', String(!open));
        clearTimeout(closeTimer);
        if (open) {
            header.classList.add('menu-open');
        } else {
            closeTimer = setTimeout(() => {
                header.classList.add('menu-switch');
                header.classList.remove('menu-open');
                requestAnimationFrame(() => requestAnimationFrame(() => header.classList.remove('menu-switch')));
            }, 450);
        }
        document.documentElement.classList.toggle('menu-locked', open);
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    btn.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
    menu.addEventListener('click', (e) => { if (e.target.closest('a, button')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
})();

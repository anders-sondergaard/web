// DOCS LEFT MENU
// The pages of the docs area, in menu order, grouped under small headings. A new page is added here
// (and gets its own .html file in the docs folder, plus a line in sitemap.xml).
//   title  shown in the menu
//   file   the page's file in the docs folder
const docsMenu = [
    {
        group: "Start",
        pages: [
            { title: "Home", file: "index.html" }
        ]
    },
    {
        group: "Support",
        pages: [
            { title: "Get support", file: "support.html" }
        ]
    },
    {
        group: "App",
        pages: [
            { title: "Info", file: "app.html" },
            { title: "Terms and conditions", file: "app-legal.html" },
            { title: "Messages", file: "app-messages.html" }
        ]
    },
    {
        group: "Cloud",
        pages: [
            { title: "Access to the cloud", file: "cloud.html" },
            { title: "How to use the Cloud", file: "cloud-how.html" }
        ]
    },
    {
        group: "DCH",
        pages: [
            { title: "Setup the DCH", file: "dch.html" },
            { title: "Setup Doremi", file: "dch-doremi.html" },
            { title: "Setup GDC", file: "dch-gdc.html" },
            { title: "Change unit", file: "dch-change-unit.html" },
            { title: "Internal Settings", file: "dch-internal-settings.html" },
            { title: "Troubleshooting", file: "dch-troubleshooting.html" },
            { title: "DCH-P Settings", file: "dch-p-settings.html" }
        ]
    },
    {
        group: "Miscellaneous",
        pages: [
            { title: "Commercial Q&A", file: "commercial-qa.html" }
        ]
    },
    {
        group: "Products",
        pages: [
            { title: "CineGame", file: "cinegame.html" },
            { title: "Programmatic", file: "programmatic.html" },
            { title: "CineFun", file: "cinefun.html" },
            { title: "General information", file: "products.html" }
        ]
    },
    {
        group: "Rewards",
        pages: [
            { title: "Reward options", file: "rewards.html" },
            { title: "Pick a winner in a draft", file: "rewards-pick-a-winner.html" }
        ]
    }
];

// Draws the menu into #docsNav and marks the page you are on. On phones the menu folds into a
// "Docs menu" button above the page text (see docs.css).
(function () {
    const nav = document.getElementById('docsNav');
    if (!nav) return;
    const here = location.pathname.split('/').pop() || 'index.html';
    const esc = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    nav.innerHTML = docsMenu.map(g => `
        <div class="docs-nav-group">
            <span class="docs-nav-heading">${esc(g.group)}</span>
            ${g.pages.map(p => `<a href="${esc(p.file)}" class="docs-nav-link${p.file === here ? ' is-current' : ''}"${p.file === here ? ' aria-current="page"' : ''}>${esc(p.title)}</a>`).join('')}
        </div>`).join('');
    // A closed <details> hides its menu, so on big screens (no fold-out) it is kept open
    const fold = nav.closest('details');
    const wide = window.matchMedia('(min-width: 1024px)');
    const syncFold = () => { if (fold) fold.open = wide.matches; };
    syncFold();
    wide.addEventListener('change', syncFold);
    const current = docsMenu.flatMap(g => g.pages).find(p => p.file === here);
    const label = document.getElementById('docsNavLabel');
    if (label && current) label.textContent = current.title;
})();

// Case cards, logos, the image slider and the popup's previous/next arrows, shared by every page that
// shows cases. The cases themselves are in assets/js/cases.js.
// --- CASE CARD COVERS ---
// Case cards show the client's logo on a dark card (like the Subway and Fanta covers), centred between
// the top of the card and the card text. The cover image is still used in the case popup.
// Logos are looked up by client name; a case can also set its own `logo`. Dark logos are shown white
// (white), and M&M's gets a white outline (outline) like on its own packaging. Clients without a logo
// get their name as a wordmark.
// Simple Icons logos come in one colour; their CDN paints them in the brand colour
const brandIcon = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`;
const caseLogos = {
    "Subway": { src: "assets/logos/subway.svg" },
    "Fanta": { src: "assets/logos/fanta.svg" },
    "M&M's + Extra": { src: "assets/logos/mms.svg", outline: true },
    "Politikens Forlag": { src: "assets/logos/politiken.svg", white: true },
    "Tivoli": { src: "assets/logos/tivoli.svg", white: true },
    "IKEA": { src: "assets/logos/ikea.svg" },
    "3": { src: "assets/logos/three.svg", white: true },
    "Fazer": { src: "assets/logos/fazer.svg" },
    "Hummel": { src: "assets/logos/hummel.svg", white: true },
    "JD Sports": { src: "assets/logos/jdsports.svg", white: true },
    "Samsung": { src: "assets/logos/samsung.svg", white: true },
    "McDonald's": { src: brandIcon("mcdonalds", "FBC817") },
    "Podimo": { src: "assets/logos/podimo.svg" },
    "LEGO": { src: "assets/logos/lego.svg" },
    "ARLA": { src: "assets/logos/arla.svg" },
    "Red Bull": { src: "assets/logos/redbull.svg", scale: 1.35 }, // Simple Icons, cropped to the drawing
    "Coca-Cola": { src: "assets/logos/cocacola.svg" }, // Simple Icons, cropped to the drawing
    "Boozt.com": { src: "assets/logos/boozt.svg", white: true },
    // Pepsi left Simple Icons after 9.x: the old icon is painted here instead (see colourCaseLogo)
    "Pepsi Max": { src: "https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/pepsi.svg", color: "#2152A4" },
    "Cinemataztic": { src: "assets/logos/cinemataztic-mark-white.svg" },
    "Ben & Jerry's": { src: "assets/logos/benjerry.svg" },
    "Nokia": { src: brandIcon("nokia", "005AFF") },
    "Sprite": { src: "assets/logos/sprite.svg" },
    "Mentos": { src: "assets/logos/mentos.svg" },
    "Dr. Oetker": { src: "assets/logos/droetker.svg" },
    "HBO": { src: "assets/logos/hbo.svg", white: true },
    "DFDS": { src: "assets/logos/dfds.svg", white: true },
    "Oister": { src: "assets/logos/oister.svg" },
    "Virgin Mobile": { src: "assets/logos/virginmobile.png" },
    "Matas": { src: "assets/logos/matas.svg", white: true },
    "Specsavers": { src: "assets/logos/specsavers.svg" },
    "BookBeat": { src: "assets/logos/bookbeat.svg", white: true },
    "Allianz": { src: "assets/logos/allianz.svg", white: true }, // Wikimedia Commons, File:Allianz.svg
    "Norlys": { src: "assets/logos/norlys.svg" }, // logo from norlys.dk
    "Apotekets": { src: "assets/logos/apotekets-white.png" }, // logo from apotekets.dk, made white on transparent
    "3 Mobile": { src: "assets/logos/three.svg", white: true },
    "LEGO House": { src: "assets/logos/lego.svg" },
    "VillaVilla": { src: "assets/logos/villavilla.svg" }, // logo from villavilla.dk
    "LYKO": { src: "assets/logos/lyko.svg" }, // logo from lyko.com (white)
    "Ase": { src: "assets/logos/ase.svg" }, // logos below from the clients' own websites
    "Royal Copenhagen": { src: "assets/logos/royal-copenhagen.svg" },
    "Liiga": { src: "assets/logos/liiga.png" },
    "Battery": { src: "assets/logos/battery.png" },
    "Bet25": { src: "assets/logos/bet25.svg" },
    "Tryg": { src: "assets/logos/tryg.svg" }, // Wikimedia Commons, File:Tryg logo.svg
    "Toms": { src: "assets/logos/toms.svg" }, // Wikimedia Commons, File:Toms.svg
    "Santander": { src: "assets/logos/santander.svg" }, // Wikimedia Commons, File:Banco Santander Logotipo.svg
    "ODEON": { src: "assets/logos/odeon.svg" }, // Wikimedia Commons, File:Odeon logo.svg
    "Kirppu": { src: "assets/logos/kirppu.svg" }, // logo from kirppu.dk (the version for dark backgrounds)
    "Magasin": { src: "assets/logos/magasin.png" }, // supplied by the user, made transparent
    "TV2 Play": { src: "assets/logos/tv2play.png" }, // supplied by the user (the TV2 circle is cut out, see KNOCKOUT_LOGOS)
    "Tuborg": { src: "assets/logos/tuborg.png" }, // supplied by the user
    "REDyPLAY": { src: "assets/logos/redyplay.png" }, // supplied by the client: a white R on a red square (cut out, see KNOCKOUT_LOGOS)
    // White on transparent, made from the logo images supplied for these cases
    "Sonic": { src: "assets/logos/sonic.png" },
    "Scream VI": { src: "assets/logos/scream.png", scale: 1.4 },
    "Bundeswehr": { src: "assets/logos/bundeswehr.png" },
    "Visit Germany": { src: "assets/logos/visitgermany.png" },
    "Trolls World Tour": { src: "assets/logos/trolls.png" }
};

(function () {
    const style = document.createElement('style');
    style.textContent = `
        .case-logo { position: absolute; left: 0; right: 0; top: 0; height: 60%; display: flex; align-items: center; justify-content: center; padding: 0 14%; }
        .case-logo-bg { position: absolute; inset: 0; background: #232323; }
        .case-logo img { display: block; width: auto; height: 0; object-fit: contain; transition: transform 500ms; }
        .group:hover .case-logo img, .group:hover .case-logo span { transform: scale(1.05); }
        .case-logo-crop { position: relative; display: block; overflow: hidden; flex: none; transition: transform 500ms; }
        .case-logo .case-logo-crop img { position: absolute; max-width: none; height: auto; }
        .group:hover .case-logo .case-logo-crop { transform: scale(1.05); }
        .group:hover .case-logo .case-logo-crop img { transform: none; }
        /* Every logo is white. Logos with a filled shape behind their name (a badge) are cut out instead:
           the shape turns white and the lighter name inside becomes see-through (see KNOCKOUT_LOGOS) */
        .case-logo img { filter: brightness(0) invert(1); }
        .case-logo img.is-knockout { filter: url(#caseLogoKnockout); }
        .case-logo img.is-knockout-light { filter: url(#caseLogoKnockoutLight); }
        .case-logo span { display: block; text-align: center; font-weight: 900; text-transform: uppercase; line-height: 0.95; letter-spacing: -0.01em; color: #ffffff; font-size: clamp(1.4rem, 9cqw, 2.6rem); transition: transform 500ms; overflow-wrap: anywhere; }
        :has(> .case-logo) { container-type: inline-size; }
        /* The logo in the case popup (cases without a video or picture yet): centred in the frame */
        .case-modal-logo .case-logo { top: 20%; }
    `;
    document.head.appendChild(style);
    // The cut-out filter: white, with dark parts solid and light parts see-through
    const addFilter = () => document.body.insertAdjacentHTML('beforeend', `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="caseLogoKnockout" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -0.2126 -0.7152 -0.0722 1 0"/><feComponentTransfer><feFuncA type="linear" slope="3" intercept="-0.6"/></feComponentTransfer></filter><filter id="caseLogoKnockoutLight" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0.2126 0.7152 0.0722 0 0"/><feComponentTransfer><feFuncA type="linear" slope="3" intercept="-1"/></feComponentTransfer></filter></svg>`);
    if (document.body) addFilter(); else document.addEventListener('DOMContentLoaded', addFilter);
})();

const escapeCoverText = s => String(s || '').replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);

// Badges with light lettering on a dark shape (Liiga): the lettering turns white and the shape see-through
const KNOCKOUT_LIGHT_LOGOS = new Set(['assets/logos/liiga.png']);

// Logos that turn into a blob either way (letters with a dark outline): the card shows the name instead
const NAME_INSTEAD_OF_LOGO = new Set(['assets/cases/pitch/logo_kims.png']);

// Badge logos (a name on a filled shape) shown as a white shape with the name cut out
const KNOCKOUT_LOGOS = new Set([
    'assets/logos/ase.svg',
    'assets/logos/lego.svg', 'assets/logos/specsavers.svg', 'assets/logos/arla.svg', 'assets/logos/fanta.svg', 'assets/logos/ikea.svg',
    'assets/logos/redyplay.png', 'assets/logos/tv2play.png',
    'assets/logos/fazer.svg', 'assets/logos/benjerry.svg', 'assets/logos/mentos.svg', 'assets/logos/droetker.svg', 'assets/logos/oister.svg', 'assets/logos/tryg.svg',
    'assets/cases/pitch/marvel_logo_trans.png', 'assets/cases/pitch/oreo_logo.png', 'assets/cases/pitch/kfc-logo.png', 'assets/cases/pitch/hj_logo.png',
    'assets/cases/pitch/lego_city_logo.png', 'assets/cases/pitch/cocio_logo.png', 'assets/cases/pitch/stimorol_logo.png',
    'assets/cases/pitch/mcd_logo_big.png'
]);

// Card cover markup: the dark background plus the logo (or wordmark), placed by fitCaseLogos()
const logoClass = src => KNOCKOUT_LOGOS.has(src) ? 'is-knockout' : KNOCKOUT_LIGHT_LOGOS.has(src) ? 'is-knockout-light' : '';

function caseCover(c) {
    let logo = c.logo ? { src: c.logo } : caseLogos[c.client];
    if (logo && NAME_INSTEAD_OF_LOGO.has(logo.src)) logo = null;
    const name = escapeCoverText(c.client).replace(/\s*\(demo\)$/i, '');
    // logoBox [x, y, w, h, image w, image h]: show only the visible part of a logo image with empty margins
    if (logo && c.logoBox) {
        const [x, y, w, h, W, H] = c.logoBox;
        return `<div class="case-logo-bg"></div><div class="case-logo"><span class="case-logo-crop" data-ratio="${w / h}">`
            + `<img src="${logo.src}" alt="${name}" loading="lazy" onload="fitCaseLogo(this.closest('.case-logo').parentElement)" class="${logoClass(logo.src)}"`
            + ` style="width: ${W / w * 100}%; left: ${-x / w * 100}%; top: ${-y / h * 100}%"></span></div>`;
    }
    const mark = logo
        ? `<img ${logo.color ? `data-src="${logo.src}" data-color="${logo.color}"` : `src="${logo.src}"`} alt="${name}"${logo.scale ? ` data-scale="${logo.scale}"` : ''} loading="lazy" onload="fitCaseLogo(this.closest('.case-logo').parentElement)" class="${logoClass(logo.src)}">`
        : `<span>${name}</span>`;
    return `<div class="case-logo-bg"></div><div class="case-logo">${mark}</div>`;
}

// One-colour icons that the colour CDN does not have: fetch the SVG and paint it in the brand colour
const colouredLogos = {};
function colourCaseLogo(img) {
    const { src, color } = img.dataset;
    colouredLogos[src] = colouredLogos[src] || fetch(src).then(r => r.text())
        .then(svg => 'data:image/svg+xml,' + encodeURIComponent(svg.replace('<svg ', `<svg fill="${color}" `)));
    colouredLogos[src].then(url => { img.src = url; });
}

// Size the logo area to the space between the top of the card and the card title, so the logo sits in
// the middle of it. Logos are sized by area, so wide and square logos look about as big as each other. Runs for every card as it appears and whenever a card changes size.
const caseLogoSizer = new ResizeObserver(entries => entries.forEach(e => fitCaseLogo(e.target)));
function fitCaseLogo(media) {
    const area = media.querySelector(':scope > .case-logo');
    const title = media.querySelector(':scope > .bottom-0 h3');
    if (!area) return;
    // On a card the logo area ends at the title; in the popup (no title) it keeps its own height
    const top = title ? title.getBoundingClientRect().top - media.getBoundingClientRect().top : 0;
    if (top > 0) area.style.height = `${top / (media.getBoundingClientRect().height / media.offsetHeight || 1)}px`;
    const img = area.querySelector('img');
    const crop = area.querySelector('.case-logo-crop');
    if (img && img.complete) {
        // Aspect ratio of the cropped logo, or from a trial height (SVGs with only a viewBox have no natural size)
        let ratio = crop && Number(crop.dataset.ratio);
        if (!ratio) {
            img.style.width = 'auto';
            img.style.height = '100px';
            ratio = img.getBoundingClientRect().width / img.getBoundingClientRect().height || 1;
        }
        const w = media.offsetWidth;
        // Compact or tall marks (Red Bull's bull, Scream's ghost) can ask for a little more room with `scale` in caseLogos
        const scale = Number(img.dataset.scale) || 1;
        let h = w * 0.3 * scale / Math.sqrt(ratio);
        h = Math.min(h, w * 0.72 / ratio, area.offsetHeight * 0.45 * scale);
        if (crop) Object.assign(crop.style, { width: `${h * ratio}px`, height: `${h}px` });
        else img.style.height = `${h}px`;
    }
}
new MutationObserver(() => {
    document.querySelectorAll('.case-logo:not([data-fitted])').forEach(area => {
        area.dataset.fitted = '';
        const img = area.querySelector('img[data-color]');
        if (img) colourCaseLogo(img);
        caseLogoSizer.observe(area.parentElement);
    });
}).observe(document.documentElement, { childList: true, subtree: true });

// Category colours, as on the product pages; Leadsite cases have no filter on the cases page
const categoryColors = { CineGame: '#f869b9', Programmatic: '#3dc0c8', CineFun: '#6ceec4', Leadsite: '#fea917', Pitch: '#fece00' };
const categoryColor = cat => categoryColors[cat] || '#3dc0c8';

// --- IMAGE SLIDER IN THE CASE POPUP ---
// Cases with `images` (all pitches, and e.g. Hummel) show them one at a time with arrows instead of a video (also the arrow keys and
// swiping), a counter and dots.
function mountImageSlider(box, images, color = '#fece00', title = '') {
    // A single image is just shown: no arrows, dots or counter
    if (images.length === 1) {
        box.innerHTML = `<img src="${escapeCoverText(images[0])}" alt="${escapeCoverText(title)}" class="absolute inset-0 w-full h-full object-contain bg-black">`;
        return;
    }
    let index = 0;
    box.innerHTML = `
        <div class="pitch-slider absolute inset-0 overflow-hidden select-none">
            <div class="pitch-track flex h-full transition-transform duration-500 ease-out">
                ${images.map((src, i) => `<img src="${escapeCoverText(src)}" alt="${escapeCoverText(title ? `${title}, image ${i + 1} of ${images.length}` : `Image ${i + 1} of ${images.length}`)}" class="w-full h-full shrink-0 object-contain bg-black" draggable="false">`).join('')}
            </div>
            <button type="button" data-step="-1" aria-label="Previous image" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-brand-yellow hover:text-black transition disabled:opacity-30 disabled:pointer-events-none"><i class="fa-solid fa-arrow-left"></i></button>
            <button type="button" data-step="1" aria-label="Next image" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-brand-yellow hover:text-black transition disabled:opacity-30 disabled:pointer-events-none"><i class="fa-solid fa-arrow-right"></i></button>
            <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                ${images.map((_, i) => `<button type="button" data-go="${i}" aria-label="Image ${i + 1}" class="pitch-dot w-2 h-2 rounded-full bg-white/40 transition"></button>`).join('')}
            </div>
            <span class="pitch-count absolute bottom-3 right-4 text-[10px] font-bold uppercase tracking-widest text-white/80"></span>
        </div>`;
    const slider = box.firstElementChild;
    const track = slider.querySelector('.pitch-track');
    const show = (i) => {
        index = Math.max(0, Math.min(images.length - 1, i));
        track.style.transform = `translateX(-${index * 100}%)`;
        slider.querySelector('[data-step="-1"]').disabled = index === 0;
        slider.querySelector('[data-step="1"]').disabled = index === images.length - 1;
        slider.querySelectorAll('.pitch-dot').forEach((d, n) => {
            d.style.backgroundColor = n === index ? color : '';
            d.style.width = n === index ? '1.25rem' : '';
        });
        slider.querySelector('.pitch-count').textContent = `${index + 1} / ${images.length}`;
    };
    slider.addEventListener('click', (e) => {
        const step = e.target.closest('[data-step]');
        const go = e.target.closest('[data-go]');
        if (step) show(index + Number(step.dataset.step));
        if (go) show(Number(go.dataset.go));
    });
    // Swipe on touch screens
    let startX = null;
    slider.addEventListener('pointerdown', (e) => { startX = e.clientX; });
    slider.addEventListener('pointerup', (e) => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        startX = null;
        if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
    });
    slider.pitchStep = (d) => show(index + d);
    show(0);
}
document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const slider = document.querySelector('#caseDetailModal:not(.hidden) .pitch-slider');
    if (slider) slider.pitchStep(e.key === 'ArrowRight' ? 1 : -1);
});

// The site used to keep CMS edits in the browser; drop what is left of them so nobody sees old cases
try {
    localStorage.removeItem('cinemataztic_cms_data_v4');
    localStorage.removeItem('cinemataztic_cms_backup_before_title_restore');
} catch (e) { /* storage unavailable */ }

// --- CASE POPUP: PREVIOUS / NEXT CASE, COPY LINK AND DOWNLOAD ---
// Arrows just outside the open case (under it on smaller screens) step through the cases the page is
// showing, in the same order, and wrap around at the ends. The arrow keys do the same unless the case
// has an image slider, which uses them for its images. getList returns the cases currently listed.
// A copy button copies a link that opens the case on the cases page, to paste into a mail or a chat.
// A download button saves the case's video, or else its pictures (several in one zip); Programmatic results
// slides are saved as PNG, the photo with the graphics on top.
function initCaseNav(getList) {
    const modal = document.getElementById('caseDetailModal');
    const card = modal && modal.firstElementChild;
    if (!card) return;
    const btn = (dir, icon, label, extra) => `<button type="button" data-case-step="${dir}" aria-label="${label}" class="${extra} w-12 h-12 rounded-full bg-black/70 border border-white/25 text-white items-center justify-center hover:bg-white hover:text-black transition"><i class="fa-solid ${icon}"></i></button>`;
    // Wrap the card so the arrows can sit outside it (the card itself clips its contents)
    const wrap = document.createElement('div');
    wrap.className = 'relative max-w-4xl w-full my-8';
    card.classList.remove('my-8');
    card.replaceWith(wrap);
    wrap.appendChild(card);
    wrap.insertAdjacentHTML('beforeend',
        btn(-1, 'fa-arrow-left', 'Previous case', 'hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-20') +
        btn(1, 'fa-arrow-right', 'Next case', 'hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-20') +
        `<div class="lg:hidden flex justify-between mt-4">${btn(-1, 'fa-arrow-left', 'Previous case', 'flex')}${btn(1, 'fa-arrow-right', 'Next case', 'flex')}</div>`);

    // Copy link and download, as round icon buttons next to the client name
    const row = document.getElementById('caseModalClient');
    const iconBtn = (attr, icon, label) => `<button type="button" ${attr} title="${label}" aria-label="${label}" class="w-9 h-9 rounded-full border border-white/30 text-white text-sm inline-flex items-center justify-center hover:bg-white hover:text-black transition"><i class="${icon}"></i></button>`;
    if (row) {
        row.parentElement.insertAdjacentHTML('beforeend', `<span class="inline-flex gap-2" style="margin-left: auto">`
            + iconBtn('data-case-share', 'fa-regular fa-copy', 'Copy link to this case')
            + iconBtn('data-case-download', 'fa-solid fa-download', 'Download')
            + `</span>`);
        // On phones there is no room for the client name beside the buttons (it is in the title anyway)
        const hideClient = document.createElement('style');
        hideClient.textContent = '@media (max-width: 639px) { #caseModalClient { display: none; } }';
        document.head.appendChild(hideClient);
    }
    const copy = (text) => navigator.clipboard && window.isSecureContext
        ? navigator.clipboard.writeText(text)
        : new Promise((resolve) => {
            const t = Object.assign(document.createElement('textarea'), { value: text });
            t.style.cssText = 'position:fixed;opacity:0';
            document.body.appendChild(t);
            t.select();
            document.execCommand('copy');
            t.remove();
            resolve();
        });
    // Briefly swap a button's icon (a tick when done, a spinner while working)
    const flash = (b, icon, ms) => {
        const i = b.querySelector('i');
        clearTimeout(b.resetIcon);
        b.dataset.icon = b.dataset.icon || i.className;
        i.className = icon;
        if (ms) b.resetIcon = setTimeout(() => { i.className = b.dataset.icon; }, ms);
    };
    modal.addEventListener('click', (e) => {
        const share = e.target.closest('[data-case-share]');
        if (share && current) {
            const link = new URL(`cases.html?case=${encodeURIComponent(current)}`, location.href).href;
            copy(link).then(() => flash(share, 'fa-solid fa-check', 2000));
        }
        const down = e.target.closest('[data-case-download]');
        const item = current && siteCases.find(c => c.id === current);
        if (down && item && !down.disabled) {
            down.disabled = true;
            flash(down, 'fa-solid fa-spinner fa-spin');
            downloadCase(item)
                .then(() => flash(down, 'fa-solid fa-check', 2000))
                .catch(() => flash(down, 'fa-solid fa-xmark', 2000))
                .finally(() => { down.disabled = false; });
        }
    });

    let current = null;
    const open = window.openCaseDetailModal;
    window.openCaseDetailModal = (id) => {
        current = id;
        open(id);
        const item = siteCases.find(c => c.id === id);
        const down = modal.querySelector('[data-case-download]');
        if (down) down.style.display = (item && (item.video || (item.images && item.images.length) || item.cover)) ? '' : 'none';
    };
    const step = (dir) => {
        let list = getList();
        let i = list.findIndex(c => c.id === current);
        if (i < 0) { // opened from a link: step through the cases of its own category
            const cat = (list.concat(siteCases).find(c => c.id === current) || {}).category;
            list = getList(cat);
            i = list.findIndex(c => c.id === current);
        }
        if (!list.length) return;
        window.openCaseDetailModal(list[(i + dir + list.length) % list.length].id);
    };
    wrap.addEventListener('click', (e) => {
        const b = e.target.closest('[data-case-step]');
        if (b) step(Number(b.dataset.caseStep));
    });
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('hidden')) return;
        if (e.key === 'Escape') return window.closeCaseDetailModal();
        if (modal.querySelector('.pitch-slider')) return;
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
    });
    // A click on the dark area around the case closes it
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === wrap) window.closeCaseDetailModal();
    });
}

// --- CASE DOWNLOAD ---
const fileName = (url) => decodeURIComponent(String(url).split(/[?#]/)[0].split('/').pop() || 'file');
function saveBlob(blob, name) {
    const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: name });
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
}
// An SVG results slide drawn into a PNG at its own size (1920 × 1080), photo and graphics together
function svgToPng(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth || 1920;
            canvas.height = img.naturalHeight || 1080;
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(b => b ? resolve(b) : reject(new Error('png')), 'image/png');
        };
        img.onerror = reject;
        img.src = url;
    });
}
async function caseFile(url) {
    if (/\.svg(\?|#|$)/i.test(url)) return { blob: await svgToPng(url), name: fileName(url).replace(/\.svg$/i, '.png') };
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    return { blob: await res.blob(), name: fileName(url) };
}
let zipLib = null;
const loadZip = () => zipLib || (zipLib = new Promise((resolve, reject) => {
    const s = Object.assign(document.createElement('script'), { src: 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js' });
    s.onload = () => resolve(window.JSZip);
    s.onerror = () => { zipLib = null; reject(new Error('zip')); };
    document.head.appendChild(s);
}));
async function downloadCase(c) {
    // A video on this site downloads straight away
    if (c.video && !/^https?:/.test(c.video)) {
        const a = Object.assign(document.createElement('a'), { href: c.video, download: fileName(c.video) });
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
    }
    // Videos in Cinemataztic's Google Cloud bucket: the browser ignores `download` for another server, so the
    // videos there carry "Content-Disposition: attachment", which makes the link save the file. (A video
    // without it opens in a new tab instead of replacing the page.)
    if (c.video) {
        const a = Object.assign(document.createElement('a'), { href: c.video, download: fileName(c.video), target: '_blank', rel: 'noopener' });
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
    }
    const urls = c.images && c.images.length ? c.images : [c.cover];
    if (urls.length === 1) {
        const f = await caseFile(urls[0]);
        return saveBlob(f.blob, f.name);
    }
    const [JSZip, files] = await Promise.all([loadZip(), Promise.all(urls.map(caseFile))]);
    const zip = new JSZip();
    files.forEach((f, i) => zip.file(`${String(i + 1).padStart(2, '0')}-${f.name}`, f.blob));
    saveBlob(await zip.generateAsync({ type: 'blob' }), `${c.id}.zip`);
}

// --- ROLLING NUMBERS: A MECHANICAL COUNTER ---
// Each digit is a strip of 0–9 behind a one-digit window. On a new value every strip rolls down (a full
// turn and a bit, left digit first) and stops on the new digit. Used for the pink counts on the front
// page and the cases page. The element keeps its own display; the digits sit in an inline row inside it.
(function () {
    const style = document.createElement('style');
    style.textContent = `
        .roll { display: inline-flex; line-height: 1; }
        .roll-col { display: inline-block; height: 1em; overflow: hidden; }
        .roll-strip { display: block; will-change: transform; }
        .roll-strip > span { display: block; height: 1em; line-height: 1em; text-align: center; }
    `;
    document.head.appendChild(style);
})();
function rollNumber(el, value) {
    const next = String(value), prev = el.dataset.value || '';
    el.dataset.value = next;
    el.setAttribute('aria-label', next);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = next; return; }
    const digits = Array.from({ length: 30 }, (_, k) => `<span>${k % 10}</span>`).join('');
    el.innerHTML = `<span class="roll" aria-hidden="true">${[...next].map(() => `<span class="roll-col"><span class="roll-strip">${digits}</span></span>`).join('')}</span>`;
    [...el.querySelectorAll('.roll-strip')].forEach((strip, i) => {
        // Start on the digit that was in the same place (counted from the right), or on 0
        const old = prev[prev.length - (next.length - i)];
        const from = old === undefined ? 0 : Number(old);
        const to = 10 + Number(next[i]) + (Number(next[i]) <= from ? 10 : 0);
        strip.style.transform = `translateY(${-from}em)`;
        void strip.offsetWidth;
        strip.style.transition = `transform ${900 + i * 150}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 90}ms`;
        strip.style.transform = `translateY(${-to}em)`;
    });
}

// Pictures in the page text get a magnifying glass; clicking the picture opens it in an overlay at full size.
// Close with the cross, Escape, or a click outside the picture.
(function () {
    // Small inline icons (a width under 200 set in the page) stay as they are
    const pics = [...document.querySelectorAll('.docs-content img')].filter(img => !(img.hasAttribute('width') && +img.getAttribute('width') < 200));
    if (!pics.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'docs-lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Picture in full size');
    overlay.hidden = true;
    overlay.innerHTML = `
        <button type="button" class="docs-lightbox-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        <img alt="">`;
    document.body.appendChild(overlay);
    const big = overlay.querySelector('img');
    const closeBtn = overlay.querySelector('.docs-lightbox-close');
    let opener = null;

    function open(img, button) {
        opener = button;
        big.src = img.currentSrc || img.src;
        big.alt = img.alt;
        overlay.hidden = false;
        document.documentElement.style.overflow = 'hidden';
        closeBtn.focus();
    }
    function close() {
        overlay.hidden = true;
        big.removeAttribute('src');
        document.documentElement.style.overflow = '';
        if (opener) opener.focus();
    }

    overlay.addEventListener('click', e => { if (e.target !== big) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !overlay.hidden) close(); });

    // Each picture goes inside a button that also holds the magnifying glass
    pics.forEach(img => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'docs-zoom';
        button.setAttribute('aria-label', 'Show in full size' + (img.alt ? ': ' + img.alt : ''));
        img.replaceWith(button);
        button.appendChild(img);
        button.insertAdjacentHTML('beforeend', '<span class="docs-zoom-icon" aria-hidden="true"><i class="fa-solid fa-magnifying-glass-plus"></i></span>');
        button.addEventListener('click', () => open(img, button));
    });
})();

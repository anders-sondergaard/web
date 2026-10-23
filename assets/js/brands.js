// BRAND WALL ON THE FRONT PAGE
// In this order; with more brands than places, the wall swaps brands in one at a time.
//   name   shown when there is no logo, or the logo link is broken
//   logo   link or path to the logo (optional)
//   badge  true for logos that are a coloured badge rather than a wordmark

const siteBrands = [
    { name: "Coca-Cola", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/cocacola.svg" },
    { name: "Pepsi", logo: "https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/pepsi.svg" },
    { name: "Carlsberg", logo: "assets/logos/carlsberg.svg" },
    { name: "Santander", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Banco_Santander_Logotipo.svg" },
    { name: "Red Bull", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/redbull.svg" },
    { name: "McDonald's", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/mcdonalds.svg" },
    { name: "UNICEF", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_UNICEF.svg" },
    { name: "M&M's", logo: "assets/logos/mms.svg" },
    { name: "Subway", logo: "assets/logos/subway.svg" },
    { name: "Fanta", logo: "assets/logos/fanta.svg", badge: true },
    { name: "Politiken", logo: "assets/logos/politiken.svg" },
    { name: "IKEA", logo: "assets/logos/ikea.svg", badge: true },
    { name: "Tivoli", logo: "assets/logos/tivoli.svg" },
    { name: "3", logo: "assets/logos/three.svg" },
    { name: "Fazer", logo: "assets/logos/fazer.svg", badge: true },
    { name: "JD Sports", logo: "assets/logos/jdsports.svg" },
    { name: "Hummel", logo: "assets/logos/hummel.svg" },
    { name: "Samsung", logo: "assets/logos/samsung.svg" },
    { name: "Podimo", logo: "assets/logos/podimo.svg" },
    { name: "Arla", logo: "assets/logos/arla.svg", badge: true },
    { name: "LEGO", logo: "assets/logos/lego.svg", badge: true },
    { name: "Boozt", logo: "assets/logos/boozt.svg" },
    { name: "Ben & Jerry's", logo: "assets/logos/benjerry.svg", badge: true },
    { name: "Sprite", logo: "assets/logos/sprite.svg" },
    { name: "Mentos", logo: "assets/logos/mentos.svg", badge: true },
    { name: "Dr. Oetker", logo: "assets/logos/droetker.svg", badge: true },
    { name: "HBO", logo: "assets/logos/hbo.svg" },
    { name: "DFDS", logo: "assets/logos/dfds.svg" },
    { name: "Oister", logo: "assets/logos/oister.svg", badge: true },
    { name: "Virgin Mobile", logo: "assets/logos/virginmobile.svg" },
    { name: "Matas", logo: "assets/logos/matas.svg" },
    { name: "BookBeat", logo: "assets/logos/bookbeat.svg" },
    { name: "Specsavers", logo: "assets/logos/specsavers.svg", badge: true }
];

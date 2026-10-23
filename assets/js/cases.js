// ALL CASES ON THE SITE
// The front page, the cases page and the CineGame, Programmatic and CineFun pages all read this list.
// Change a case here and upload this file; every visitor sees the change.
//
// The order here is the order on the site. Fields per case:
//   id           unique name, also used in share links (cases.html?case=<id>)
//   featured     true = shown on the front page (max 9, Pitch cases never)
//   title        headline on the card and in the popup
//   client       client name; picks the logo on the card (see caseLogos in cases-data.js)
//   category     CineGame, Programmatic, CineFun, Leadsite or Pitch
//   mediaType    "video" or "image": what the popup shows first
//   cover        picture used in the popup
//   video        video link (may be "")
//   images       pictures for the popup's gallery (may be left out)
//   logo         optional: own logo instead of the one picked by client name
//   description  text on the card and in the popup; \n starts a new line

const siteCases = [
    // --- PROGRAMMATIC CASES: results slide + placeholder until the campaign pictures are in ---
    {
        id: "prog-3-mobile",
        title: "3 Mobile",
        client: "3 Mobile",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-3-mobile-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-3-mobile-results.svg"],
        description: "250,000 impressions\n35,000 vouchers with a 10.9% CTR. \nLeads: call center."
    },
    {
        id: "prog-ase",
        title: "Ase",
        client: "Ase",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-ase-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-ase-results.svg"],
        description: "150,000 impressions and 20,000 vouchers with a 11.5% CTR. Leads: call center."
    },
    {
        id: "prog-royal-copenhagen",
        title: "Royal Copenhagen",
        client: "Royal Copenhagen",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-royal-copenhagen-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-royal-copenhagen-results.svg"],
        description: "350,000 impressions and 55,000 vouchers with a 5.4% CTR. Leads: newsletter sign-ups."
    },
    {
        id: "prog-magasin",
        title: "Magasin",
        client: "Magasin",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-magasin-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-magasin-results.svg"],
        description: "170,000 impressions and 25,000 vouchers with a 4.6% CTR. Leads: web traffic."
    },
    {
        id: "prog-villavilla",
        title: "VillaVilla",
        client: "VillaVilla",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-villavilla-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-villavilla-results.svg"],
        description: "50,000 impressions and 7,000 vouchers with a 12.2% CTR. Leads: web traffic."
    },
    {
        id: "prog-lego-house",
        featured: true,
        title: "LEGO House",
        client: "LEGO House",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-lego-house-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-lego-house-results.svg"],
        description: "250,000 impressions and 30,000 vouchers with a 10.4% CTR. Leads: web traffic."
    },
    {
        id: "prog-specsavers",
        featured: true,
        title: "Specsavers",
        client: "Specsavers",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-specsavers-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-specsavers-results.svg"],
        description: "160,000 impressions and 20,000 vouchers with a 11.6% CTR. Leads: web bookings."
    },
    {
        id: "prog-arla",
        title: "ARLA",
        client: "ARLA",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-arla-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-arla-results.svg"],
        description: "70,000 impressions and 10,000 vouchers with a 5.8% CTR. Leads: web traffic."
    },
    {
        id: "prog-lyko",
        featured: true,
        title: "LYKO",
        client: "LYKO",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/programmatic/prog-lyko-results.svg",
        video: "",
        images: ["assets/cases/programmatic/prog-lyko-results.svg"],
        description: "130,000 impressions and 14,000 vouchers with a 23.1% CTR. Leads: club members."
    },
    {
        id: "nordlys",
        featured: true,
        title: "Norlys",
        client: "Norlys",
        category: "CineFun",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Nordlys.mp4",
        description: "A CineFun game for Norlys."
    },
    {
        id: "allianz",
        featured: true,
        title: "Allianz",
        client: "Allianz",
        category: "CineFun",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Allianz.mp4",
        description: "A CineFun game for Allianz."
    },
    {
        id: "appotek",
        title: "Apotekets",
        client: "Apotekets",
        category: "CineFun",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Appotek.mov",
        description: "A CineFun game for Apotekets."
    },
    {
        id: "odeon-sportsball",
        title: "Sports Ball",
        client: "ODEON",
        category: "CineGame",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/CineGame_SportsBall_2026_IE_Recording_1.mov",
        description: "Sports Ball, a CineGame for ODEON cinemas in Ireland in 2026."
    },
    {
        id: "ikea-collector",
        featured: true,
        title: "Collector",
        client: "IKEA",
        category: "CineGame",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Collector_IKEA_EN2026_CutDown.mp4",
        description: "Collector, a CineGame for IKEA from 2026."
    },
    {
        id: "santander",
        featured: true,
        title: "Swipe Hero",
        client: "Santander",
        category: "CineGame",
        mediaType: "video",
        cover: "",
        video: "https://storage.googleapis.com/cinemataztic-public/video/SwipeHero_Santander_DK2025_CutDown.mp4",
        description: "Swipe Hero, a CineGame for Santander in Danish cinemas in 2025."
    },
    {
        id: "subway",
        featured: false,
        title: "Jump and stay alive",
        client: "Subway",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/subway.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/SubwaySE2024-CutDown.mp4",
        description: "A jumper game built to drive footfall: jump, stay alive and get the Footlong."
    },
    {
        id: "fanta-zip-and-ride",
        featured: false,
        title: "Fanta – Ride n' Sip",
        client: "Fanta",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/fanta-zip-and-ride.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Fanta-EN2024-Cutdown60sec%20(1).mp4",
        description: "An experience game promoting a new Fanta flavour. Sit back and enjoy the ride."
    },
    {
        id: "mars",
        featured: true,
        title: "M&M's – The Jumper",
        client: "M&M's + Extra",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/mms.svg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Mars_Cutdown_EN_1.mp4",
        description: "A jumper game on the big screen for M&M's and Extra."
    },
    {
        id: "politikens-publisher",
        featured: false,
        title: "The children's book game",
        client: "Politikens Forlag",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/politikens-publisher.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Politiken_CutDown_DK_1.mp4",
        description: "A children's book game for Politikens Forlag: follow the book."
    },
    {
        id: "tivoli",
        featured: true,
        title: "The Rollercoaster",
        client: "Tivoli",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/tivoli.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Tivoli_2023_DKmp4.mp4",
        description: "A 1:1 digital version of Tivoli's iconic roller coaster, built to capture a young audience and boost ticket sales for the 180-year-old Copenhagen amusement park."
    },
    {
        id: "ikea",
        featured: false,
        title: "It is meatball Friday",
        client: "IKEA",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/ikea.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/IKEA_FI2024cutdown.mp4",
        description: "Meatball Friday comes to the big screen. Every Friday, with IKEA."
    },
    {
        id: "3dk2024",
        featured: false,
        title: "3 – No worries",
        client: "3",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/3dk2024.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/3Mobil_QuizShow_Cutdown_DK.mp4",
        description: "A quiz game that increases knowledge of 3's lightning fast 5G internet."
    },
    {
        id: "fazer",
        featured: false,
        title: "Fazer – Remix",
        client: "Fazer",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/fazer.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Fazer_swipehero_10.mp4",
        description: "A swipe game for Fazer's re-mix MINI."
    },
    {
        id: "hummel",
        featured: false,
        title: "New official jersey",
        client: "Hummel",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/hummel.jpg",
        video: "",
        images: ["assets/cases/hummel/hummel-1.jpg", "assets/cases/hummel/hummel-2.jpg", "assets/cases/hummel/hummel-3.jpg", "assets/cases/hummel/hummel-4.jpg", "assets/cases/hummel/hummel-5.jpg"],
        description: "Launching the new official Danish national team jersey. Made by Denmark."
    },
    {
        id: "jdsports",
        featured: false,
        title: "King of the game",
        client: "JD Sports",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/jdsports.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/JDSports_2022_de.mp4",
        description: "Run baby, run: a runner game for JD Sports."
    },
    {
        id: "samsung",
        featured: false,
        title: "Galaxy S23 Series",
        client: "Samsung",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/samsung.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/SamsungGalaxy_English_Recording.mov",
        description: "The runner game for the Galaxy S23 series. Every player got an extra chance to win a Samsung prize in a bonus wheel of fortune after the game."
    },
    {
        id: "tv2-play",
        featured: false,
        title: "TV2 Play – Join the fun",
        client: "TV2 Play",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/tv2-play.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/TV2play_2023_dk.mp4",
        description: "A quiz game for TV2 Play."
    },
    {
        id: "mcd",
        featured: false,
        title: "McDonald's – Rewards",
        client: "McDonald's",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/mcd.png",
        video: "",
        images: ["assets/cases/mcd/mcd-1.jpg", "assets/cases/mcd/mcd-2.jpg", "assets/cases/mcd/mcd-3.jpg", "assets/cases/mcd/mcd-4.png"],
        description: "A shuffle game built to drive app downloads: play and get the reward."
    },
    {
        id: "tryg",
        featured: false,
        title: "Tryg – Wheel of fortune",
        client: "Tryg",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/tryg.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Tryg_2023_dk.mp4",
        description: "Spin the wheel with Tryg."
    },
    {
        id: "podimo",
        featured: false,
        title: "Your favourite stories",
        client: "Podimo",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/podimo.png",
        video: "",
        images: ["assets/cases/podimo/podimo-1.jpg", "assets/cases/podimo/podimo-2.jpg", "assets/cases/podimo/podimo-3.jpg", "assets/cases/podimo/podimo-4.jpg", "assets/cases/podimo/podimo-5.jpg", "assets/cases/podimo/podimo-6.jpg", "assets/cases/podimo/podimo-7.jpg"],
        description: "A shuffle game built to increase subscribers for Podimo."
    },
    {
        id: "lego-knight",
        featured: false,
        title: "LEGO – Rebuild the world",
        client: "LEGO",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/lego-knight.jpg",
        video: "",
        images: ["assets/cases/lego-knight/lego-knight-1.jpg", "assets/cases/lego-knight/lego-knight-2.jpg", "assets/cases/lego-knight/lego-knight-3.jpg", "assets/cases/lego-knight/lego-knight-4.png"],
        description: "A LEGO playzone game on the big screen."
    },
    {
        id: "arla",
        featured: false,
        title: "ARLA – The Cows",
        client: "ARLA",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/arla.jpg",
        video: "https://cinemataztic.com/static/885c4ad0c2df757989cbe733f0981c2b/arla_findobject_web_18_skiplobby.mp4",
        description: "Each player gets a unique cow on their phone and has to find it on the cinema screen with a magnifying lens. The game brings ARLA's AR universe for children to the cinema."
    },
    {
        id: "redbull",
        featured: false,
        title: "Red Bull – Conquer the valley",
        client: "Red Bull",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/redbull.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/redbull_nologo.mp4",
        description: "Guide your plane through the mountains, collect as many points as possible and avoid crashing."
    },
    {
        id: "coke-x-mas",
        featured: false,
        title: "Coca-Cola – Holidays are coming",
        client: "Coca-Cola",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/coke-x-mas.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Coke-cinemaarcade-DE-UK%20Gameplay.mp4",
        description: "Five fun little Christmas games combined in one Coke holiday game."
    },
    {
        id: "boozt",
        featured: false,
        title: "Boozt.com – Follow the fashion",
        client: "Boozt.com",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/boozt.jpg",
        video: "https://cinemataztic.com/static/2e813ee52907a8ea3f6aa19fd6e0ed1e/boozt_shuffle_en_web_7.mp4",
        description: "The Boozt.com Shuffle Game introduces five categories, one for each card. Each card presents both brand and product."
    },
    {
        id: "liiga",
        featured: false,
        title: "Liiga – Multiplayer ice hockey",
        client: "Liiga",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/liiga.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/liga_nologo.mp4",
        description: "Team vs. team: sharpen your skates, select your team and win the trophy."
    },
    {
        id: "fanta-halloween",
        featured: false,
        title: "Halloween",
        client: "Fanta",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/fanta-halloween.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Fanta_simon_dk_13.mp4",
        description: "Follow the scary one: a Halloween game for Fanta."
    },
    {
        id: "toms",
        featured: false,
        title: "Haunted House",
        client: "Toms",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/toms.jpg",
        video: "",
        images: ["assets/cases/toms/toms-1.jpg", "assets/cases/toms/toms-2.jpg", "assets/cases/toms/toms-3.jpg", "assets/cases/toms/toms-4.png"],
        description: "Stay alive in the Haunted House and get your chocolate."
    },
    {
        id: "new-can",
        featured: false,
        title: "Coca-Cola – Coke word game",
        client: "Coca-Cola",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/new-can.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/cokenewcans_nologo.mp4",
        description: "Find the words! The fastest player wins a Coke."
    },
    {
        id: "pepsimax",
        featured: false,
        title: "Max the music",
        client: "Pepsi Max",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/pepsimax.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/PepsiHero_nologo.mp4",
        description: "Hit the tones and win the prize: an ice cold Pepsi."
    },
    {
        id: "cinerunner",
        featured: false,
        title: "CineRunner",
        client: "Cinemataztic",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/cinerunner.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/CinemaRunner-EE.mp4",
        description: "Get through the magical movie city."
    },
    {
        id: "battery-black",
        featured: false,
        title: "Black energy",
        client: "Battery",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/battery-black.jpg",
        video: "",
        images: ["assets/cases/battery-black/battery-black-1.jpg", "assets/cases/battery-black/battery-black-2.jpg", "assets/cases/battery-black/battery-black-3.jpg", "assets/cases/battery-black/battery-black-4.png"],
        description: "Join us in the night and win some sweet prizes."
    },
    {
        id: "ben-and-jerry",
        featured: false,
        title: "Ben & Jerry's – The ice cream valley game",
        client: "Ben & Jerry's",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/ben-and-jerry.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/BenJerrry.mp4",
        description: "Developed with MindShare, the game ran simultaneously in all the Nordic countries and made Ben & Jerry's part of the cinema experience."
    },
    {
        id: "coke-maze-game",
        featured: false,
        title: "The Coke maze game",
        client: "Coca-Cola",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/coke-maze-game.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Cokepackman_nologo.mp4",
        description: "Survive the maze and get the prize."
    },
    {
        id: "derby25",
        featured: false,
        title: "Ganz genau",
        client: "Bet25",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/derby25.jpg",
        video: "",
        images: ["assets/cases/derby25/derby25-1.jpg", "assets/cases/derby25/derby25-2.jpg", "assets/cases/derby25/derby25-3.jpg", "assets/cases/derby25/derby25-4.png"],
        description: "A horse racing derby game: Reit zu, bitte schön."
    },
    {
        id: "lego-hidden-side",
        featured: false,
        title: "LEGO – AR ghost hunt",
        client: "LEGO",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/lego-hidden-side.jpg",
        video: "",
        images: ["assets/cases/lego-hidden-side/lego-hidden-side-1.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-2.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-3.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-4.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-5.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-6.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-7.jpg", "assets/cases/lego-hidden-side/lego-hidden-side-8.png"],
        description: "The ghosts have escaped to the cinema. Catch them with your phone and become the hero of the day."
    },
    {
        id: "sonic",
        featured: false,
        title: "Are you fast?",
        client: "Sonic",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/sonic.jpg",
        video: "",
        images: ["assets/cases/sonic/sonic-1.jpg", "assets/cases/sonic/sonic-2.jpg", "assets/cases/sonic/sonic-3.jpg", "assets/cases/sonic/sonic-4.jpg"],
        description: "Try to keep up with Sonic and take home the prize."
    },
    {
        id: "sprite",
        featured: false,
        title: "Sprite the word",
        client: "Sprite",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/sprite.jpg",
        video: "",
        images: ["assets/cases/sprite/sprite-1.jpg", "assets/cases/sprite/sprite-2.jpg", "assets/cases/sprite/sprite-3.jpg", "assets/cases/sprite/sprite-4.jpg", "assets/cases/sprite/sprite-5.jpg", "assets/cases/sprite/sprite-6.jpg", "assets/cases/sprite/sprite-7.png", "assets/cases/sprite/sprite-8.png"],
        description: "Join Sivas in the hunt for the word."
    },
    {
        id: "trolls",
        featured: false,
        title: "Trolls World Tour",
        client: "Trolls World Tour",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/trolls.jpg",
        video: "",
        images: ["assets/cases/trolls/trolls-1.jpg", "assets/cases/trolls/trolls-2.jpg", "assets/cases/trolls/trolls-3.jpg", "assets/cases/trolls/trolls-4.jpg", "assets/cases/trolls/trolls-5.png"],
        description: "A rocking music game for Trolls World Tour in Australia."
    },
    {
        id: "tuborg-derby",
        featured: false,
        title: "Let the race begin",
        client: "Tuborg",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/tuborg-derby.jpg",
        video: "",
        images: ["assets/cases/tuborg-derby/tuborg-derby-1.jpg", "assets/cases/tuborg-derby/tuborg-derby-2.jpg", "assets/cases/tuborg-derby/tuborg-derby-3.jpg", "assets/cases/tuborg-derby/tuborg-derby-4.png"],
        description: "Welcome to the racetrack and the first Tuborg Derby."
    },
    {
        id: "mentos-friends",
        featured: false,
        title: "Complimentos",
        client: "Mentos",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/mentos-friends.jpg",
        video: "",
        images: ["assets/cases/mentos-friends/mentos-friends-1.jpg", "assets/cases/mentos-friends/mentos-friends-2.jpg", "assets/cases/mentos-friends/mentos-friends-3.jpg", "assets/cases/mentos-friends/mentos-friends-4.jpg", "assets/cases/mentos-friends/mentos-friends-5.jpg", "assets/cases/mentos-friends/mentos-friends-6.png"],
        description: "Get the Mentos, win the prize and share it with one of the other players. Everyone wins."
    },
    {
        id: "paula",
        featured: false,
        title: "Where's Paula?",
        client: "Dr. Oetker",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/paula.jpg",
        video: "",
        images: ["assets/cases/paula/paula-1.jpg", "assets/cases/paula/paula-2.jpg", "assets/cases/paula/paula-3.jpg", "assets/cases/paula/paula-4.jpg", "assets/cases/paula/paula-5.png"],
        description: "Find Paula and her friends. They can be everywhere."
    },
    {
        id: "coke-light",
        featured: false,
        title: "Coca-Cola – Make it light",
        client: "Coca-Cola",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/coke-light.jpg",
        video: "",
        images: ["assets/cases/coke-light/coke-light-1.jpg", "assets/cases/coke-light/coke-light-2.jpg", "assets/cases/coke-light/coke-light-3.jpg", "assets/cases/coke-light/coke-light-4.jpg", "assets/cases/coke-light/coke-light-5.png", "assets/cases/coke-light/coke-light-6.png"],
        description: "Make it light, make it fun."
    },
    {
        id: "hbo-vikings",
        featured: false,
        title: "HBO – Vikings",
        client: "HBO",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/hbo-vikings.jpg",
        video: "",
        images: ["assets/cases/hbo-vikings/hbo-vikings-1.jpg", "assets/cases/hbo-vikings/hbo-vikings-2.jpg", "assets/cases/hbo-vikings/hbo-vikings-3.jpg", "assets/cases/hbo-vikings/hbo-vikings-4.png"],
        description: "Let the fight begin: test your knowledge of the greatest warriors."
    },
    {
        id: "red-bull-winter-2022",
        featured: false,
        title: "Red Bull – Winter Edition",
        client: "Red Bull",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/red-bull-winter-2022.jpg",
        video: "",
        images: ["assets/cases/red-bull-winter-2022/red-bull-winter-2022-1.jpg", "assets/cases/red-bull-winter-2022/red-bull-winter-2022-2.jpg", "assets/cases/red-bull-winter-2022/red-bull-winter-2022-3.jpg", "assets/cases/red-bull-winter-2022/red-bull-winter-2022-4.jpg"],
        description: "Remember the sequence of the different Red Bull varieties and win an ice cold Red Bull."
    },
    {
        id: "lego90",
        featured: false,
        title: "LEGO – 90th birthday",
        client: "LEGO",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/lego90.jpg",
        video: "",
        images: ["assets/cases/lego90/lego90-1.jpg", "assets/cases/lego90/lego90-2.jpg", "assets/cases/lego90/lego90-3.jpg", "assets/cases/lego90/lego90-4.png"],
        description: "Help decorate the LEGO birthday cake."
    },
    {
        id: "dfds",
        featured: false,
        title: "DFDS – Win a cruise",
        client: "DFDS",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/dfds.jpg",
        video: "",
        images: ["assets/cases/dfds/dfds-1.jpg", "assets/cases/dfds/dfds-2.jpg", "assets/cases/dfds/dfds-3.jpg", "assets/cases/dfds/dfds-4.jpg", "assets/cases/dfds/dfds-5.jpg", "assets/cases/dfds/dfds-6.jpg", "assets/cases/dfds/dfds-7.png"],
        description: "Four mini games in one. The winner takes home a cruise."
    },
    {
        id: "scream6",
        featured: false,
        title: "Scream VI – New York. New rules.",
        client: "Scream VI",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/scream6.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/scream6_2023_dk.mp4",
        description: "A game for the cinema release of Scream VI."
    },
    {
        id: "oister",
        featured: false,
        title: "Oister – Follow the Oister",
        client: "Oister",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/oister.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Oister_2023_dk_9.mp4",
        description: "A game for Oister on the big screen."
    },
    {
        id: "trafficsafety",
        featured: false,
        title: "Traffic safety – The Traffic Safety Game",
        client: "Traffic safety",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/trafficsafety.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/TrafficSafetyCutdownPromo.mp4",
        description: "Stay safe in traffic."
    },
    {
        id: "visitgermany",
        featured: false,
        title: "Visit Germany – Green travel",
        client: "Visit Germany",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/visitgermany.jpg",
        video: "",
        images: ["assets/cases/visitgermany/visitgermany-1.jpg", "assets/cases/visitgermany/visitgermany-2.jpg", "assets/cases/visitgermany/visitgermany-3.jpg", "assets/cases/visitgermany/visitgermany-4.png"],
        description: "Drive your electric car through Germany and experience a green way to travel."
    },
    {
        id: "virgin-mobile",
        featured: false,
        title: "Virgin Mobile – Run baby run",
        client: "Virgin Mobile",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/virgin-mobile.jpg",
        video: "",
        images: ["assets/cases/virgin-mobile/virgin-mobile-1.jpg", "assets/cases/virgin-mobile/virgin-mobile-2.jpg", "assets/cases/virgin-mobile/virgin-mobile-3.jpg", "assets/cases/virgin-mobile/virgin-mobile-4.png", "assets/cases/virgin-mobile/virgin-mobile-5.jpg", "assets/cases/virgin-mobile/virgin-mobile-6.jpg", "assets/cases/virgin-mobile/virgin-mobile-7.jpg"],
        description: "A runner game for Virgin Mobile."
    },
    {
        id: "podimo-quiz-2024",
        featured: false,
        title: "Podimo – The QuizShow",
        client: "Podimo",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/podimo-quiz-2024.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/PodimoDK2024-Cutdown.mp4",
        description: "Join the fun in Podimo's quiz show."
    },
    {
        id: "matas",
        featured: false,
        title: "Matas – 75 years",
        client: "Matas",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/matas.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Matas-Shuffle-DK-Cutdown.mp4",
        description: "A shuffle game celebrating Matas' 75th birthday."
    },
    {
        id: "bundeswehr",
        featured: false,
        title: "Karriereberatung",
        client: "Bundeswehr",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/bundeswehr.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/GermanMinistryOfDefence_Quiz_build6.mp4",
        description: "A quiz game for Bundeswehr career counselling."
    },
    {
        id: "specsavers",
        featured: false,
        title: "Test your vision",
        client: "Specsavers",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/specsavers.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Specsavers_Video_Cutdown.mp4",
        description: "Test your vision on the big screen."
    },
    {
        id: "bookbeat",
        featured: false,
        title: "A good book",
        client: "BookBeat",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/bookbeat.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/BookBeat_Video_CutDown.mp4",
        description: "A game for BookBeat."
    },
    // --- PITCH CASES (from cinemataztic.com/games/pitch) ---
    // Images are copies from cinemataztic.com in assets/cases/pitch. logoBox is the visible part of the logo image
    // [x, y, width, height, image width, image height], so the card can crop away its empty margins.
    {
        id: "pitch-cocacola-jumper",
        title: "Coca-Cola – Jumper",
        client: "Coca-Cola",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/cocacola-jumper-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/cocacola-jumper-1.jpg",
            "assets/cases/pitch/cocacola-jumper-2.jpg",
            "assets/cases/pitch/cocacola-jumper-3.jpg"
        ],
        description: "A CineGame pitch for Coca-Cola: Jumper."
    },
    {
        id: "pitch-lidl-shuffle",
        title: "Lidl – Shuffle",
        client: "Lidl",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/lidl-shuffle-1.jpg",
        logo: "assets/cases/pitch/lidl_logo.png",
        logoBox: [8, 10, 172, 69, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/lidl-shuffle-1.jpg",
            "assets/cases/pitch/lidl-shuffle-2.jpg",
            "assets/cases/pitch/lidl-shuffle-3.jpg",
            "assets/cases/pitch/lidl-shuffle-4.jpg",
            "assets/cases/pitch/lidl-shuffle-5.jpg",
            "assets/cases/pitch/lidl-shuffle-6.jpg",
            "assets/cases/pitch/lidl-shuffle-7.jpg"
        ],
        description: "A CineGame pitch for Lidl: Shuffle."
    },
    {
        id: "pitch-booking-swipehero",
        title: "Booking.com – Swipe Hero",
        client: "Booking.com",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/booking-swipehero-1.jpg",
        logo: "assets/cases/pitch/logo_booking.png",
        logoBox: [2, 27, 189, 32, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/booking-swipehero-1.jpg",
            "assets/cases/pitch/booking-swipehero-2.jpg",
            "assets/cases/pitch/booking-swipehero-3.jpg",
            "assets/cases/pitch/booking-swipehero-4.jpg",
            "assets/cases/pitch/booking-swipehero-5.jpg",
            "assets/cases/pitch/booking-swipehero-6.jpg"
        ],
        description: "A CineGame pitch for Booking.com: Swipe Hero."
    },
    {
        id: "pitch-dsgroup-quizshow",
        title: "DS Group – Quiz Show",
        client: "DS Group",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/dsgroup-quizshow-1.jpg",
        video: "",
        images: [
            "assets/cases/pitch/dsgroup-quizshow-1.jpg",
            "assets/cases/pitch/dsgroup-quizshow-2.jpg",
            "assets/cases/pitch/dsgroup-quizshow-3.jpg",
            "assets/cases/pitch/dsgroup-quizshow-4.jpg",
            "assets/cases/pitch/dsgroup-quizshow-5.jpg",
            "assets/cases/pitch/dsgroup-quizshow-6.jpg"
        ],
        description: "A CineGame pitch for DS Group: Quiz Show."
    },
    {
        id: "pitch-lidl",
        title: "Lidl – Go Full Lidl",
        client: "Lidl",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/l2.jpg",
        logo: "assets/cases/pitch/lidl_logo.png",
        logoBox: [8, 10, 172, 69, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/l2.jpg",
            "assets/cases/pitch/l3.jpg",
            "assets/cases/pitch/l4.jpg",
            "assets/cases/pitch/l5.jpg",
            "assets/cases/pitch/l6.jpg"
        ],
        description: "A CineGame pitch for Lidl: Go Full Lidl."
    },
    {
        id: "pitch-marvel",
        title: "Marvel – Game pitch",
        client: "Marvel",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/marvel1.jpg",
        logo: "assets/cases/pitch/marvel_logo_trans.png",
        logoBox: [1, 5, 313, 126, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/marvel1.jpg",
            "assets/cases/pitch/marvel2.jpg",
            "assets/cases/pitch/marvel3.jpg",
            "assets/cases/pitch/marvel4.jpg"
        ],
        description: "A CineGame pitch for Marvel."
    },
    {
        id: "pitch-oreo",
        title: "Oreo – Game pitch",
        client: "Oreo",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/oreo1.jpg",
        logo: "assets/cases/pitch/oreo_logo.png",
        logoBox: [17, 3, 292, 130, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/oreo1.jpg",
            "assets/cases/pitch/oreo2.jpg",
            "assets/cases/pitch/oreo3.jpg",
            "assets/cases/pitch/oreo4.jpg"
        ],
        description: "A CineGame pitch for Oreo."
    },
    {
        id: "pitch-redrooster",
        title: "Red Rooster – Game pitch",
        client: "Red Rooster",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/rr1.jpg",
        logo: "assets/cases/pitch/rr-logo.png",
        logoBox: [2, 3, 246, 127, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/rr1.jpg",
            "assets/cases/pitch/rr2.jpg",
            "assets/cases/pitch/rr3.jpg"
        ],
        description: "A CineGame pitch for Red Rooster."
    },
    {
        id: "pitch-kfc",
        title: "KFC – The Restaurant Game",
        client: "KFC",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/kfc1.jpg",
        logo: "assets/cases/pitch/kfc-logo.png",
        logoBox: [13, 1, 133, 134, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/kfc1.jpg",
            "assets/cases/pitch/kfc2.jpg",
            "assets/cases/pitch/kfc_phone.jpg"
        ],
        description: "Receive orders from customers in your KFC restaurant: 1–3 customers enter at a time, and it’s your job to serve them as well as possible."
    },
    {
        id: "pitch-hungry-jacks",
        title: "Hungry Jack's – The Maze Game",
        client: "Hungry Jack's",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/hj1.jpg",
        logo: "assets/cases/pitch/hj_logo.png",
        logoBox: [0, 0, 140, 136, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/hj1.jpg",
            "assets/cases/pitch/hj2.jpg",
            "assets/cases/pitch/hj3.jpg"
        ],
        description: "A CineGame pitch for Hungry Jack's: The Maze Game."
    },
    {
        id: "pitch-lego-city",
        title: "LEGO – City",
        client: "LEGO",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/lego_city_01.jpg",
        logo: "assets/cases/pitch/lego_city_logo.png",
        logoBox: [0, 0, 344, 126, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/lego_city_01.jpg",
            "assets/cases/pitch/lego_city_02.jpg",
            "assets/cases/pitch/lego_city_03.jpg",
            "assets/cases/pitch/lego_city_04.jpg",
            "assets/cases/pitch/lego_city_05.jpg",
            "assets/cases/pitch/lego_city_06.jpg"
        ],
        description: "A CineGame pitch for LEGO: City."
    },
    {
        id: "pitch-pengeskyen",
        title: "Danske Bank – Penge Skyen",
        client: "Danske Bank",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/pengeskyen_1.jpg",
        logo: "assets/cases/pitch/pengeskyen_logo.png",
        logoBox: [0, 9, 350, 81, 350, 136],
        logoWhite: true,
        video: "",
        images: [
            "assets/cases/pitch/pengeskyen_1.jpg",
            "assets/cases/pitch/pengeskyen_2.jpg",
            "assets/cases/pitch/pengeskyen_3.jpg",
            "assets/cases/pitch/pengeskyen_4.jpg",
            "assets/cases/pitch/pengeskyen_5.jpg",
            "assets/cases/pitch/pengeskyen_6.jpg"
        ],
        description: "The game consists of several mini games."
    },
    {
        id: "pitch-cocio",
        title: "Cocio – The Wingman Shake Game",
        client: "Cocio",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/cocio_1.jpg",
        logo: "assets/cases/pitch/cocio_logo.png",
        logoBox: [8, 12, 113, 112, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/cocio_1.jpg",
            "assets/cases/pitch/cocio_2.jpg",
            "assets/cases/pitch/cocio_3.jpg",
            "assets/cases/pitch/cocio_4.jpg",
            "assets/cases/pitch/cocio_5.png"
        ],
        description: "A CineGame pitch for Cocio: The Wingman Shake Game."
    },
    {
        id: "pitch-one",
        title: "OnePlus – The Race",
        client: "OnePlus",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/one_plus_01.jpg",
        logo: "assets/cases/pitch/one_plus_logo.png",
        logoBox: [6, 32, 308, 71, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/one_plus_01.jpg",
            "assets/cases/pitch/one_plus_2.jpg"
        ],
        description: "A CineGame pitch for OnePlus: The Race."
    },
    {
        id: "pitch-stimorol",
        title: "Stimorol – The Chew Game",
        client: "Stimorol",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/stimorol_1.jpg",
        logo: "assets/cases/pitch/stimorol_logo.png",
        logoBox: [0, 22, 350, 79, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/stimorol_1.jpg"
        ],
        description: "A CineGame pitch for Stimorol: The Chew Game."
    },
    {
        id: "pitch-mobilepay",
        title: "MobilePay – The Game",
        client: "MobilePay",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/mobilepay_1.jpg",
        logo: "assets/cases/pitch/mobilepay_logo.png",
        logoBox: [9, 15, 326, 104, 350, 136],
        video: "",
        images: [
            "assets/cases/pitch/mobilepay_1.jpg"
        ],
        description: "A CineGame pitch for MobilePay: The Game."
    },
    {
        id: "pitch-volkswagen",
        title: "Volkswagen – Game pitch",
        client: "Volkswagen",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/vw_1.jpg",
        logo: "assets/cases/pitch/vw_logo.png",
        logoBox: [2, 2, 132, 132, 350, 136],
        logoWhite: true,
        video: "",
        images: [
            "assets/cases/pitch/vw_1.jpg",
            "assets/cases/pitch/vw_2.jpg",
            "assets/cases/pitch/vw_3.jpg",
            "assets/cases/pitch/vw_4.jpg",
            "assets/cases/pitch/vw_5.jpg"
        ],
        description: "A CineGame pitch for Volkswagen."
    },
    {
        id: "pitch-sunweb",
        title: "Sunweb – The Ski Game",
        client: "Sunweb",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/sunweb-obstaclerunner.jpg",
        logo: "assets/cases/pitch/sunweb_logo.png",
        logoBox: [5, 2, 78, 84, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/sunweb-obstaclerunner.jpg",
            "assets/cases/pitch/sunweb-obstaclerunner-1-.jpg",
            "assets/cases/pitch/sunweb-obstaclerunner-2-.jpg"
        ],
        description: "A CineGame pitch for Sunweb: The Ski Game."
    },
    {
        id: "pitch-kims-dating",
        title: "Kims – Dating",
        client: "Kims",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/kim-s-dating.jpg",
        logo: "assets/cases/pitch/logo_kims.png",
        logoBox: [2, 0, 192, 87, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/kim-s-dating.jpg",
            "assets/cases/pitch/kim-s-dating-1-.jpg"
        ],
        description: "A CineGame pitch for Kims: Dating."
    },
    {
        id: "pitch-normal",
        title: "Normal – The Game",
        client: "Normal",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/normal1.jpg",
        logo: "assets/cases/pitch/normal.png",
        logoBox: [7, 17, 336, 141, 350, 175],
        video: "",
        images: [
            "assets/cases/pitch/normal1.jpg",
            "assets/cases/pitch/normal2.jpg"
        ],
        description: "A CineGame pitch for Normal: The Game."
    },
    {
        id: "pitch-samsung",
        title: "Samsung – Find Object",
        client: "Samsung",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/samsung_game1.jpg",
        logo: "assets/cases/pitch/samsung_find_objeckt_logo.png",
        logoBox: [2, 29, 184, 30, 194, 87],
        logoWhite: true,
        video: "",
        images: [
            "assets/cases/pitch/samsung_game1.jpg",
            "assets/cases/pitch/samsung_game2.jpg",
            "assets/cases/pitch/samsung_lobby.jpg",
            "assets/cases/pitch/samsung_game3.jpg",
            "assets/cases/pitch/samsung_game4.jpg",
            "assets/cases/pitch/samsung_winner.jpg"
        ],
        description: "Find the object with your Samsung phone."
    },
    {
        id: "pitch-about-you",
        title: "About You – The Word Game",
        client: "About You",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/lobby1-pt.jpg",
        logo: "assets/cases/pitch/about-you_logo.png",
        logoBox: [0, 49, 194, 38, 194, 87],
        logoWhite: true,
        video: "",
        images: [
            "assets/cases/pitch/lobby1-pt.jpg",
            "assets/cases/pitch/lobby2-pt.jpg",
            "assets/cases/pitch/game1-pt.jpg",
            "assets/cases/pitch/game2-pt.jpg",
            "assets/cases/pitch/winner-pt.jpg"
        ],
        description: "A CineGame pitch for About You: The Word Game."
    },
    {
        id: "pitch-vigor",
        title: "Vigor – Follow the Vigor",
        client: "Vigor",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/v1.png",
        logo: "assets/cases/pitch/logo_vigor.png",
        logoBox: [11, 16, 145, 56, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/v1.png",
            "assets/cases/pitch/v3.png",
            "assets/cases/pitch/v4.png",
            "assets/cases/pitch/v5.png",
            "assets/cases/pitch/v61.jpg"
        ],
        description: "A CineGame pitch for Vigor: Follow the Vigor."
    },
    {
        id: "pitch-booking",
        title: "Booking.com – The Game",
        client: "Booking.com",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/booking.com_pitch_de-1-.jpg",
        logo: "assets/cases/pitch/logo_booking.png",
        logoBox: [2, 27, 189, 32, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/booking.com_pitch_de-1-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-2-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-3-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-4-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-5-.jpg",
            "assets/cases/pitch/booking.com_pitch_de-6-.jpg"
        ],
        description: "A CineGame pitch for Booking.com: The Game."
    },
    {
        id: "pitch-air-new-zealand",
        title: "Air New Zealand – The Game",
        client: "Air New Zealand",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/airnewzealand_pitch.jpg",
        logo: "assets/cases/pitch/logo_az.png",
        logoBox: [2, 29, 189, 29, 194, 87],
        logoWhite: true,
        video: "",
        images: [
            "assets/cases/pitch/airnewzealand_pitch.jpg",
            "assets/cases/pitch/airnewzealand_pitch-1-.jpg",
            "assets/cases/pitch/airnewzealand_pitch-2-.jpg",
            "assets/cases/pitch/airnewzealand_pitch-3-.jpg"
        ],
        description: "A CineGame pitch for Air New Zealand: The Game."
    },
    {
        id: "pitch-wolt",
        title: "Wolt – The Delivery Game",
        client: "Wolt",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/w1.jpg",
        logo: "assets/cases/pitch/logo_wolt.png",
        logoBox: [2, 9, 190, 69, 194, 87],
        video: "",
        images: [
            "assets/cases/pitch/w1.jpg",
            "assets/cases/pitch/w2.jpg",
            "assets/cases/pitch/w3.jpg",
            "assets/cases/pitch/w4.jpg",
            "assets/cases/pitch/w5.jpg",
            "assets/cases/pitch/w6.jpg"
        ],
        description: "A CineGame pitch for Wolt: The Delivery Game."
    },
    {
        id: "pitch-mcd-dinerdash",
        title: "McDonald's – DinnerDash",
        client: "McDonald's",
        category: "Pitch",
        mediaType: "image",
        cover: "assets/cases/pitch/mcd_deleveri1.jpg",
        logo: "assets/cases/pitch/mcd_logo_big.png",
        logoBox: [0, 19, 350, 184, 350, 222],
        video: "",
        images: [
            "assets/cases/pitch/mcd_deleveri1.jpg",
            "assets/cases/pitch/mcd_deleveri2.jpg",
            "assets/cases/pitch/mcd_wolt1.jpg",
            "assets/cases/pitch/mcd_wolt2.jpg",
            "assets/cases/pitch/mcd_deliveroo1.jpg",
            "assets/cases/pitch/mcd_deliveroo2.jpg",
            "assets/cases/pitch/mcd_foodora1.jpg",
            "assets/cases/pitch/mcd_foodora2.jpg"
        ],
        description: "A CineGame pitch for McDonald's: DinnerDash."
    }
];

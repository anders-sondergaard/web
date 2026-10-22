// Default case list shared by the front page, the cases page and the programmatic page.
// The CMS saves edits to localStorage; this list is used when nothing is saved.
const defaultCases = [
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
        id: "subway",
        featured: true,
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
        featured: true,
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
    "Red Bull": { src: brandIcon("redbull", "DB0A40") },
    "Coca-Cola": { src: brandIcon("cocacola", "F40009") },
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
    "Virgin Mobile": { src: "assets/logos/virginmobile.svg" },
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
    "Bet25": { src: "assets/logos/bet25.svg" }
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
    'assets/logos/fazer.svg', 'assets/logos/benjerry.svg', 'assets/logos/mentos.svg', 'assets/logos/droetker.svg', 'assets/logos/oister.svg',
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
        ? `<img ${logo.color ? `data-src="${logo.src}" data-color="${logo.color}"` : `src="${logo.src}"`} alt="${name}" loading="lazy" onload="fitCaseLogo(this.closest('.case-logo').parentElement)" class="${logoClass(logo.src)}">`
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
    if (!area || !title) return;
    const top = title.getBoundingClientRect().top - media.getBoundingClientRect().top;
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
        let h = w * 0.3 / Math.sqrt(ratio);
        h = Math.min(h, w * 0.72 / ratio, area.offsetHeight * 0.45);
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
function mountImageSlider(box, images, color = '#fece00') {
    // A single image is just shown: no arrows, dots or counter
    if (images.length === 1) {
        box.innerHTML = `<img src="${escapeCoverText(images[0])}" alt="" class="absolute inset-0 w-full h-full object-contain bg-black">`;
        return;
    }
    let index = 0;
    box.innerHTML = `
        <div class="pitch-slider absolute inset-0 overflow-hidden select-none">
            <div class="pitch-track flex h-full transition-transform duration-500 ease-out">
                ${images.map((src, i) => `<img src="${escapeCoverText(src)}" alt="Slide ${i + 1}" class="w-full h-full shrink-0 object-contain bg-black" draggable="false">`).join('')}
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

// --- NEW DEFAULT CASES FOR SAVED CMS DATA ---
// Saved CMS data replaces defaultCases, so cases added to the defaults later are listed here and added to
// saved data once. `seenDefaults` remembers them, so a case the CMS user deletes stays deleted.
const newDefaultCases = ['prog-3-mobile', 'prog-ase', 'prog-royal-copenhagen', 'prog-magasin', 'prog-villavilla',
    'prog-lego-house', 'prog-specsavers', 'prog-arla', 'prog-lyko', 'nordlys', 'allianz', 'appotek', 'pitch-lidl', 'pitch-marvel', 'pitch-oreo', 'pitch-redrooster', 'pitch-kfc',
    'pitch-hungry-jacks', 'pitch-lego-city', 'pitch-pengeskyen', 'pitch-cocio', 'pitch-one', 'pitch-stimorol', 'pitch-mobilepay',
    'pitch-volkswagen', 'pitch-sunweb', 'pitch-kims-dating', 'pitch-normal', 'pitch-samsung', 'pitch-about-you', 'pitch-vigor',
    'pitch-booking', 'pitch-air-new-zealand', 'pitch-wolt', 'pitch-mcd-dinerdash'];
// Default cases that were removed again: taken out of saved data too
const retiredDefaultCases = ['demo-pitch-1', 'nokia', 'sportsball', 'demo-programmatic-1', 'demo-programmatic-2',
    'demo-programmatic-3'];
function addNewDefaultCases(data) {
    data.seenDefaults = data.seenDefaults || [];
    data.cases = data.cases.filter(c => !retiredDefaultCases.includes(c.id));
    // Cases changed to images after they were added: saved copies get the images once
    const toImages = ['hummel', 'mcd', 'podimo', 'lego-knight', 'toms', 'battery-black', 'derby25', 'lego-hidden-side',
        'trolls', 'sprite', 'sonic', 'tuborg-derby', 'mentos-friends', 'paula', 'red-bull-winter-2022', 'hbo-vikings',
        'coke-light', 'lego90', 'dfds', 'visitgermany', 'virgin-mobile'];
    toImages.forEach(id => {
        const mark = `images:${id}`;
        if (data.seenDefaults.includes(mark)) return;
        data.seenDefaults.push(mark);
        const c = data.cases.find(x => x.id === id), d = defaultCases.find(x => x.id === id);
        if (c && d) Object.assign(c, { images: d.images.slice(), mediaType: 'image', video: '' });
    });
    // Cases given a video after they were added: saved copies without one get it once
    const toVideo = { samsung: 'https://storage.googleapis.com/cinemataztic-public/video/SamsungGalaxy_English_Recording.mov' };
    Object.entries(toVideo).forEach(([id, url]) => {
        const mark = `video:${id}`;
        if (data.seenDefaults.includes(mark)) return;
        data.seenDefaults.push(mark);
        const c = data.cases.find(x => x.id === id);
        if (c && !c.video) Object.assign(c, { video: url, mediaType: 'video' });
    });
    // Programmatic cases whose photo is now behind the results slide no longer need the placeholder slide
    const withPhoto = ['prog-3-mobile', 'prog-ase', 'prog-royal-copenhagen', 'prog-magasin', 'prog-villavilla',
        'prog-lego-house', 'prog-specsavers', 'prog-arla', 'prog-lyko'];
    data.cases.forEach(c => {
        if (withPhoto.includes(c.id) && Array.isArray(c.images)) c.images = c.images.filter(u => u !== 'assets/cases/programmatic/placeholder.svg');
    });
    // Cases renamed after they were added: saved copies that still have the old name get the new one
    data.cases.forEach(c => {
        if (c.category === 'Programmatic' && typeof c.title === 'string') c.title = c.title.replace(/ – Programmatic$/, '');
    });
    const renamed = { nordlys: ['Nordlys', 'Norlys'], appotek: ['Appotek', 'Apotekets'] };
    data.cases.forEach(c => {
        const r = renamed[c.id];
        if (!r) return;
        ['title', 'client', 'description'].forEach(k => { if (typeof c[k] === 'string') c[k] = c[k].split(r[0]).join(r[1]); });
    });
    // Pitch images saved while they were still linked from the old site now use the local copies
    const oldSite = /^https:\/\/cinemataztic\.com\/static\/[0-9a-f]+\/[0-9a-f]+\/([^/]+\.(?:jpg|png))$/;
    const local = u => (typeof u === 'string' && oldSite.test(u)) ? u.replace(oldSite, 'assets/cases/pitch/$1') : u;
    data.cases.forEach(c => {
        c.cover = local(c.cover);
        c.logo = local(c.logo);
        if (Array.isArray(c.images)) c.images = c.images.map(local);
    });
    newDefaultCases.forEach(id => {
        if (data.seenDefaults.includes(id)) return;
        data.seenDefaults.push(id);
        const c = defaultCases.find(d => d.id === id);
        if (!c || data.cases.some(x => x.id === id)) return;
        // Same place as in the defaults: before the first saved case that follows it there
        const later = defaultCases.slice(defaultCases.indexOf(c) + 1).map(d => d.id);
        const at = data.cases.findIndex(x => later.includes(x.id));
        data.cases.splice(at < 0 ? data.cases.length : at, 0, JSON.parse(JSON.stringify(c)));
    });
    return data;
}

// --- CASE POPUP: PREVIOUS / NEXT CASE AND SHARE LINK ---
// Arrows just outside the open case (under it on smaller screens) step through the cases the page is
// showing, in the same order, and wrap around at the ends. The arrow keys do the same unless the case
// has an image slider, which uses them for its images. getList returns the cases currently listed.
// A Share button copies a link that opens the case on the cases page, to paste into a mail or a chat.
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

    // Share: copy the link to this case
    const row = document.getElementById('caseModalClient');
    if (row) {
        row.parentElement.insertAdjacentHTML('beforeend', `<button type="button" data-case-share style="margin-left: auto" class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition"><i class="fa-solid fa-link"></i><span>Share</span></button>`);
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
    let resetLabel = 0;
    modal.addEventListener('click', (e) => {
        const share = e.target.closest('[data-case-share]');
        if (!share || !current) return;
        const link = new URL(`cases.html?case=${encodeURIComponent(current)}`, location.href).href;
        copy(link).then(() => {
            share.querySelector('i').className = 'fa-solid fa-check';
            share.querySelector('span').textContent = 'Link copied';
            clearTimeout(resetLabel);
            resetLabel = setTimeout(() => {
                share.querySelector('i').className = 'fa-solid fa-link';
                share.querySelector('span').textContent = 'Share';
            }, 2000);
        });
    });

    let current = null;
    const open = window.openCaseDetailModal;
    window.openCaseDetailModal = (id) => { current = id; open(id); };
    const step = (dir) => {
        let list = getList();
        let i = list.findIndex(c => c.id === current);
        if (i < 0) { // opened from a link: step through the cases of its own category
            const cat = (list.concat(defaultCases).find(c => c.id === current) || {}).category;
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
        if (modal.classList.contains('hidden') || modal.querySelector('.pitch-slider')) return;
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
    });
}

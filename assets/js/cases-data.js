// Default case list shared by the front page, the cases page and the programmatic page.
// The CMS saves edits to localStorage; this list is used when nothing is saved.
const defaultCases = [
    {
        id: "subway",
        featured: true,
        title: "Subway – Jump and stay alive",
        client: "Subway",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/subway.png",
        video: "https://storage.googleapis.com/cinemataztic-public/video/SubwaySE2024-CutDown.mp4",
        description: "A jumper game built to drive footfall: jump, stay alive and get the Footlong."
    },
    {
        id: "fanta-zip-and-ride",
        featured: true,
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
        title: "M&M's + Extra – The Jumper",
        client: "M&M's + Extra",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/mms.svg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Mars_Cutdown_EN_1.mp4",
        description: "A jumper game on the big screen for M&M's and Extra."
    },
    {
        id: "politikens-publisher",
        featured: true,
        title: "Politikens Forlag – The children's book game",
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
        title: "Tivoli – The Rollercoaster Ride",
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
        title: "IKEA – It is Meatball Friday",
        client: "IKEA",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/ikea.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/IKEA_FI2024cutdown.mp4",
        description: "Meatball Friday comes to the big screen. Every Friday, with IKEA."
    },
    {
        id: "3dk2024",
        featured: true,
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
        featured: true,
        title: "Fazer – re-mix MINI",
        client: "Fazer",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/fazer.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/Fazer_swipehero_10.mp4",
        description: "A swipe game for Fazer's re-mix MINI."
    },
    {
        id: "hummel",
        featured: true,
        title: "Hummel – New official jersey",
        client: "Hummel",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/hummel.jpg",
        video: "",
        description: "Launching the new official Danish national team jersey. Made by Denmark."
    },
    {
        id: "jdsports",
        featured: false,
        title: "JD Sports – King of the Game",
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
        title: "Samsung – Galaxy S23 Series",
        client: "Samsung",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/samsung.png",
        video: "",
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
        title: "Podimo – Home of your favourite stories",
        client: "Podimo",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/podimo.png",
        video: "",
        description: "A shuffle game built to increase subscribers for Podimo."
    },
    {
        id: "sportsball",
        featured: false,
        title: "Media Direct Norge – SportsBall",
        client: "Media Direct Norge",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/sportsball.jpg",
        video: "",
        description: "Let the game begin: a ball game for Media Direct Norge."
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
        title: "Fanta – Halloween",
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
        title: "Toms – Haunted House",
        client: "Toms",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/toms.jpg",
        video: "",
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
        title: "Pepsi Max – Max the Music",
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
        title: "Cinemataztic – CineRunner",
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
        title: "Battery – Black Energy",
        client: "Battery",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/battery-black.jpg",
        video: "",
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
        title: "Coca-Cola – The Coke maze game",
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
        title: "Bet25 – Ganz genau",
        client: "Bet25",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/derby25.jpg",
        video: "",
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
        description: "The ghosts have escaped to the cinema. Catch them with your phone and become the hero of the day."
    },
    {
        id: "nokia",
        featured: false,
        title: "Nokia – Experience the new Nokia",
        client: "Nokia",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/nokia.jpg",
        video: "",
        description: "Complete the five Nokia missions."
    },
    {
        id: "sonic",
        featured: false,
        title: "Sonic – Are you fast?",
        client: "Sonic",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/sonic.jpg",
        video: "",
        description: "Try to keep up with Sonic and take home the prize."
    },
    {
        id: "sprite",
        featured: false,
        title: "Sprite – Sprite the word",
        client: "Sprite",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/sprite.jpg",
        video: "",
        description: "Join Sivas in the hunt for the word."
    },
    {
        id: "trolls",
        featured: false,
        title: "Trolls World Tour – The rocking troll game",
        client: "Trolls World Tour",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/trolls.jpg",
        video: "",
        description: "A rocking music game for Trolls World Tour in Australia."
    },
    {
        id: "tuborg-derby",
        featured: false,
        title: "Tuborg – Let the race begin",
        client: "Tuborg",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/tuborg-derby.jpg",
        video: "",
        description: "Welcome to the racetrack and the first Tuborg Derby."
    },
    {
        id: "mentos-friends",
        featured: false,
        title: "Mentos – Complimentos",
        client: "Mentos",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/mentos-friends.jpg",
        video: "",
        description: "Get the Mentos, win the prize and share it with one of the other players. Everyone wins."
    },
    {
        id: "paula",
        featured: false,
        title: "Dr. Oetker – Where's Paula?",
        client: "Dr. Oetker",
        category: "CineGame",
        mediaType: "image",
        cover: "assets/cases/paula.jpg",
        video: "",
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
        title: "Bundeswehr – Karriereberatung",
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
        title: "Specsavers – Test your vision",
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
        title: "BookBeat – Nothing beats a good book",
        client: "BookBeat",
        category: "CineGame",
        mediaType: "video",
        cover: "assets/cases/bookbeat.jpg",
        video: "https://storage.googleapis.com/cinemataztic-public/video/BookBeat_Video_CutDown.mp4",
        description: "A game for BookBeat."
    },
    {
        id: "demo-programmatic-1",
        featured: false,
        title: "Demo – Nordic Roast: Matinee targeting",
        client: "Nordic Roast (demo)",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/demo-programmatic-1.svg",
        video: "",
        description: "Demo case: a coffee brand books daytime and matinee screenings only, targeting adults (A12+) across selected cinemas with a digital voucher for a free coffee."
    },
    {
        id: "demo-programmatic-2",
        featured: false,
        title: "Demo – Velo Bikes: Summer weekends",
        client: "Velo Bikes (demo)",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/demo-programmatic-2.svg",
        video: "",
        description: "Demo case: a bike shop runs weekend-only spots in cinemas near its stores, choosing distribution by geography and adjusting the bid percentage during the campaign."
    },
    {
        id: "demo-programmatic-3",
        featured: false,
        title: "Demo – Aurora Play: Family premieres",
        client: "Aurora Play (demo)",
        category: "Programmatic",
        mediaType: "image",
        cover: "assets/cases/demo-programmatic-3.svg",
        video: "",
        description: "Demo case: a streaming service targets the ‘Family’ audience around family movie premieres, with deep-link vouchers to its app tracked in the real-time dashboard."
    },
    // --- PITCH CASES (from cinemataztic.com/games/pitch) ---
    // Images are linked from cinemataztic.com. logoBox is the visible part of the logo image
    // [x, y, width, height, image width, image height], so the card can crop away its empty margins.
    {
        id: "pitch-lidl",
        title: "Lidl – Go Full Lidl",
        client: "Lidl",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/4a32ee43a106e468b142cc891d6e6060/59894/l2.jpg",
        logo: "https://cinemataztic.com/static/22a5f6d8ea13663adc728567666a918f/e3f27/lidl_logo.png",
        logoBox: [8, 10, 172, 69, 194, 87],
        video: "",
        images: [
            "https://cinemataztic.com/static/4a32ee43a106e468b142cc891d6e6060/59894/l2.jpg",
            "https://cinemataztic.com/static/a4afd0cdb180fd6182441d247304a261/59894/l3.jpg",
            "https://cinemataztic.com/static/1f9b267fb9529b2dfa574f86e892ccc2/59894/l4.jpg",
            "https://cinemataztic.com/static/f0ee22d03b3ef73b097cc59fbdca0e6c/59894/l5.jpg",
            "https://cinemataztic.com/static/1aa49cd7fac7802b8f6d39267be8edc9/59894/l6.jpg"
        ],
        description: "A CineGame pitch for Lidl: Go Full Lidl."
    },
    {
        id: "pitch-marvel",
        title: "Marvel – Game pitch",
        client: "Marvel",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/b7f880f5b0d9ca051e100a575e32b8cd/e51ab/marvel1.jpg",
        logo: "https://cinemataztic.com/static/a36c7b3617c149e0013d789ea3e54eea/b9614/marvel_logo_trans.png",
        logoBox: [1, 5, 313, 126, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/b7f880f5b0d9ca051e100a575e32b8cd/e51ab/marvel1.jpg",
            "https://cinemataztic.com/static/3ee4e0db6f305e556115e405817e68f6/e51ab/marvel2.jpg",
            "https://cinemataztic.com/static/1f26fb8d3bcd650c7356c60cc5a287fc/e51ab/marvel3.jpg",
            "https://cinemataztic.com/static/c2c169db0fd4ebd46af1335f691874fe/e51ab/marvel4.jpg"
        ],
        description: "A CineGame pitch for Marvel."
    },
    {
        id: "pitch-oreo",
        title: "Oreo – Game pitch",
        client: "Oreo",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/1f0ec3d8cb5edef00cb2b7b7bcb29c3c/59894/oreo1.jpg",
        logo: "https://cinemataztic.com/static/c6cb74d989ae4a622d96aa0f14606957/b9614/oreo_logo.png",
        logoBox: [17, 3, 292, 130, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/1f0ec3d8cb5edef00cb2b7b7bcb29c3c/59894/oreo1.jpg",
            "https://cinemataztic.com/static/0bb427d3da7585ab9464161f571de1e8/59894/oreo2.jpg",
            "https://cinemataztic.com/static/c9ae145e1736c17eedaa5eaae150a61b/59894/oreo3.jpg",
            "https://cinemataztic.com/static/7473db2ee8e72fad17783d59e18642d6/8b192/oreo4.jpg"
        ],
        description: "A CineGame pitch for Oreo."
    },
    {
        id: "pitch-redrooster",
        title: "Red Rooster – Game pitch",
        client: "Red Rooster",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/2e4a4b8b9aa911156c34f4026e0a0cc1/e51ab/rr1.jpg",
        logo: "https://cinemataztic.com/static/459e3c2208e9000a26baabfea9f30289/b9614/rr-logo.png",
        logoBox: [2, 3, 246, 127, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/2e4a4b8b9aa911156c34f4026e0a0cc1/e51ab/rr1.jpg",
            "https://cinemataztic.com/static/8301ed8f864a8490fff848fbe8682dc0/e51ab/rr2.jpg",
            "https://cinemataztic.com/static/76d08bf4e7179a32624cd7dc56bd2614/e51ab/rr3.jpg"
        ],
        description: "A CineGame pitch for Red Rooster."
    },
    {
        id: "pitch-kfc",
        title: "KFC – The Restaurant Game",
        client: "KFC",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/f975a67db373ea43442835a37a065839/59894/kfc1.jpg",
        logo: "https://cinemataztic.com/static/594f04b25a5fbebd1cbdca248bf4ae40/b9614/kfc-logo.png",
        logoBox: [13, 1, 133, 134, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/f975a67db373ea43442835a37a065839/59894/kfc1.jpg",
            "https://cinemataztic.com/static/35d79531db6d6becf33605d07ea4e83c/59894/kfc2.jpg",
            "https://cinemataztic.com/static/524a3bb850df30e63ed8c8b5f48b614c/432d1/kfc_phone.jpg"
        ],
        description: "Receive orders from customers in your KFC restaurant: 1–3 customers enter at a time, and it’s your job to serve them as well as possible."
    },
    {
        id: "pitch-hungry-jacks",
        title: "Hungry Jack's – The Maze Game",
        client: "Hungry Jack's",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/b0d2eac2e57766bb94b6a6c048567b4b/d36ce/hj1.jpg",
        logo: "https://cinemataztic.com/static/ed6b62a83e18be3674160fdab93466bc/b9614/hj_logo.png",
        logoBox: [0, 0, 140, 136, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/b0d2eac2e57766bb94b6a6c048567b4b/d36ce/hj1.jpg",
            "https://cinemataztic.com/static/6e3e2fa6668fc5b16fc10a14ef537c55/bd3e4/hj2.jpg",
            "https://cinemataztic.com/static/dfec7749319f08f28b83b60b7dce3ed0/e51ab/hj3.jpg"
        ],
        description: "A CineGame pitch for Hungry Jack's: The Maze Game."
    },
    {
        id: "pitch-lego-city",
        title: "LEGO – City",
        client: "LEGO",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/c4e477343ed3d99792156f4054d3d845/e51ab/lego_city_01.jpg",
        logo: "https://cinemataztic.com/static/4851d856ea9bece31e2cc0e9b2dcc5b3/b9614/lego_city_logo.png",
        logoBox: [0, 0, 344, 126, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/c4e477343ed3d99792156f4054d3d845/e51ab/lego_city_01.jpg",
            "https://cinemataztic.com/static/a778e87b7a2ecd526c42bc954cc5c1dc/e51ab/lego_city_02.jpg",
            "https://cinemataztic.com/static/56559a02e3546e03fb12438a864de121/e51ab/lego_city_03.jpg",
            "https://cinemataztic.com/static/721966db91f95a4715bc54f9305f502d/e51ab/lego_city_04.jpg",
            "https://cinemataztic.com/static/bc4452956d0076e0a2410400a3b0acfb/e51ab/lego_city_05.jpg",
            "https://cinemataztic.com/static/151f56c22bbd2456ab9a1f7c1024eedb/e51ab/lego_city_06.jpg"
        ],
        description: "A CineGame pitch for LEGO: City."
    },
    {
        id: "pitch-pengeskyen",
        title: "Danske Bank – Penge Skyen",
        client: "Danske Bank",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/568353aeed31a49d97ed96f85b79cb02/e51ab/pengeskyen_1.jpg",
        logo: "https://cinemataztic.com/static/7b48bd97d405c79206a806e646303817/b9614/pengeskyen_logo.png",
        logoBox: [0, 9, 350, 81, 350, 136],
        logoWhite: true,
        video: "",
        images: [
            "https://cinemataztic.com/static/568353aeed31a49d97ed96f85b79cb02/e51ab/pengeskyen_1.jpg",
            "https://cinemataztic.com/static/099cdb379de1716fa58687807f6addb7/e51ab/pengeskyen_2.jpg",
            "https://cinemataztic.com/static/ce2874dc1a2ccff46e0fabd778202004/e51ab/pengeskyen_3.jpg",
            "https://cinemataztic.com/static/e5677771d40017f2f768220a5852974f/e51ab/pengeskyen_4.jpg",
            "https://cinemataztic.com/static/bb5d37402e4714b65b1fc329e9dfd75f/e51ab/pengeskyen_5.jpg",
            "https://cinemataztic.com/static/7c790b81a10818708a2832f5660bca93/e51ab/pengeskyen_6.jpg"
        ],
        description: "The game consists of several mini games."
    },
    {
        id: "pitch-cocio",
        title: "Cocio – The Wingman Shake Game",
        client: "Cocio",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/efcf7be69c8f13526685f80b3e2351a9/e51ab/cocio_1.jpg",
        logo: "https://cinemataztic.com/static/f2888015d6691382c2bfa94610165776/b9614/cocio_logo.png",
        logoBox: [8, 12, 113, 112, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/efcf7be69c8f13526685f80b3e2351a9/e51ab/cocio_1.jpg",
            "https://cinemataztic.com/static/adc9f9d42bac8fa1fc6171f51bd1ba1d/e51ab/cocio_2.jpg",
            "https://cinemataztic.com/static/76335a8b13cf194ae0b1507dede83403/e51ab/cocio_3.jpg",
            "https://cinemataztic.com/static/967220de8b319c6857ded70fcb6297d6/e51ab/cocio_4.jpg",
            "https://cinemataztic.com/static/fb922b91a551fd8b6d3c760504892162/e96f3/cocio_5.png"
        ],
        description: "A CineGame pitch for Cocio: The Wingman Shake Game."
    },
    {
        id: "pitch-one",
        title: "OnePlus – The Race",
        client: "OnePlus",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/ce811b2d3675760ba4534f3715a70bb8/e51ab/one_plus_01.jpg",
        logo: "https://cinemataztic.com/static/c8256115c7adad3e098f6930482ce01c/b9614/one_plus_logo.png",
        logoBox: [6, 32, 308, 71, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/ce811b2d3675760ba4534f3715a70bb8/e51ab/one_plus_01.jpg",
            "https://cinemataztic.com/static/6331c79be9255894768785b3a134562e/e51ab/one_plus_2.jpg"
        ],
        description: "A CineGame pitch for OnePlus: The Race."
    },
    {
        id: "pitch-stimorol",
        title: "Stimorol – The Chew Game",
        client: "Stimorol",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/e321750dcf2af4eeca53820f16e7a1da/e51ab/stimorol_1.jpg",
        logo: "https://cinemataztic.com/static/e95de3daef0888df31a449136604bded/b9614/stimorol_logo.png",
        logoBox: [0, 22, 350, 79, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/e321750dcf2af4eeca53820f16e7a1da/e51ab/stimorol_1.jpg"
        ],
        description: "A CineGame pitch for Stimorol: The Chew Game."
    },
    {
        id: "pitch-mobilepay",
        title: "MobilePay – The Game",
        client: "MobilePay",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/8ba660ed5121b16ebe37e92c48d33f0d/e51ab/mobilepay_1.jpg",
        logo: "https://cinemataztic.com/static/96769a1ca3afb418580afbc25a6be0b1/b9614/mobilepay_logo.png",
        logoBox: [9, 15, 326, 104, 350, 136],
        video: "",
        images: [
            "https://cinemataztic.com/static/8ba660ed5121b16ebe37e92c48d33f0d/e51ab/mobilepay_1.jpg"
        ],
        description: "A CineGame pitch for MobilePay: The Game."
    },
    {
        id: "pitch-volkswagen",
        title: "Volkswagen – Game pitch",
        client: "Volkswagen",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/a3c5adf12705797542da4ca8342dc486/e51ab/vw_1.jpg",
        logo: "https://cinemataztic.com/static/0b69d16dc7c907a64b57380f411ba273/b9614/vw_logo.png",
        logoBox: [2, 2, 132, 132, 350, 136],
        logoWhite: true,
        video: "",
        images: [
            "https://cinemataztic.com/static/a3c5adf12705797542da4ca8342dc486/e51ab/vw_1.jpg",
            "https://cinemataztic.com/static/f3f8b5b8d1cfbe2c5047dee0ffe94f4f/e51ab/vw_2.jpg",
            "https://cinemataztic.com/static/caa64464b9d7a2be9a19dec1d0592ebf/e51ab/vw_3.jpg",
            "https://cinemataztic.com/static/4235e41994d9afb19ab3f559eb47359e/e51ab/vw_4.jpg",
            "https://cinemataztic.com/static/d54cad79c3144860c2d3cf1f2df81523/e51ab/vw_5.jpg"
        ],
        description: "A CineGame pitch for Volkswagen."
    },
    {
        id: "pitch-sunweb",
        title: "Sunweb – The Ski Game",
        client: "Sunweb",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/141b6aff5260e554593f08b573e57bb7/4c8c3/sunweb-obstaclerunner.jpg",
        logo: "https://cinemataztic.com/static/e8d2649e548c3d8f8b6e67b6e250a686/e3f27/sunweb_logo.png",
        logoBox: [5, 2, 78, 84, 194, 87],
        video: "",
        images: [
            "https://cinemataztic.com/static/141b6aff5260e554593f08b573e57bb7/4c8c3/sunweb-obstaclerunner.jpg",
            "https://cinemataztic.com/static/473f9a90e7f86c679f9762a58789a067/4c8c3/sunweb-obstaclerunner-1-.jpg",
            "https://cinemataztic.com/static/af3be288b8e232ebc871dc982b4777d1/4c8c3/sunweb-obstaclerunner-2-.jpg"
        ],
        description: "A CineGame pitch for Sunweb: The Ski Game."
    },
    {
        id: "pitch-kims-dating",
        title: "Kims – Dating",
        client: "Kims",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/7126fca60be66cb4d0a8ea868fdd33c6/4c8c3/kim-s-dating.jpg",
        logo: "https://cinemataztic.com/static/c9deedc6d02ab70307d49befc709449f/e3f27/logo_kims.png",
        logoBox: [2, 0, 192, 87, 194, 87],
        video: "",
        images: [
            "https://cinemataztic.com/static/7126fca60be66cb4d0a8ea868fdd33c6/4c8c3/kim-s-dating.jpg",
            "https://cinemataztic.com/static/627625f30ec36f72bff7e00afc00f50d/4c8c3/kim-s-dating-1-.jpg"
        ],
        description: "A CineGame pitch for Kims: Dating."
    },
    {
        id: "pitch-normal",
        title: "Normal – The Game",
        client: "Normal",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/c261c7460d6300c08a6465f0d567cef4/e51ab/normal1.jpg",
        logo: "https://cinemataztic.com/static/13a3994994f2686a826aed482267aa71/d8f52/normal.png",
        logoBox: [7, 17, 336, 141, 350, 175],
        video: "",
        images: [
            "https://cinemataztic.com/static/c261c7460d6300c08a6465f0d567cef4/e51ab/normal1.jpg",
            "https://cinemataztic.com/static/ea0293d666b9de8e20b3e7211f9801e6/e51ab/normal2.jpg"
        ],
        description: "A CineGame pitch for Normal: The Game."
    },
    {
        id: "pitch-samsung",
        title: "Samsung – Find Object",
        client: "Samsung",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/e83289c6ba1361f151d3460976a732a4/59894/samsung_game1.jpg",
        logo: "https://cinemataztic.com/static/e2432e4e3fb35b7da469b7d5d07eb37e/e3f27/samsung_find_objeckt_logo.png",
        logoBox: [2, 29, 184, 30, 194, 87],
        logoWhite: true,
        video: "",
        images: [
            "https://cinemataztic.com/static/e83289c6ba1361f151d3460976a732a4/59894/samsung_game1.jpg",
            "https://cinemataztic.com/static/ec6cd88840efe4212872e52d78b8899b/59894/samsung_game2.jpg",
            "https://cinemataztic.com/static/77356e40eeeae051bef15dcb96360280/59894/samsung_lobby.jpg",
            "https://cinemataztic.com/static/06de8e8e31312fec23df03ae7877547b/baad8/samsung_game3.jpg",
            "https://cinemataztic.com/static/288d602a8e15fd04080c889fdd4e6663/59894/samsung_game4.jpg",
            "https://cinemataztic.com/static/c0a1b632dc3dae40f6b3ddea32eedfdd/59894/samsung_winner.jpg"
        ],
        description: "Find the object with your Samsung phone."
    },
    {
        id: "pitch-about-you",
        title: "About You – The Word Game",
        client: "About You",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/8d6f220ae2fa0bf0368f967e0bd07621/59894/lobby1-pt.jpg",
        logo: "https://cinemataztic.com/static/e01a7999a068fb9bc49ec0b83d171676/e3f27/about-you_logo.png",
        logoBox: [0, 49, 194, 38, 194, 87],
        logoWhite: true,
        video: "",
        images: [
            "https://cinemataztic.com/static/8d6f220ae2fa0bf0368f967e0bd07621/59894/lobby1-pt.jpg",
            "https://cinemataztic.com/static/442539094ee827c7edd05a5f39e7fe13/59894/lobby2-pt.jpg",
            "https://cinemataztic.com/static/f599af07594b8e0fcf1d66cd3032d46a/59894/game1-pt.jpg",
            "https://cinemataztic.com/static/5fabaf10aab5a04e8afbd2b7fe9bb2d0/59894/game2-pt.jpg",
            "https://cinemataztic.com/static/835b85b2e244e74d386b9fdb5983da63/59894/winner-pt.jpg"
        ],
        description: "A CineGame pitch for About You: The Word Game."
    },
    {
        id: "pitch-vigor",
        title: "Vigor – Follow the Vigor",
        client: "Vigor",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/0a4d92262a22bb4ae1787f855c8388c1/a0450/v1.png",
        logo: "https://cinemataztic.com/static/755dae434592648b3a9ed419cc558660/e3f27/logo_vigor.png",
        logoBox: [11, 16, 145, 56, 194, 87],
        video: "",
        images: [
            "https://cinemataztic.com/static/0a4d92262a22bb4ae1787f855c8388c1/a0450/v1.png",
            "https://cinemataztic.com/static/bf542f3c5c0fdb302f589601621daae7/9f793/v3.png",
            "https://cinemataztic.com/static/16c59f815f542e1cbb63e5c1d5771b29/042c4/v4.png",
            "https://cinemataztic.com/static/388dc42781d112487c6acd3dd8db85e0/bd301/v5.png",
            "https://cinemataztic.com/static/fd6067beea4271452b2b3acb027e8eaf/a73ea/v61.jpg"
        ],
        description: "A CineGame pitch for Vigor: Follow the Vigor."
    },
    {
        id: "pitch-booking",
        title: "Booking.com – The Game",
        client: "Booking.com",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/cb920cc4193f0c1f097e54018c580ed3/4c8c3/booking.com_pitch_de-1-.jpg",
        logo: "https://cinemataztic.com/static/5c1a90fd0f08b63569da17033e29de8d/e3f27/logo_booking.png",
        logoBox: [2, 27, 189, 32, 194, 87],
        video: "",
        images: [
            "https://cinemataztic.com/static/cb920cc4193f0c1f097e54018c580ed3/4c8c3/booking.com_pitch_de-1-.jpg",
            "https://cinemataztic.com/static/be17a3310395f8a1a6b44fa282f003d4/4c8c3/booking.com_pitch_de-2-.jpg",
            "https://cinemataztic.com/static/ae6ebcfea2266dcd51800e9eceb0bf98/4c8c3/booking.com_pitch_de-3-.jpg",
            "https://cinemataztic.com/static/b109bbf61e85353cfd6dacce6be2440c/4c8c3/booking.com_pitch_de-4-.jpg",
            "https://cinemataztic.com/static/568f449a37a525e8f31c1ca53e61cda8/4c8c3/booking.com_pitch_de-5-.jpg",
            "https://cinemataztic.com/static/5d4457cfdf854660f3a73a5ad07ac05e/4c8c3/booking.com_pitch_de-6-.jpg"
        ],
        description: "A CineGame pitch for Booking.com: The Game."
    },
    {
        id: "pitch-air-new-zealand",
        title: "Air New Zealand – The Game",
        client: "Air New Zealand",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/be01457855ae9cbf42c1054ec1579da0/4c8c3/airnewzealand_pitch.jpg",
        logo: "https://cinemataztic.com/static/18e66be65700f56b6596b3a7a18595bb/e3f27/logo_az.png",
        logoBox: [2, 29, 189, 29, 194, 87],
        logoWhite: true,
        video: "",
        images: [
            "https://cinemataztic.com/static/be01457855ae9cbf42c1054ec1579da0/4c8c3/airnewzealand_pitch.jpg",
            "https://cinemataztic.com/static/a5224c040ccc668617ae0879ddc774c0/4c8c3/airnewzealand_pitch-1-.jpg",
            "https://cinemataztic.com/static/6fe3263d7e0271754f3570d6e1311407/4c8c3/airnewzealand_pitch-2-.jpg",
            "https://cinemataztic.com/static/3b586bb89ec88d262b48e1fd027127d8/4c8c3/airnewzealand_pitch-3-.jpg"
        ],
        description: "A CineGame pitch for Air New Zealand: The Game."
    },
    {
        id: "pitch-wolt",
        title: "Wolt – The Delivery Game",
        client: "Wolt",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/ef10be3b0ac6c6a639100f33faacdf00/4c8c3/w1.jpg",
        logo: "https://cinemataztic.com/static/87689f7fb5af837d5390ec20d6603bd9/e3f27/logo_wolt.png",
        logoBox: [2, 9, 190, 69, 194, 87],
        video: "",
        images: [
            "https://cinemataztic.com/static/ef10be3b0ac6c6a639100f33faacdf00/4c8c3/w1.jpg",
            "https://cinemataztic.com/static/b8f1c9bf540231f3a61778a7c1e346d4/4c8c3/w2.jpg",
            "https://cinemataztic.com/static/0ce2578fc998fdea6b2b1869278f742f/4c8c3/w3.jpg",
            "https://cinemataztic.com/static/c9c263d8f8e60ebc8e1303b164b95a4f/4c8c3/w4.jpg",
            "https://cinemataztic.com/static/dfb9bbc63dca4a3fe5371dc81541302a/4c8c3/w5.jpg",
            "https://cinemataztic.com/static/bf3352a004cc787ad7adb19c939d84ad/4c8c3/w6.jpg"
        ],
        description: "A CineGame pitch for Wolt: The Delivery Game."
    },
    {
        id: "pitch-mcd-dinerdash",
        title: "McDonald's – DinnerDash",
        client: "McDonald's",
        category: "Pitch",
        mediaType: "image",
        cover: "https://cinemataztic.com/static/13dd7166dedf74661b866c00f8c4131f/59894/mcd_deleveri1.jpg",
        logo: "https://cinemataztic.com/static/082a72c2a586a6448604a73877c50b85/7d021/mcd_logo_big.png",
        logoBox: [0, 19, 350, 184, 350, 222],
        video: "",
        images: [
            "https://cinemataztic.com/static/13dd7166dedf74661b866c00f8c4131f/59894/mcd_deleveri1.jpg",
            "https://cinemataztic.com/static/d7ab3e2526fe874636c26d2b0e41f863/59894/mcd_deleveri2.jpg",
            "https://cinemataztic.com/static/76bfa781375f39a0f76a0699bcf8c984/59894/mcd_wolt1.jpg",
            "https://cinemataztic.com/static/5780a4129b8e46f404baadb17c222689/59894/mcd_wolt2.jpg",
            "https://cinemataztic.com/static/83ac33675293f36ea36303634366bf45/59894/mcd_deliveroo1.jpg",
            "https://cinemataztic.com/static/fd0d04e5f5d483a3d1ec22e01d205241/59894/mcd_deliveroo2.jpg",
            "https://cinemataztic.com/static/df83616e9600267e75231a6654d9a7b2/59894/mcd_foodora1.jpg",
            "https://cinemataztic.com/static/1ffdbfdbd7f98b2c425bbb770bd4cbb2/59894/mcd_foodora2.jpg"
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
    "BookBeat": { src: "assets/logos/bookbeat.svg", white: true }
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
        .case-logo img.is-white { filter: brightness(0) invert(1); }
        .case-logo img.is-outlined { filter: drop-shadow(1.5px 0 0 #fff) drop-shadow(-1.5px 0 0 #fff) drop-shadow(0 1.5px 0 #fff) drop-shadow(0 -1.5px 0 #fff); }
        .case-logo span { display: block; text-align: center; font-weight: 900; text-transform: uppercase; line-height: 0.95; letter-spacing: -0.01em; color: #ffffff; font-size: clamp(1.4rem, 9cqw, 2.6rem); transition: transform 500ms; overflow-wrap: anywhere; }
        :has(> .case-logo) { container-type: inline-size; }
    `;
    document.head.appendChild(style);
})();

const escapeCoverText = s => String(s || '').replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);

// Card cover markup: the dark background plus the logo (or wordmark), placed by fitCaseLogos()
function caseCover(c) {
    const logo = c.logo ? { src: c.logo, white: c.logoWhite } : caseLogos[c.client];
    const name = escapeCoverText(c.client).replace(/\s*\(demo\)$/i, '');
    // logoBox [x, y, w, h, image w, image h]: show only the visible part of a logo image with empty margins
    if (logo && c.logoBox) {
        const [x, y, w, h, W, H] = c.logoBox;
        return `<div class="case-logo-bg"></div><div class="case-logo"><span class="case-logo-crop" data-ratio="${w / h}">`
            + `<img src="${logo.src}" alt="${name}" loading="lazy" onload="fitCaseLogo(this.closest('.case-logo').parentElement)" class="${logo.white ? 'is-white' : ''}"`
            + ` style="width: ${W / w * 100}%; left: ${-x / w * 100}%; top: ${-y / h * 100}%"></span></div>`;
    }
    const mark = logo
        ? `<img ${logo.color ? `data-src="${logo.src}" data-color="${logo.color}"` : `src="${logo.src}"`} alt="${name}" loading="lazy" onload="fitCaseLogo(this.closest('.case-logo').parentElement)" class="${logo.white ? 'is-white' : ''} ${logo.outline ? 'is-outlined' : ''}">`
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

// --- PITCH CASES: IMAGE SLIDER IN THE CASE POPUP ---
// Pitch cases have no video; their `images` are shown one at a time with arrows (also the arrow keys and
// swiping), a counter and dots.
function mountPitchSlider(box, images) {
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
            d.style.backgroundColor = n === index ? '#fece00' : '';
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
const newDefaultCases = ['pitch-lidl', 'pitch-marvel', 'pitch-oreo', 'pitch-redrooster', 'pitch-kfc',
    'pitch-hungry-jacks', 'pitch-lego-city', 'pitch-pengeskyen', 'pitch-cocio', 'pitch-one', 'pitch-stimorol', 'pitch-mobilepay',
    'pitch-volkswagen', 'pitch-sunweb', 'pitch-kims-dating', 'pitch-normal', 'pitch-samsung', 'pitch-about-you', 'pitch-vigor',
    'pitch-booking', 'pitch-air-new-zealand', 'pitch-wolt', 'pitch-mcd-dinerdash'];
// Default cases that were removed again: taken out of saved data too
const retiredDefaultCases = ['demo-pitch-1'];
function addNewDefaultCases(data) {
    data.seenDefaults = data.seenDefaults || [];
    data.cases = data.cases.filter(c => !retiredDefaultCases.includes(c.id));
    newDefaultCases.forEach(id => {
        if (data.seenDefaults.includes(id)) return;
        data.seenDefaults.push(id);
        const c = defaultCases.find(d => d.id === id);
        if (c && !data.cases.some(x => x.id === id)) data.cases.push(JSON.parse(JSON.stringify(c)));
    });
    return data;
}

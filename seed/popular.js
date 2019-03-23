//# Get Populares
//[GET] https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20

const POPULAR_MOVIES = {
    "results": [
        {
            "vote_count": 1097,
            "id": 166428,
            "video": false,
            "vote_average": 7.8,
            "title": "How to Train Your Dragon: The Hidden World",
            "popularity": 524.731,
            "poster_path": "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
            "original_language": "en",
            "original_title": "How to Train Your Dragon: The Hidden World",
            "genre_ids": [
            16,
            10751,
            12
            ],
            "backdrop_path": "/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg",
            "adult": false,
            "overview": "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
            "release_date": "2019-01-03"
        },
        {
            "vote_count": 2597,
            "id": 299537,
            "video": false,
            "vote_average": 7.2,
            "title": "Captain Marvel",
            "popularity": 394.844,
            "poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
            "original_language": "en",
            "original_title": "Captain Marvel",
            "genre_ids": [
            28,
            12,
            878
            ],
            "backdrop_path": "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
            "adult": false,
            "overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
            "release_date": "2019-03-06"
        },
        {
            "vote_count": 909,
            "id": 504172,
            "video": false,
            "vote_average": 6.5,
            "title": "The Mule",
            "popularity": 223.153,
            "poster_path": "/oeZh7yEz3PMnZLgBPhrafFHRbVz.jpg",
            "original_language": "en",
            "original_title": "The Mule",
            "genre_ids": [
            80,
            18,
            53
            ],
            "backdrop_path": "/bTeRgkAavyw1eCtSkaww18wLYNP.jpg",
            "adult": false,
            "overview": "Earl Stone, a man in his 80s who is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he’s just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.",
            "release_date": "2018-12-14"
        },
        {
            "vote_count": 480,
            "id": 399361,
            "video": false,
            "vote_average": 6.3,
            "title": "Triple Frontier",
            "popularity": 194.795,
            "poster_path": "/aBw8zYuAljVM1FeK5bZKITPH8ZD.jpg",
            "original_language": "en",
            "original_title": "Triple Frontier",
            "genre_ids": [
            28,
            53,
            80
            ],
            "backdrop_path": "/s9I2LmQMYCanl6DvC3X1AOHs2r8.jpg",
            "adult": false,
            "overview": "Struggling to make ends meet, former special ops soldiers reunite for a high-stakes heist: stealing $75 million from a South American drug lord.",
            "release_date": "2019-03-06"
        },
        {
            "vote_count": 84,
            "id": 450001,
            "video": false,
            "vote_average": 5.3,
            "title": "Master Z: Ip Man Legacy",
            "popularity": 193.596,
            "poster_path": "/2WfjB6FUDTIBVI2y02UGbnHR82s.jpg",
            "original_language": "cn",
            "original_title": "葉問外傳：張天志",
            "genre_ids": [
            28
            ],
            "backdrop_path": "/grtVFGJ4ts0nDAPpc1JWbBoVKTu.jpg",
            "adult": false,
            "overview": "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect.",
            "release_date": "2018-12-20"
        },
        {
            "vote_count": 1457,
            "id": 424783,
            "video": false,
            "vote_average": 6.5,
            "title": "Bumblebee",
            "popularity": 183.324,
            "poster_path": "/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
            "original_language": "en",
            "original_title": "Bumblebee",
            "genre_ids": [
            28,
            12,
            878
            ],
            "backdrop_path": "/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg",
            "adult": false,
            "overview": "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
            "release_date": "2018-12-15"
        },
        {
            "vote_count": 26,
            "id": 390634,
            "video": false,
            "vote_average": 5,
            "title": "Fate/stay night: Heaven’s Feel II. lost butterfly",
            "popularity": 167.715,
            "poster_path": "/4tS0iyKQBDFqVpVcH21MSJwXZdq.jpg",
            "original_language": "ja",
            "original_title": "劇場版「Fate/stay night [Heaven's Feel] ⅠⅠ. lost butterfly」",
            "genre_ids": [
            16,
            28,
            14,
            12
            ],
            "backdrop_path": "/3haESpzscyP1pLl2BxQ9j5KK9cM.jpg",
            "adult": false,
            "overview": "Theatrical-release adaptation of the visual novel \"Fate/stay night\", following the third and final route. (Part 2 of a trilogy.)",
            "release_date": "2019-01-12"
        },
        {
            "vote_count": 2764,
            "id": 324857,
            "video": false,
            "vote_average": 8.5,
            "title": "Spider-Man: Into the Spider-Verse",
            "popularity": 154.921,
            "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
            "original_language": "en",
            "original_title": "Spider-Man: Into the Spider-Verse",
            "genre_ids": [
            28,
            12,
            16,
            878,
            35
            ],
            "backdrop_path": "/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg",
            "adult": false,
            "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
            "release_date": "2018-12-07"
        },
        {
            "vote_count": 4714,
            "id": 297802,
            "video": false,
            "vote_average": 6.8,
            "title": "Aquaman",
            "popularity": 152.331,
            "poster_path": "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
            "original_language": "en",
            "original_title": "Aquaman",
            "genre_ids": [
            28,
            12,
            14,
            878
            ],
            "backdrop_path": "/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
            "adult": false,
            "overview": "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
            "release_date": "2018-12-07"
        },
        {
            "vote_count": 1626,
            "id": 399579,
            "video": false,
            "vote_average": 6.7,
            "title": "Alita: Battle Angel",
            "popularity": 145.962,
            "poster_path": "/xRWht48C2V8XNfzvPehyClOvDni.jpg",
            "original_language": "en",
            "original_title": "Alita: Battle Angel",
            "genre_ids": [
            28,
            878,
            53,
            12
            ],
            "backdrop_path": "/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg",
            "adult": false,
            "overview": "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
            "release_date": "2019-01-31"
        },
        {
            "vote_count": 12222,
            "id": 299536,
            "video": false,
            "vote_average": 8.3,
            "title": "Avengers: Infinity War",
            "popularity": 136.825,
            "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            "original_language": "en",
            "original_title": "Avengers: Infinity War",
            "genre_ids": [
            12,
            28,
            14
            ],
            "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            "adult": false,
            "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            "release_date": "2018-04-25"
        },
        {
            "vote_count": 428,
            "id": 512196,
            "video": false,
            "vote_average": 6.2,
            "title": "Happy Death Day 2U",
            "popularity": 123.264,
            "poster_path": "/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg",
            "original_language": "en",
            "original_title": "Happy Death Day 2U",
            "genre_ids": [
            27,
            9648,
            53,
            878,
            35
            ],
            "backdrop_path": "/dhNJHBDacrZjSPtwaiwp3idpzxU.jpg",
            "adult": false,
            "overview": "Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves. When Tree discovers that Carter's roommate has been altering time, she finds herself once again the target of a masked killer. When the psychopath starts to go after her inner circle, Tree soon realizes that she must die over and over again to save everyone.",
            "release_date": "2019-02-13"
        },
        {
            "vote_count": 15,
            "id": 586347,
            "video": false,
            "vote_average": 4.8,
            "title": "The Hard Way",
            "popularity": 122.783,
            "poster_path": "/z4UNeIfvuqUrbSANkZBzKyrr0tT.jpg",
            "original_language": "en",
            "original_title": "The Hard Way",
            "genre_ids": [
            28
            ],
            "backdrop_path": "/j3R1mUTaBogjU97be4eABlvZWhH.jpg",
            "adult": false,
            "overview": "After learning of his brother's death during a mission in Romania, a former soldier joins two allies to hunt down a mysterious enemy and take his revenge.",
            "release_date": "2019-03-20"
        },
        {
            "vote_count": 112,
            "id": 458723,
            "video": false,
            "vote_average": 7.4,
            "title": "Us",
            "popularity": 109.288,
            "poster_path": "/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
            "original_language": "en",
            "original_title": "Us",
            "genre_ids": [
            53,
            27
            ],
            "backdrop_path": "/jNUCddkM1fjYcFIcEwFjc7s2H4V.jpg",
            "adult": false,
            "overview": "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
            "release_date": "2019-03-14"
        },
        {
            "vote_count": 19,
            "id": 429471,
            "video": false,
            "vote_average": 5,
            "title": "Captive State",
            "popularity": 104.054,
            "poster_path": "/wB24P3QGGoAkEyBzTEb5s4lFY7N.jpg",
            "original_language": "en",
            "original_title": "Captive State",
            "genre_ids": [
            53,
            878
            ],
            "backdrop_path": "/6IZ84KFhNpy6htsJmwFVuK30pyp.jpg",
            "adult": false,
            "overview": "Nearly a decade after occupation by an extraterrestrial force, the lives of a Chicago neighborhood on both sides of the conflict are explored.",
            "release_date": "2019-03-15"
        },
        {
            "vote_count": 132,
            "id": 464504,
            "video": false,
            "vote_average": 6.1,
            "title": "A Madea Family Funeral",
            "popularity": 101.425,
            "poster_path": "/bOiHlY5JD8GLp7BvWdHkfEftzhQ.jpg",
            "original_language": "en",
            "original_title": "A Madea Family Funeral",
            "genre_ids": [
            35
            ],
            "backdrop_path": "/piGjUloiaq6qTpaDLisyDyEsx9i.jpg",
            "adult": false,
            "overview": "A joyous family reunion becomes a hilarious nightmare as Madea and the crew travel to backwoods Georgia, where they find themselves unexpectedly planning a funeral that might unveil unpleasant family secrets.",
            "release_date": "2019-03-01"
        },
        {
            "vote_count": 4007,
            "id": 338952,
            "video": false,
            "vote_average": 6.9,
            "title": "Fantastic Beasts: The Crimes of Grindelwald",
            "popularity": 100.402,
            "poster_path": "/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg",
            "original_language": "en",
            "original_title": "Fantastic Beasts: The Crimes of Grindelwald",
            "genre_ids": [
            10751,
            14,
            12
            ],
            "backdrop_path": "/wDN3FIcQQ1HI7mz1OOKYHSQtaiE.jpg",
            "adult": false,
            "overview": "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
            "release_date": "2018-11-14"
        },
        {
            "vote_count": 1753,
            "id": 450465,
            "video": false,
            "vote_average": 6.6,
            "title": "Glass",
            "popularity": 97.419,
            "poster_path": "/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
            "original_language": "en",
            "original_title": "Glass",
            "genre_ids": [
            53,
            9648,
            18,
            14
            ],
            "backdrop_path": "/lvjscO8wmpEbIfOEZi92Je8Ktlg.jpg",
            "adult": false,
            "overview": "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
            "release_date": "2019-01-16"
        },
        {
            "vote_count": 1059,
            "id": 400650,
            "video": false,
            "vote_average": 6.7,
            "title": "Mary Poppins Returns",
            "popularity": 92.265,
            "poster_path": "/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
            "original_language": "en",
            "original_title": "Mary Poppins Returns",
            "genre_ids": [
            14,
            10751,
            35
            ],
            "backdrop_path": "/cwiJQXezWz876K3jS57Sq56RYCZ.jpg",
            "adult": false,
            "overview": "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
            "release_date": "2018-12-13"
        },
        {
            "vote_count": 1212,
            "id": 428078,
            "video": false,
            "vote_average": 5.9,
            "title": "Mortal Engines",
            "popularity": 90.397,
            "poster_path": "/uXJVpPXxZO4L8Rz3IG1Y8XvZJcg.jpg",
            "original_language": "en",
            "original_title": "Mortal Engines",
            "genre_ids": [
            878,
            28,
            12,
            14,
            53
            ],
            "page": 1,
            "total_results": 19788,
            "total_pages": 990,
            "backdrop_path": "/jnOuttTfG9KKpmOZtprC4pA1AlZ.jpg",
            "adult": false,
            "overview": "Many thousands of years in the future, Earth’s cities roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources. On one of these massive traction cities, the old London, Tom Natsworthy has an unexpected encounter with a mysterious young woman from the wastelands who will change the course of his life forever.",
            "release_date": "2018-11-27"
        }
    ]
}

export default POPULAR_MOVIES
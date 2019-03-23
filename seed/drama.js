//# Get Drama
//[GET] https://api.themoviedb.org/3/discover/movie?api_key=6f26fd536dd6192ec8a57e94141f8b20&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18

const DRAMA_MOVIES = {
    "results": [
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
            "vote_count": 2497,
            "id": 490132,
            "video": false,
            "vote_average": 8.3,
            "title": "Green Book",
            "popularity": 80.911,
            "poster_path": "/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
            "original_language": "en",
            "original_title": "Green Book",
            "genre_ids": [
            18,
            35,
            10402
            ],
            "backdrop_path": "/78PjwaykLY2QqhMfWRDvmfbC6EV.jpg",
            "adult": false,
            "overview": "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
            "release_date": "2018-11-16"
        },
        {
            "vote_count": 6386,
            "id": 424694,
            "video": false,
            "vote_average": 8.1,
            "title": "Bohemian Rhapsody",
            "popularity": 77.051,
            "poster_path": "/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
            "original_language": "en",
            "original_title": "Bohemian Rhapsody",
            "genre_ids": [
            18,
            10402
            ],
            "backdrop_path": "/xcaSYLBhmDzJ6P14bcKe0KTh3QV.jpg",
            "adult": false,
            "overview": "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
            "release_date": "2018-10-24"
        },
        {
            "vote_count": 3347,
            "id": 337167,
            "video": false,
            "vote_average": 6.1,
            "title": "Fifty Shades Freed",
            "popularity": 65.12,
            "poster_path": "/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
            "original_language": "en",
            "original_title": "Fifty Shades Freed",
            "genre_ids": [
            18,
            10749
            ],
            "backdrop_path": "/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
            "adult": false,
            "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
            "release_date": "2018-01-17"
        },
        {
            "vote_count": 454,
            "id": 491418,
            "video": false,
            "vote_average": 7.5,
            "title": "Instant Family",
            "popularity": 60.397,
            "poster_path": "/xYV1mODz99w7AjKDSQ7h2mzZhVe.jpg",
            "original_language": "en",
            "original_title": "Instant Family",
            "genre_ids": [
            35,
            18
            ],
            "backdrop_path": "/lwICpzZudw8BZ0bODaHgRWCdioB.jpg",
            "adult": false,
            "overview": "When Pete and Ellie decide to start a family, they stumble into the world of foster care adoption. They hope to take in one small child but when they meet three siblings, including a rebellious 15 year old girl, they find themselves speeding from zero to three kids overnight.",
            "release_date": "2018-11-16"
        },
        {
            "vote_count": 11,
            "id": 176147,
            "video": false,
            "vote_average": 7.5,
            "title": "Secret Love: The Schoolboy and the Mailwoman",
            "popularity": 59.974,
            "poster_path": "/tfwE0iAHwfWJSblD95P43jlB0vH.jpg",
            "original_language": "de",
            "original_title": "Heimliche Liebe - Der Schüler und die Postbotin",
            "genre_ids": [
            18,
            10749
            ],
            "backdrop_path": "/dzsQp9dACxYMJZ4LhLqw3zSY5rV.jpg",
            "adult": false,
            "overview": "A 17 year old boy falls in love with a 37 year old woman. As if this wouldn't be enough they are of different social classes and she is married.",
            "release_date": "2005-11-28"
        },
        {
            "vote_count": 1791,
            "id": 480530,
            "video": false,
            "vote_average": 6.6,
            "title": "Creed II",
            "popularity": 58.397,
            "poster_path": "/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
            "original_language": "en",
            "original_title": "Creed II",
            "genre_ids": [
            18
            ],
            "backdrop_path": "/6JHYYbvoSuQ95ceGx8Oeg8zzAjg.jpg",
            "adult": false,
            "overview": "Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",
            "release_date": "2018-11-21"
        },
        {
            "vote_count": 4713,
            "id": 332562,
            "video": false,
            "vote_average": 7.5,
            "title": "A Star Is Born",
            "popularity": 57.386,
            "poster_path": "/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
            "original_language": "en",
            "original_title": "A Star Is Born",
            "genre_ids": [
            18,
            10749
            ],
            "backdrop_path": "/wqtaHWOEZ3rXDJ8c6ZZShulbo18.jpg",
            "adult": false,
            "overview": "Seasoned musician Jackson Maine discovers — and falls in love with — struggling artist Ally. She has just about given up on her dream to make it big as a singer — until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
            "release_date": "2018-10-03"
        },
        {
            "vote_count": 824,
            "id": 429197,
            "video": false,
            "vote_average": 7.2,
            "title": "Vice",
            "popularity": 55.993,
            "poster_path": "/1gCab6rNv1r6V64cwsU4oEr649Y.jpg",
            "original_language": "en",
            "original_title": "Vice",
            "genre_ids": [
            18,
            36,
            35
            ],
            "backdrop_path": "/7TTlvADXSxg0yzlGTZFExmw4TSC.jpg",
            "adult": false,
            "overview": "George W. Bush picks Dick Cheney, the CEO of Halliburton Co., to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney's impressive résumé includes stints as White House chief of staff, House Minority Whip and defense secretary. When Bush wins by a narrow margin, Cheney begins to use his newfound power to help reshape the country and the world.",
            "release_date": "2018-12-25"
        },
        {
            "vote_count": 90,
            "id": 445629,
            "video": false,
            "vote_average": 6.1,
            "title": "Fighting with My Family",
            "popularity": 55.823,
            "poster_path": "/3TZCBAdKQiz0cGKGEjZiyZUA01O.jpg",
            "original_language": "en",
            "original_title": "Fighting with My Family",
            "genre_ids": [
            35,
            18
            ],
            "backdrop_path": "/mYKP6qcDUimVMAHQWLOuDHjO19S.jpg",
            "adult": false,
            "overview": "Born into a tight-knit wrestling family, Paige and her brother Zak are ecstatic when they get the once-in-a-lifetime opportunity to try out for the WWE. But when only Paige earns a spot in the competitive training program, she must leave her loved ones behind and face this new cutthroat world alone. Paige's journey pushes her to dig deep and ultimately prove to the world that what makes her different is the very thing that can make her a star.",
            "release_date": "2019-02-14"
        },
        {
            "vote_count": 8,
            "id": 443055,
            "video": false,
            "vote_average": 5.4,
            "title": "Love of My Life",
            "popularity": 49.577,
            "poster_path": "/7b19Sh0Aef5vGa0OFtvJxLe2SK9.jpg",
            "original_language": "en",
            "original_title": "Love of My Life",
            "genre_ids": [
            18,
            35
            ],
            "backdrop_path": "/7xWjv95DPjbx6zDiDVJspdZbrfL.jpg",
            "adult": false,
            "overview": "What if you had only five days to figure out... everything.",
            "release_date": "2017-02-17"
        },
        {
            "vote_count": 265,
            "id": 465914,
            "video": false,
            "vote_average": 7.2,
            "title": "If Beale Street Could Talk",
            "popularity": 46.293,
            "poster_path": "/8tZx0OX7kxv6F2VNWZoPr2bWDgE.jpg",
            "original_language": "en",
            "original_title": "If Beale Street Could Talk",
            "genre_ids": [
            18,
            10749,
            80
            ],
            "backdrop_path": "/1BeMxME8SPuJgCTmyEBzGWSZrAR.jpg",
            "adult": false,
            "overview": "After her fiance is falsely imprisoned, a pregnant African-American woman sets out to clear his name and prove his innocence.",
            "release_date": "2018-11-30"
        },
        {
            "vote_count": 6,
            "id": 516716,
            "video": false,
            "vote_average": 8,
            "title": "Milly & Mamet",
            "popularity": 45.912,
            "poster_path": "/cSQw6uL4EOpw8yzTXfN8aHiWgKe.jpg",
            "original_language": "id",
            "original_title": "Milly & Mamet",
            "genre_ids": [
            18,
            10749,
            35
            ],
            "backdrop_path": "/swRvr9iQ7qfmq5Xls4CKhzaERo3.jpg",
            "adult": false,
            "overview": "Milly and Mamet are busy taking care of their baby. One day, Mamet met Alexandra, a close friend at college, who now had investors to finance the restaurant ideas they had once wanted together.",
            "release_date": "2018-12-20"
        },
        {
            "vote_count": 6,
            "id": 566100,
            "video": false,
            "vote_average": 8.7,
            "title": "Keluarga Cemara",
            "popularity": 45.87,
            "poster_path": "/kerkbmW33NsmTXH9Rkadj5caDXR.jpg",
            "original_language": "id",
            "original_title": "Keluarga Cemara",
            "genre_ids": [
            10751,
            18
            ],
            "backdrop_path": "/fFA4uuNaEzk2omaxRRZg30azy2P.jpg",
            "adult": false,
            "overview": "Tells about Abah and Emak who have to face problems. Then their two children, Euis and Ara must face the new situation that befell their family. Euis who had to change schools and adapt to her new friends, and Abah who had to change jobs. A simple family story full of warmth and affection.",
            "release_date": "2019-01-03"
        },
        {
            "vote_count": 0,
            "id": 449924,
            "video": false,
            "vote_average": 0,
            "title": "Ip Man 4",
            "popularity": 40.969,
            "poster_path": "/rULoS40bBppuMcyr8KE4FHBs3zp.jpg",
            "original_language": "cn",
            "original_title": "葉問4",
            "genre_ids": [
            28,
            18,
            36
            ],
            "backdrop_path": null,
            "adult": false,
            "overview": "Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.",
            "release_date": "2019-10-18"
        },
        {
            "vote_count": 269,
            "id": 438650,
            "video": false,
            "vote_average": 5.2,
            "title": "Cold Pursuit",
            "popularity": 39.892,
            "poster_path": "/hXgmWPd1SuujRZ4QnKLzrj79PAw.jpg",
            "original_language": "en",
            "original_title": "Cold Pursuit",
            "genre_ids": [
            53,
            28,
            18
            ],
            "backdrop_path": "/7Wg6FOEvhduISlxSzSCutAl4lPq.jpg",
            "adult": false,
            "overview": "Nels Coxman's quiet life comes crashing down when his beloved son dies under mysterious circumstances. His search for the truth soon becomes a quest for revenge as he seeks coldblooded justice against a drug lord and his inner circle.",
            "release_date": "2019-02-07"
        },
        {
            "vote_count": 193,
            "id": 452832,
            "video": false,
            "vote_average": 4.9,
            "title": "Serenity",
            "popularity": 39.807,
            "poster_path": "/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
            "original_language": "en",
            "original_title": "Serenity",
            "genre_ids": [
            53,
            18,
            9648,
            878
            ],
            "backdrop_path": "/oOROXoQ402tHgK6NowmMUSLffkW.jpg",
            "adult": false,
            "overview": "Baker Dill is a fishing boat captain leading tours off a tranquil, tropical enclave called Plymouth Island. His quiet life is shattered, however, when his ex-wife Karen tracks him down with a desperate plea for help.",
            "release_date": "2019-01-24"
        },
        {
            "vote_count": 17811,
            "id": 157336,
            "video": false,
            "vote_average": 8.2,
            "title": "Interstellar",
            "popularity": 38.939,
            "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
            "original_language": "en",
            "original_title": "Interstellar",
            "genre_ids": [
            12,
            18,
            878
            ],
            "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
            "adult": false,
            "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "release_date": "2014-11-05"
        },
        {
            "vote_count": 1647,
            "id": 375262,
            "video": false,
            "vote_average": 7.7,
            "title": "The Favourite",
            "popularity": 38.593,
            "poster_path": "/cwBq0onfmeilU5xgqNNjJAMPfpw.jpg",
            "original_language": "en",
            "original_title": "The Favourite",
            "genre_ids": [
            18,
            36,
            35
            ],
            "page": 1,
            "total_results": 99354,
            "total_pages": 4968,
            "backdrop_path": "/ekWMoBZ4B9rM60INZEh5FAD2HFR.jpg",
            "adult": false,
            "overview": "England, early 18th century. The close relationship between Queen Anne and Sarah Churchill is threatened by the arrival of Sarah's cousin, Abigail Hill, resulting in a bitter rivalry between the two cousins to be the Queen's favourite.",
            "release_date": "2018-11-23"
        }
    ]
}

export default DRAMA_MOVIES
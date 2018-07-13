const express = require('express');
const router = express.Router();

// get list of locations
router.get('/', (req, res, next) => {
    res.status(200).json([
        {"name" : "Hyderabad"},
        {"name" : "Delhi"},
        {"name" : "Kolkatta"},
        {"name" : "Mumbai"},
        {"name" : "Chennai"},
    ]);
});

// get list of movies for the location
router.get('/:locationId/movie', (req, res, next) => {
    res.status(200).json([
        {
            "movie_id" : "1234",
            "name" : "Transformers",
            "image" : "transformers.jpg",
            "image_id" : "1234"
        },
        {
            "movie_id" : "2345",
            "name" : "Rangasthalam",
            "image" : "rangasthalam.jpg",
            "image_id" : "2345"
        }
    ]);
});

//get movie details
router.get('/:locationId/movie/:movieId', (req, res, next) => {
    res.status(200).json({	
        "name": "Transformers",
        "directed_by" : [{"name":"Michael Bay"}],
        "produced_by" : [{"name" : "Don Murphy"}, 
                        {"name" : "Tom DeSanto"},
                        {"name" : "Lorenzo di Bonaventura"},
                        {"name" : "Ian Bryce"},
                        ],
        "screenplay_by" : [{"name" : "Roberto Orci"},
                           {"name" : "Alex Kurtzman"}
                          ],
        "story_by" : [{"name" : "John Rogers"},
                      {"name" : "Roberto Orci"}
                      ],
        "starring" : [ 
                        {"name": "Shia LaBeouf", "character": "Sam Witwicky"},
                        {"name": "Tyrese Gibson", "character": "TSgt Robert Epps"},
                        {"name": "Josh Duhamel", "character": "Capt. William Lennox"},
                        {"name": "Anthony Anderson", "character": "Glen Whiteman"}
                    ],
        "music_by" : [{"name": "Steve Jablonsky"}],
        "cinematography_by" : [{"name": "Mitchell Amundsen"}],
        "release_date" : "July 3, 2007",
        "running_time" : "143 minutes",
        "language" : "English",
        
        "theatres" : 	[
                            {
                                "name" : "PVR Cinemas InOrbit Mall",
                                "id" : "123456",
                                "shows" : 	[
                                                {
                                                    "showTime": "4.00 pm",
                                                    "bookingPercent": "60",
                                                    "showId": "123456",
                                                },
                                                {
                                                    "showTime": "7.00 pm",
                                                    "bookingPercent": "80",
                                                    "showId": "987654",
                                                }
                                            ]
                            }
                        ],
        "image" : "transformers.jpg",
        "videioLink" : "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwjxxZzrpZfcAhUB54MKHeAhCHUQtwIILjAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLU6Sm5oJEEo&usg=AOvVaw3kF8UUUbJlkDktUix7Jack"
    });
});


// get list of theaters
router.get('/:locationId/movie/:movieId/theatre', (req, res, next) => {
    res.status(200).json([
        {
            "name" : "PVR Cinemas InOrbit Mall",
            "id" : "123456",
            "shows" : 	[
                            {
                                "showTime": "4.00 pm",
                                "bookingPercent": "60",
                                "showId": "123456",
                            },
                            {
                                "showTime": "7.00 pm",
                                "bookingPercent": "80",
                                "showId": "987654",
                            }
                        ]
        }
    ]);
});

router.get('/:locationId/theater/:theatreId/screen/', (req, res, next) => {
    res.status(200).json(
        {
			"shows" : 	[
							{
								"showTime": "4.00 pm",
								"bookingPercent": "60",
								"showId": "123456",
							},
							{
								"showTime": "7.00 pm",
								"bookingPercent": "80",
								"showId": "987654",
							}
						]
		}
    )
})
module.exports = router;
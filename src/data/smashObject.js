const smashObject = {
    "info": {
        "title": "https://i.imgur.com/sexFe8T.png",
        "artist": "https://www.deviantart.com/elevenzm/gallery/all?page=13",
    },
    "tournaments": [
        {
            "id": 1,
            "name": "New Beginning",
            "date": "April 2nd, 2022",
            "rank": "B",
            "entrants": 11,
            "participants": [1,2],
            "top_eight_img": "",
            "recent": false
        },
        {
            "id": 2,
            "name": "Uprising",
            "date": "August 27th, 2022",
            "rank": "A",
            "entrants": 15,
            "participants": [1,2,3],
            "top_eight_img": "https://i.imgur.com/ULt3pkh.png",
            "recent": true
        },
        {
            "id": 3,
            "name": "Casual Party (Upcoming)",
            "date": "October 15th, 2022",
            "rank": "Casual",
            "entrants": 0,
            "participants": [],
            "top_eight_img": "",
            "recent": false
        }
    ],
    "players": [
        {
            "id": 1,
            "name": "Kakintse",
            "attendance": "100%",
            "rank": 1,
            "characters": ["Pikachu", "Pokemon Trainer", "Wolf"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "5th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                },
                {
                    "tournament_id": 2,
                    "result": "1st",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 2,
            "name": "Nick",
            "attendance": "100%",
            "rank": 2,
            "characters": ["Link", "Lucina", "Ganondorf"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "1st",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                },
                {
                    "tournament_id": 2,
                    "result": "3rd",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 3,
            "name": "Alan",
            "attendance": "50%",
            "rank": 3,
            "characters": ["Lucina", "Zero Suit Samus", "Wolf"],
            "placings": [
                {
                    "tournament_id": 2,
                    "result": "2nd",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 4,
            "name": "Thomas",
            "attendance": "100%",
            "rank": 4,
            "characters": ["Pyra & Mythra", "Joker", "Shulk"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "2nd",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                },
                {
                    "tournament_id": 2,
                    "result": "5th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 5,
            "name": "Rockin",
            "attendance": "50%",
            "rank": 5,
            "characters": ["Zelda"],
            "placings": [
                {
                    "tournament_id": 2,
                    "result": "4th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 6,
            "name": "Tony",
            "attendance": "50%",
            "rank": 6,
            "characters": ["Pikachu", "Lucina"],
            "placings": [
                {
                    "tournament_id": 2,
                    "result": "5th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 7,
            "name": "Julio",
            "attendance": "100%",
            "rank": 7,
            "characters": ["Lucas", "Lucina"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "4th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                },
                {
                    "tournament_id": 2,
                    "result": "9th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 8,
            "name": "Josh",
            "attendance": "50%",
            "rank": 8,
            "characters": ["Samus", "Greninja", "Sheik"],
            "placings": [
                {
                    "tournament_id": 2,
                    "result": "9th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 9,
            "name": "William C",
            "attendance": "50%",
            "rank": 9,
            "characters": ["Wolf", "Joker"],
            "placings": [
                {
                    "tournament_id": 2,
                    "result": "7th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 10,
            "name": "Kevin B",
            "attendance": "50%",
            "rank": 10,
            "characters": ["Captain Falcon"],
            "placings": [
                {
                    "tournament_id": 2,
                    "result": "7th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 11,
            "name": "Destin",
            "attendance": "0%",
            "rank": 11,
            "characters": ["???"],
            "placings": [
            ]
        },
        {
            "id": 12,
            "name": "Will P",
            "attendance": "0%",
            "rank": 12,
            "characters": ["Terry", "Cloud"],
            "placings": [
            ]
        },
        {
            "id": 13,
            "name": "Steven C",
            "attendance": "0%",
            "rank": 13,
            "characters": ["Link", "Snake", "Villager", "Falco"],
            "placings": [
            ]
        },
        {
            "id": 14,
            "name": "Michael R",
            "attendance": "100%",
            "rank": 14,
            "characters": ["Donkey Kong", "Ness", "Inkling", "Link"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "3rd",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                },
                {
                    "tournament_id": 2,
                    "result": "9th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 15,
            "name": "Kevin W",
            "attendance": "100%",
            "rank": 15,
            "characters": ["Bowser", "Snake"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "9th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                },
                {
                    "tournament_id": 2,
                    "result": "7th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 16,
            "name": "Joe",
            "attendance": "50%",
            "rank": 16,
            "characters": ["Fox", "Ness"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "5th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 17,
            "name": "James M",
            "attendance": "100%",
            "rank": 17,
            "characters": ["Samus", "Byleth", "Kirby"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "9th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                },
                {
                    "tournament_id": 2,
                    "result": "13th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 18,
            "name": "Alex W",
            "attendance": "50%",
            "rank": 18,
            "characters": ["Kazuya", "Luigi"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "7th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 19,
            "name": "Gabriel",
            "attendance": "50%",
            "rank": 19,
            "characters": ["ROB", "Lucas", "Pikachu"],
            "placings": [
                {
                    "tournament_id": 2,
                    "result": "13th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 20,
            "name": "Brian",
            "attendance": "50%",
            "rank": 20,
            "characters": ["Palutena"],
            "placings": [
                {
                    "tournament_id": 2,
                    "result": "13th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 21,
            "name": "Steven S",
            "attendance": "50%",
            "rank": 21,
            "characters": ["Sephiroth", "Pyra & Mythra"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "9th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 22,
            "name": "Ed",
            "attendance": "50%",
            "rank": 22,
            "characters": ["Ness"],
            "placings": [
                {
                    "tournament_id": 1,
                    "result": "9th",
                    "wins": "TBA (Ids in an array of other players)",
                    "losses": "TBA (Ids in an array of other players)"
                }
            ]
        },
        {
            "id": 23,
            "name": "Kevin N",
            "attendance": "0%",
            "rank": 23,
            "characters": ["Shulk"],
            "placings": [
            ]
        },
        {
            "id": 24,
            "name": "Trriton",
            "attendance": "0%",
            "rank": 24,
            "characters": ["Cloud"],
            "placings": [
            ]
        },
        {
            "id": 25,
            "name": "James F",
            "attendance": "0%",
            "rank": 25,
            "characters": ["Ness"],
            "placings": [
            ]
        },
        {
            "id": 26,
            "name": "Jay C",
            "attendance": "0%",
            "rank": 26,
            "characters": ["Ridley, Pichu"],
            "placings": [
            ]
        },
        {
            "id": 27,
            "name": "Matthew",
            "attendance": "0%",
            "rank": 27,
            "characters": ["Captain Falcon"],
            "placings": [
            ]
        },
    ]
}

export default smashObject
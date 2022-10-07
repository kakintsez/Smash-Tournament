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
            "participants": [1,2,4,7,14,15,16,17,18,21,22],
            "bracket": "https://i.imgur.com/NWqaSWT.png",
            "topEightImg": "",
            "recent": false
        },
        {
            "id": 2,
            "name": "Uprising",
            "date": "August 27th, 2022",
            "rank": "A",
            "entrants": 15,
            "participants": [1,2,3,4,5,6,7,8,9,10,14,15,17,19,20],
            "bracket": "https://i.imgur.com/us2xGNo.png",
            "topEightImg": "https://i.imgur.com/ULt3pkh.png",
            "recent": true
        },
        {
            "id": 3,
            "name": "Not So Casual",
            "date": "October 15th, 2022",
            "rank": "B",
            "entrants": 0,
            "participants": [],
            "topEightImg": "",
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
            "image": "https://i.imgur.com/25bEgqD.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 5,
                    "wins": [21, 15],
                    "losses": [14, 2]
                },
                2: {
                    "tournamentId": 2,
                    "placing": 1,
                    "wins": [7, 9, 4, 5, 2, 3, 3],
                    "losses": [6]
                }
            }
        },
        {
            "id": 2,
            "name": "Nick",
            "attendance": "100%",
            "rank": 2,
            "characters": ["Link", "Lucina", "Ganondorf"],
            "image": "https://i.imgur.com/vH9SHYA.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 1,
                    "wins": [17, 1, 7, 14, 4, 4],
                    "losses": [4]
                },
                2: {
                    "tournamentId": 2,
                    "placing": 3,
                    "wins": [20, 5, 4],
                    "losses": [3, 1]
                }
            }
        },
        {
            "id": 3,
            "name": "Alan",
            "attendance": "50%",
            "rank": 3,
            "characters": ["Lucina", "Zero Suit Samus", "Wolf"],
            "image": "https://i.imgur.com/RKAMDkW.png",
            "results": {
                2: {
                    "tournamentId": 2,
                    "placing": 2,
                    "wins": [14, 9, 6, 2],
                    "losses": [1, 1]
                }
            }
        },
        {
            "id": 4,
            "name": "Thomas",
            "attendance": "100%",
            "rank": 4,
            "characters": ["Pyra & Mythra", "Joker", "Shulk"],
            "image": "https://i.imgur.com/osHze6E.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 2,
                    "wins": [15, 2, 14],
                    "losses": [2, 2]
                },
                2: {
                    "tournamentId": 2,
                    "placing": 5,
                    "wins": [19, 15],
                    "losses": [2, 1]
                }
            }
        },
        {
            "id": 5,
            "name": "Rockin",
            "attendance": "50%",
            "rank": 5,
            "characters": ["Zelda"],
            "image": "https://i.imgur.com/9e5dVbw.png",
            "results": {
                2: {
                    "tournamentId": 2,
                    "placing": 4,
                    "wins": [17, 8, 10, 6],
                    "losses": [2, 1]
                }
            }
        },
        {
            "id": 6,
            "name": "Tony",
            "attendance": "50%",
            "rank": 6,
            "characters": ["Pikachu", "Lucina"],
            "image": "https://i.imgur.com/RkeJQXi.png",
            "results": {
                2: {
                    "tournamentId": 2,
                    "placing": 5,
                    "wins": [10, 1],
                    "losses": [3, 5]
                }
            }
        },
        {
            "id": 7,
            "name": "Julio",
            "attendance": "100%",
            "rank": 7,
            "characters": ["Lucas", "Lucina"],
            "image": "https://i.imgur.com/yzBaaeg.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 4,
                    "wins": [17, 18, 16],
                    "losses": [16, 2]
                },
                2: {
                    "tournamentId": 2,
                    "placing": 9,
                    "wins": [17],
                    "losses": [15, 1]
                }
            }
        },
        {
            "id": 8,
            "name": "Josh",
            "attendance": "50%",
            "rank": 13,
            "characters": ["Samus", "Greninja", "Sheik"],
            "image": "https://i.imgur.com/jZBzkF5.png",
            "results": {
                2: {
                    "tournamentId": 2,
                    "placing": 9,
                    "wins": [20],
                    "losses": [9, 5]
                }
            }
        },
        {
            "id": 9,
            "name": "William C",
            "attendance": "50%",
            "rank": 8,
            "characters": ["Wolf", "Joker"],
            "image": "https://i.imgur.com/PyRWucH.png",
            "results": {
                2: {
                    "tournamentId": 2,
                    "placing": 7,
                    "wins": [8, 14],
                    "losses": [3, 1]
                }
            }
        },
        {
            "id": 10,
            "name": "Kevin B",
            "attendance": "50%",
            "rank": 9,
            "characters": ["Captain Falcon"],
            "image": "https://i.imgur.com/fSSqRPT.png",
            "results": {
                2: {
                    "tournamentId": 2,
                    "placing": 7,
                    "wins": [15],
                    "losses": [6, 5]
                }
            }
        },
        {
            "id": 11,
            "name": "Destin",
            "attendance": "0%",
            "rank": 20,
            "characters": ["???"],
            "image": "",
            "results": {}
        },
        {
            "id": 12,
            "name": "Will P",
            "attendance": "0%",
            "rank": 21,
            "characters": ["Terry", "Cloud"],
            "image": "https://i.imgur.com/VzDx0Io.png",
            "results": {}
        },
        {
            "id": 13,
            "name": "Steven C",
            "attendance": "0%",
            "rank": 22,
            "characters": ["Link", "Snake", "Villager", "Falco"],
            "image": "https://i.imgur.com/ThleBHZ.png",
            "results": {}
        },
        {
            "id": 14,
            "name": "Michael R",
            "attendance": "100%",
            "rank": 10,
            "characters": ["Donkey Kong", "Ness", "Inkling", "Link"],
            "image": "https://i.imgur.com/6EPKBNO.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 3,
                    "wins": [18, 1, 16],
                    "losses": [4, 2]
                },
                2: {
                    "tournamentId": 2,
                    "placing": 9,
                    "wins": [19],
                    "losses": [3, 9]
                }
            }
        },
        {
            "id": 15,
            "name": "Kevin W",
            "attendance": "100%",
            "rank": 12,
            "characters": ["Bowser", "Snake"],
            "image": "https://i.imgur.com/VmqtuIP.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 7,
                    "wins": [21],
                    "losses": [4, 1]
                },
                2: {
                    "tournamentId": 2,
                    "placing": 9,
                    "wins": [7],
                    "losses": [4, 10]
                }
            }
        },
        {
            "id": 16,
            "name": "Joe",
            "attendance": "50%",
            "rank": 11,
            "characters": ["Fox", "Ness"],
            "image": "https://i.imgur.com/6ewewLz.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 5,
                    "wins": [22, 7],
                    "losses": [14, 7]
                }
            }
        },
        {
            "id": 17,
            "name": "James M",
            "attendance": "100%",
            "rank": 14,
            "characters": ["Samus", "Byleth", "Kirby"],
            "image": "https://i.imgur.com/SOmWK5H.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 9,
                    "wins": [],
                    "losses": [2, 7]
                },
                2: {
                    "tournamentId": 2,
                    "placing": 13,
                    "wins": [],
                    "losses": [5, 7]
                }
            }
        },
        {
            "id": 18,
            "name": "Alex W",
            "attendance": "50%",
            "rank": 15,
            "characters": ["Kazuya", "Luigi"],
            "image": "https://i.imgur.com/CQJgsuz.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 7,
                    "wins": [22],
                    "losses": [14, 7]
                }
            }
        },
        {
            "id": 19,
            "name": "Gabriel",
            "attendance": "50%",
            "rank": 16,
            "characters": ["ROB", "Lucas", "Pikachu"],
            "image": "https://i.imgur.com/8EWiWXp.png",
            "results": {
                2: {
                    "tournamentId": 2,
                    "placing": 13,
                    "wins": [],
                    "losses": [4, 14]
                }
            }
        },
        {
            "id": 20,
            "name": "Brian",
            "attendance": "50%",
            "rank": 17,
            "characters": ["Palutena"],
            "image": "https://i.imgur.com/ZjsAgdV.png",
            "results": {
                2: {
                    "tournamentId": 2,
                    "placing": 13,
                    "wins": [],
                    "losses": [2, 8]
                }
            }
        },
        {
            "id": 21,
            "name": "Steven S",
            "attendance": "50%",
            "rank": 18,
            "characters": ["Sephiroth", "Pyra & Mythra"],
            "image": "https://i.imgur.com/rPyV1ez.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 9,
                    "wins": [],
                    "losses": [15, 1]
                }
            }
        },
        {
            "id": 22,
            "name": "Ed",
            "attendance": "50%",
            "rank": 19,
            "characters": ["Ness"],
            "image": "https://i.imgur.com/hS9jJfJ.png",
            "results": {
                1: {
                    "tournamentId": 1,
                    "placing": 9,
                    "wins": [],
                    "losses": [16, 18]
                }
            }
        },
        {
            "id": 23,
            "name": "Kevin N",
            "attendance": "0%",
            "rank": 23,
            "characters": ["Shulk"],
            "image": "",
            "results": {}
        },
        {
            "id": 24,
            "name": "Trriton",
            "attendance": "0%",
            "rank": 24,
            "characters": ["Cloud"],
            "image": "https://i.imgur.com/3iUW9qz.png",
            "results": {}
        },
        {
            "id": 25,
            "name": "James F",
            "attendance": "0%",
            "rank": 25,
            "characters": ["Ness"],
            "image": "",
            "results": {}
        },
        {
            "id": 26,
            "name": "Jay C",
            "attendance": "0%",
            "rank": 26,
            "characters": ["Ridley, Pichu"],
            "image": "",
            "results": {}
        },
        {
            "id": 27,
            "name": "Matthew",
            "attendance": "0%",
            "rank": 27,
            "characters": ["Captain Falcon"],
            "image": "",
            "results": {}
        },
    ]
}

export default smashObject
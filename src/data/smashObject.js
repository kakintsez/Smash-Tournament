const smashObject = {
    "info": {
        "title": "https://i.imgur.com/sexFe8T.png",
        "artist": "https://www.deviantart.com/elevenzm/gallery/all?page=13",
    },
    "tournaments": [
        {
            "id": 1,
            "name": "The First",
            "date": "April 2nd 2022",
            "entrants": 11,
            "participants": [
                1
            ]
        },
        {
            "id": 2,
            "name": "Uprising",
            "date": "August 27th 2022",
            "entrants": 15,
            "top_eight_img": "https://i.imgur.com/ULt3pkh.png"
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
        }
    ]
}

export default smashObject
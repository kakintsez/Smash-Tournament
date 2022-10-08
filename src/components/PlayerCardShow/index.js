import { Route, Link, NavLink, useParams } from "react-router-dom";
import './PlayerCardShow.css';
import { useEffect } from 'react'
import PlayerShow from "../PlayerShow";
import { sortByRanking } from "../../util/functions";

const PlayerCardShow = ({ players, cardIndex, setCardIndex }) => {
    const { playerName } = useParams();
    const { rankListActivePlayers } = sortByRanking(players);
    const cardIndexArr = [];
    for (let i = 1; i <= rankListActivePlayers.length; i++) {
        cardIndexArr.push(i);
    }
    
    // const [cardIndex, setCardIndex] = useState(1);

    const handleClickLeft = (e) => {
        e.preventDefault();
        if (cardIndex === 1) return;
        setCardIndex(cardIndex - 1);
    }

    const handleClickRight = (e) => {
        e.preventDefault();
        if (cardIndex === cardIndexArr.length) return;
        setCardIndex(cardIndex + 1);
    }

    // debugger
    // if (playerName) {
    //     let selectedPlayer = null;
    //     rankListActivePlayers.forEach(player => {
    //         if (playerName === player.name) {
    //             selectedPlayer = player
    //         }
    //     })
    //     setCardIndex(selectedPlayer.rank)
    // }

    useEffect(() => {
        let selectedPlayer = null;
        rankListActivePlayers.forEach(player => {
            if (playerName === player.name) {
                selectedPlayer = player
            }
        })
        setCardIndex(selectedPlayer.rank)
    }, [playerName])

    let playerList = rankListActivePlayers.map(player => {
        let frontCard = null;
        let secondCard = null;
        let thirdCard = null;
        let fourthCard = null;
        if (cardIndex === player.rank) {
            frontCard = (
                <div className="players-on-cards-link">
                    <Link
                        to={`/Smash-Tournament/players/${player.name}`}
                        key={player.id}>
                            <div className="players-on-cards">
                                <div>
                                    <div className="card-title">{player.name}</div>
                                    <img src={player.image} />
                                </div>
                            </div>
                    </Link>
                </div>
            )
        } else if (cardIndex === player.rank-1) {
            secondCard = (
                <div className="second-card">
                    <div className="players-on-cards-link">
                        <Link
                            to={`/Smash-Tournament/players/${player.name}`}
                            key={player.id}>
                                <div className="players-on-cards">
                                    <div>{player.name}</div>
                                    <img src={player.image} />
                                </div>
                        </Link>
                    </div>
                </div>
            )
        } else if (cardIndex === player.rank-2) {
            thirdCard = (
                <div className="third-card">
                    hi
                </div>
            )
        } else if (cardIndex === player.rank-3) {
            fourthCard = (
                <div className="fourth-card">
                    hi
                </div>
            )
        }
        // debugger

        return (
            <div className="all-player-cards">
                <span>{frontCard}</span>
                <span>{secondCard}</span>
                <span>{thirdCard}</span>
                <span>{fourthCard}</span>
            </div>
        )
    })

    // debugger

    return (
        <div className="players">
            <ul className="players-cards">
                <button onClick={handleClickLeft} className="left-click">{"<-"}</button>
                <div className={`player-card-scroll`}>
                    {playerList}
                </div>
                <button onClick={handleClickRight} className="right-click">{"->"}</button>
            </ul>
            <Route path="/Smash-Tournament/players/:playerName">
                <PlayerShow players={players} />
            </Route>
        </div>
    )
}

export default PlayerCardShow;
import { Route, Link, NavLink, useParams } from "react-router-dom";
import './PlayerNavBetter.css';
import { useState } from 'react'
import PlayerShow from "../PlayerShow";
import { sortByRanking } from "../../util/functions";

const PlayerNavBetter = ({ players }) => {
    const { rankListActivePlayers } = sortByRanking(players);
    const cardIndexArr = [];
    for (let i = 1; i <= rankListActivePlayers.length; i++) {
        cardIndexArr.push(i);
    }
    
    const [cardIndex, setCardIndex] = useState(1);

    const handleClickLeft = (e) => {
        e.preventDefault();
        if (cardIndex === 1) return;
        setCardIndex(cardIndex - 1);
    }

    const handleClickRight = (e) => {
        e.preventDefault();
        if (cardIndex === players.length) return;
        setCardIndex(cardIndex + 1);
    }

    let playerScrollClass = null;
    // if (scrollBar[cardIndex] === 0) {
    //     playerScrollClass = "scroll-direction-1"
    // } else if (scrollBar[cardIndex] === 1) {
    //     playerScrollClass = "scroll-direction-2"
    // } else if (scrollBar[cardIndex] === 2) {
    //     playerScrollClass = "scroll-direction-3"
    // }

    let playerList = rankListActivePlayers.map(player => {
        let frontCard = null;
        let secondCard = null;
        let thirdCard = null;
        let fourthCard = null;
        if (cardIndex === player.rank) {
            frontCard = (
                <div className="players-on-nav-link">
                    <Link
                        to={`/Smash-Tournament/players/${player.name}`}
                        key={player.id}>
                            <p className="players-on-nav">
                                <div>{player.name}</div>
                                <img src={player.image} />
                            </p>
                    </Link>
                </div>
            )
        } else if (cardIndex === player.rank-1) {
            secondCard = (
                <div className="second-card">
                    <div className="players-on-nav-link">
                        <Link
                            to={`/Smash-Tournament/players/${player.name}`}
                            key={player.id}>
                                <p className="players-on-nav">
                                    <div>{player.name}</div>
                                    <img src={player.image} />
                                </p>
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

        return (
            <div className="all-player-cards">
                <span>{frontCard}</span>
                <span>{secondCard}</span>
                <span>{thirdCard}</span>
                <span>{fourthCard}</span>
            </div>
        )
    })

    return (
        <div className="players">
            <h4>Sort Option Coming Soon</h4>
            <ul className="players-nav">
                <button onClick={handleClickLeft} className="left-scroll">{"<-"}</button>
                <div className={`player-nav-scroll ${playerScrollClass}`}>
                    {playerList}
                </div>
                <button onClick={handleClickRight} className="right-scroll">{"->"}</button>
            </ul>
            <Route path="/Smash-Tournament/players/:playerName">
                <PlayerShow players={players} />
            </Route>
        </div>
    )
}

export default PlayerNavBetter;
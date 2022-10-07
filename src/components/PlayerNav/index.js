import { Route, Link, NavLink, useParams } from "react-router-dom";
import './PlayerNav.css';
import { useState } from 'react'
import PlayerShow from "../PlayerShow";
import { sortByRanking } from "../../util/functions";

const PlayerNav = ({ players }) => {
    const scrollBar = [0,1,2,3]
    const [scrollDirection, setScrollDirection] = useState(0);

    const handleScrollClickLeft = (e) => {
        e.preventDefault();
        if (setScrollDirection === 0) return;
        setScrollDirection(scrollDirection - 1);
    }

    const handleScrollClickRight = (e) => {
        e.preventDefault();
        if (setScrollDirection === 3) return;
        setScrollDirection(scrollDirection + 1);
    }

    console.log(scrollDirection)

    let playerScrollClass = "player-nav-scroll-left"

    const { rankList} = sortByRanking(players);

    let playerList = rankList.map(player => {
        if (Object.values(player.results).length === 0) return null

        return (
            <Link
                to={`/Smash-Tournament/players/${player.name}`}
                key={player.id}>
                    <p className="players-on-nav">
                        {player.name}
                        <img src={player.image} />
                    </p>
            </Link>
        )
    })

    return (
        <div className="players">
            <h4>Sort Option Coming Soon</h4>
            <ul className="players-nav">
                <button onClick={handleScrollClickLeft} className="scroll-button left">{"<-"}</button>
                <div className="player-nav-scroll">
                    {playerList}
                </div>
                <button onClick={handleScrollClickRight} className="scroll-button right">{"->"}</button>
            </ul>
            <Route path="/Smash-Tournament/players/:playerName">
                <PlayerShow players={players} />
            </Route>
        </div>
    )
}

export default PlayerNav;
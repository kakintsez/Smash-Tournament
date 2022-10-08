import { Route, Link, NavLink, useParams } from "react-router-dom";
import './PlayerNav.css';
import { useState } from 'react'
import PlayerShow from "../PlayerShow";
import { sortByRanking } from "../../util/functions";

const PlayerNav = ({ players }) => {
    const scrollBar = [0,1,2]
    const [scrollDirection, setScrollDirection] = useState(0);
    // console.log(scrollDirection)

    const handleScrollClickLeft = (e) => {
        e.preventDefault();
        if (scrollDirection === 0) return;
        setScrollDirection(scrollDirection - 1);
    }

    const handleScrollClickRight = (e) => {
        e.preventDefault();
        if (scrollDirection === 2) return;
        setScrollDirection(scrollDirection + 1);
    }

    let playerScrollClass = null;
    if (scrollBar[scrollDirection] === 0) {
        playerScrollClass = "scroll-direction-1"
    } else if (scrollBar[scrollDirection] === 1) {
        playerScrollClass = "scroll-direction-2"
    } else if (scrollBar[scrollDirection] === 2) {
        playerScrollClass = "scroll-direction-3"
    }

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
                <button onClick={handleScrollClickLeft} className="left-scroll">{"<-"}</button>
                <div className={`player-nav-scroll ${playerScrollClass}`}>
                    {playerList}
                </div>
                <button onClick={handleScrollClickRight} className="right-scroll">{"->"}</button>
            </ul>
            <Route path="/Smash-Tournament/players/:playerName">
                <PlayerShow players={players} />
            </Route>
        </div>
    )
}

export default PlayerNav;
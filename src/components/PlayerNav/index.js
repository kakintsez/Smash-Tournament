import { Route, Link, NavLink, useParams } from "react-router-dom";
import './PlayerNav.css';
import { useState } from 'react'
import { sortByRanking } from "../../util/functions";

const PlayerNav = ({ players }) => {
    const scrollBar = [0,1,2]
    const [scrollDirection, setScrollDirection] = useState(0);

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

    const { rankListActivePlayers } = sortByRanking(players);

    let playerList = rankListActivePlayers.map(player => {
        if (Object.values(player.results).length === 0) return null

        return (
            <div className="players-on-nav-link">
                <Link
                    to={`/Smash-Tournament/players/${player.name}`}
                    key={player.id}>
                        <div className="players-on-nav">
                            <div>{player.name}</div>
                            <img src={player.image} />
                        </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="players">
            {/* <h4>Sort Option Coming Soon</h4> */}
            <ul className="players-nav">
                <button onClick={handleScrollClickLeft} className="left-scroll">{"<"}</button>
                <div className={`player-nav-scroll ${playerScrollClass}`}>
                    {playerList}
                </div>
                <button onClick={handleScrollClickRight} className="right-scroll">{">"}</button>
            </ul>
        </div>
    )
}

export default PlayerNav;
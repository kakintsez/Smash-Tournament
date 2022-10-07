import { Route, Link, NavLink, useParams } from "react-router-dom";
import './PlayerNav.css';
import PlayerShow from "../PlayerShow";

const PlayerNav = ({ players }) => {
    let playerList = players.map(player => {
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
        <div className="">
            <h1>Sort Option Coming Soon</h1>
            <ul className="players-nav">
                {playerList}
            </ul>
            <Route path="/Smash-Tournament/players/:playerName">
                <PlayerShow players={players} />
            </Route>
        </div>
    )
}

export default PlayerNav;
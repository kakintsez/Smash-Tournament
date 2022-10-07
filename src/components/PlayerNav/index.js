import { Route, Link, NavLink, useParams } from "react-router-dom";
import './PlayerNav.css';
import PlayerShow from "../PlayerShow";

const PlayerNav = ({ players, tournaments }) => {
    let playerList = players.map(player => {
        return (
            <Link
                className=""
                to={`/Smash-Tournament/players/${player.name}`}
                key={player.id}>
                    {player.name}
            </Link>
        )
    })

    return (
        <div className="">
            <h1>Sort Option Coming Soon</h1>
            <ul className="">
                {playerList}
            </ul>
            <Route path="/Smash-Tournament/players/:playerName">
                <PlayerShow players={players} tournaments={tournaments} />
            </Route>
        </div>
    )
}

export default PlayerNav;
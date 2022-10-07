import { Route, Link, NavLink, useParams } from "react-router-dom";
import './PlayerNav.css';
import PlayerShow from "../PlayerShow";
import { sortByRanking } from "../../util/functions";

const PlayerNav = ({ players }) => {
    const { rankList} = sortByRanking(players)

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
                <div className="player-nav-scroll">
                    {playerList}
                </div>
            </ul>
            <Route path="/Smash-Tournament/players/:playerName">
                <PlayerShow players={players} />
            </Route>
        </div>
    )
}

export default PlayerNav;
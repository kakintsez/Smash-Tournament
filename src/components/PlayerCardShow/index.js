import { Route, Link, NavLink, useParams } from "react-router-dom";
import './PlayerCardShow.css';
import { useEffect } from 'react'
import PlayerShow from "../PlayerShow";
import { sortByRanking } from "../../util/functions";

const PlayerCardShow = ({ players, setCardIndex, playerList, handleClickRight, handleClickLeft }) => {
    const { playerName } = useParams();
    const { rankListActivePlayers } = sortByRanking(players);

    useEffect(() => {
        let selectedPlayer = null;
        rankListActivePlayers.forEach(player => {
            if (playerName === player.name) {
                selectedPlayer = player
            }
        })
        setCardIndex(selectedPlayer.rank)
    }, [playerName])

    return (
        <div className="players">
            <ul className="players-cards">
                <button onClick={handleClickLeft} className="left-click">{"<"}</button>
                <div className={`player-card-scroll`}>
                    {playerList}
                </div>
                <button onClick={handleClickRight} className="right-click">{">"}</button>
            </ul>
            <Route path="/Smash-Tournament/players/:playerName">
                <PlayerShow players={players} />
            </Route>
        </div>
    )
}

export default PlayerCardShow;
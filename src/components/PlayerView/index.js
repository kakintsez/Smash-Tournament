import { Link, NavLink, useParams } from "react-router-dom";
import './PlayerView.css';
import PlayerShow from "../PlayerShow";

const PlayerView = ({ players }) => {
    const { playerName } = useParams();
    let showPlayer = null;
    players.forEach(player => {
    if (player.name === playerName) showPlayer = player
    })

    return (
        <div>
            <PlayerShow player={showPlayer}/>
        </div>
    )
}

export default PlayerView;
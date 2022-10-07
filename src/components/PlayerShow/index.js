import { Link, NavLink, useParams } from "react-router-dom";
import './PlayerShow.css';

const PlayerShow = ({ player }) => {

    return (
        <div>
            <h1>Hi from {player.name}</h1>
        </div>
    )
}

export default PlayerShow;
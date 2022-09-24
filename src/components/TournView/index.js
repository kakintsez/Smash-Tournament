import { NavLink, useParams } from "react-router-dom";
import './TournView.css';

const TournView = ({ tournaments }) => {
    const { tournamentId } = useParams();
    const tournament = tournaments.find(tournament => tournament.id === parseInt(tournamentId));

    return (
        <div className="tourn-view">
            <h1>Hello from TournView</h1>
        </div>
    )
}

export default TournView;
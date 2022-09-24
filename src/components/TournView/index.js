import { NavLink, useParams } from "react-router-dom";
import './TournView.css';

const TournView = ({ players, tournaments }) => {
    const { tournamentId } = useParams();
    // Find the tournament of this tournament show page
    const tournament = tournaments.find(tournament => tournament.id === parseInt(tournamentId));
    // Find the players of this tournament
    const playersArr = players.filter(player => tournament.participants.includes(player.id));
    // Sorting the players by results
    playersArr.sort((a, b) => a.results[tournament.id].placing - b.results[tournament.id].placing)
    // Get list of all players with their name and results
    const playersList = playersArr.map(player => {
        let result = player.results[tournament.id]
        let placing_suffix = "th"
        if (result.placing === 1) {
            placing_suffix = "st"
        } else if (result.placing === 2) {
            placing_suffix = "nd"
        } else if (result.placing === 3) {
            placing_suffix = "rd"
        }
        return ( <li key={player.id} className="player-info">
            <span className="player-name">{player.name}</span>
            <div className="results-list">
                <h4>Results:</h4>
                <span>Placing: {result.placing}{placing_suffix}</span>
                <span>Wins: {result.wins}</span>
                <span>Losses: {result.losses}</span>
            </div>
            <br/>
        </li> )
    })
    // debugger
    // playersList.sort((a, b) => a.result[tournament.id].placing - b.result[tournament.id].placing)
    // debugger
    //     debugger
    //     const a_placing = a.results[tournament.id];
    //     const b_placing = b.results[tournament.id];
    //     if (a_placing < b_placing) {
    //         return -1;
    //     } else if (a_placing > b_placing) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // })

    return (
        <div className="tourn-view">
            <h2>Tournament #{tournament.id}: {tournament.name}</h2>
            <h3>Date of Tournament: {tournament.date}</h3>
            <h4>Rank: {tournament.rank}</h4>
            <h4>entrants: {tournament.entrants}</h4>
            <h2>Players:</h2>
            <ul>
                {playersList}
            </ul>
        </div>
    )
}

export default TournView;
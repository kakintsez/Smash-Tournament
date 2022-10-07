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

        let wins = result.wins.map(id => players[id].name)
        let losses = result.losses.map(id => players[id].name)
        return ( <li key={player.id} className="player-info">
            <span className="player-name">{player.name}</span>
            <div className="results-list">
                <h4>Results:</h4>
                <span>Placing: {result.placing}{placing_suffix}</span>
                <span>Wins: {wins.join(', ')}</span>
                <span>Losses: {losses.join(', ')}</span>
            </div>
            <br/>
        </li> )
    })

    return (
        <div className="tourn-view">
            <h2>Tournament #{tournament.id}: {tournament.name}</h2>
            <h3>Date of Tournament: {tournament.date}</h3>
            <h4>Rank: {tournament.rank}</h4>
            <h4>Entrants: {tournament.entrants}</h4>
            <h3>Bracket:</h3>
            <img className="bracket-image" src={tournament.bracket}/>
            <h2>Players:</h2>
            <ul>
                {playersList}
            </ul>
        </div>
    )
}

export default TournView;
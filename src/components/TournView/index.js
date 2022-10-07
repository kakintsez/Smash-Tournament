import { NavLink, useParams } from "react-router-dom";
import './TournView.css';
import {
    findTournament,
    findPlayers,
    findMatchResults,
    placingSuffix,
    sortByPlacing }
from "../../util/functions";

const TournView = ({ players, tournaments }) => {
    const { tournamentId } = useParams();
    const { tournament } = findTournament(tournaments, tournamentId)
    const { playersArr } = findPlayers(players, tournament)
    sortByPlacing(playersArr, tournament)

    // Get list of all players with their name and results
    const playersList = playersArr.map(player => {
        let result = player.results[tournament.id]
        let { suffix } = placingSuffix(result.placing)
        const { wins, losses } = findMatchResults(result, players)

        return ( <li key={player.id} className="player-info">
            <span className="player-name">{player.name} </span>
            <div className="results-list">
                <h4>Results:</h4>
                <span>Placing: {result.placing}{suffix} </span>
                <span>Wins: {wins.join(', ')} </span>
                <span>Losses: {losses.join(', ')} </span>
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
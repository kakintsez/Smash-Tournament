import { NavLink, Link, useParams } from "react-router-dom";
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
    const { tournament } = findTournament(tournamentId)
    const { playersArr } = findPlayers(tournament)
    sortByPlacing(playersArr, tournament)

    // Get list of all players with their name and results
    const playersList = playersArr.map(player => {
        let result = player.results[tournament.id]
        let { suffix } = placingSuffix(result.placing)
        const { wins, losses } = findMatchResults(result, players)

        return (
            <Link to={`/Smash-Tournament/players/${player.name}`} key={player.id} >
                <li className="player-info">
                    <span className="player-name">{player.name} </span>
                    <div className="results-list">
                        <h4>Results:</h4>
                        <span>Placing: {result.placing}{suffix} </span>
                        <span>Wins: {wins.join(', ')} </span>
                        <span>Losses: {losses.join(', ')} </span>
                    </div>
                    <br/>
                </li>
            </Link>
        )
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
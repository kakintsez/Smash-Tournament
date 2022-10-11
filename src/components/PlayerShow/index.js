import { Link, NavLink, useParams } from "react-router-dom";
import './PlayerShow.css';
import { findTournament, findMatchResults, placingSuffix } from "../../util/functions";

const PlayerShow = ({ players }) => {
    const { playerName } = useParams();
    let selectedPlayer = null;
    players.forEach(player => {
    if (player.name === playerName) selectedPlayer = player
    })

    let results = Object.values(selectedPlayer.results).map(result => {
        let { suffix } = placingSuffix(result.placing)
        const { wins, losses } = findMatchResults(result)
        const { tournament } = findTournament(result.tournamentId)

        return (
            <li key={result.id} className="" >
                <p>Tournament: {tournament.name} </p>
                <p>Placing: {result.placing}{suffix} </p>
                <p>Wins: {wins.join(", ")} </p>
                <p>Losses: {losses.join(", ")} </p>
            </li>
        )
    })

    if (!selectedPlayer) return <h2>This player does not exist</h2>

    return (
        <div className="player-show-info">
            <h2>{selectedPlayer.name}</h2>
            <p>Rank: {selectedPlayer.rank}</p>
            <p>Characters: {selectedPlayer.characters.join(", ")}</p>
            <img src={selectedPlayer.showImage} />
            <p>Attendance: {selectedPlayer.attendance}</p>
            <ul>Results: {results}</ul>
        </div>
    )
}

export default PlayerShow;
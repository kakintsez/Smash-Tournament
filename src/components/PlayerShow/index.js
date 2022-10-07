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
                <h2>Tournament: {tournament.name} </h2>
                <h2>Placing: {result.placing}{suffix} </h2>
                <h2>Wins: {wins.join(", ")} </h2>
                <h2>Losses: {losses.join(", ")} </h2>
            </li>
        )
    })

    if (!selectedPlayer) return <h1>This player does not exist</h1>

    return (
        <div>
            <h1>{selectedPlayer.name}</h1>
            <h2>Rank: {selectedPlayer.rank}</h2>
            <h2>Characters: {selectedPlayer.characters.join(", ")}</h2>
            <img src={selectedPlayer.image} />
            <h2>Attendance: {selectedPlayer.attendance}</h2>
            <h2>Results: {results}</h2>
        </div>
    )
}

export default PlayerShow;
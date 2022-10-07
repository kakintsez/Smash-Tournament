import smashObject from "../data/smashObject";

const tournaments = smashObject.tournaments;
const players = smashObject.players;

// Find the tournament by tournamentId
export const findTournament = (tournamentId) => {
    const tournament = tournaments.find(tournament =>
        tournament.id === parseInt(tournamentId));
    return { tournament }
}

// Find players by tournament entrants array
export const findPlayers = (tournament) => {
    const playersArr = players.filter(player =>
        tournament.participants.includes(player.id));
    return { playersArr }
}

// Get all the players that you won/lost to in this tournament in an array
export const findMatchResults = (result) => {
    let wins = result.wins.map(id => players[id].name)
    let losses = result.losses.map(id => players[id].name)

    return { wins, losses }
}

// Get the suffix of the placing
export const placingSuffix = (placing) => {
    let suffix = "th"
    if (placing === 1) {
        suffix = "st"
    } else if (placing === 2) {
        suffix = "nd"
    } else if (placing === 3) {
        suffix = "rd"
    }
    return { suffix };
}

// SORTING

// Sort by placings in a tournament
export const sortByPlacing = (playersArr, tournament) => {
    playersArr.sort((a, b) =>
        a.results[tournament.id].placing - b.results[tournament.id].placing)
}

// Sort by ranking
export const sortByRanking = (playersArr) => {
    const rankList = playersArr.sort((a, b) => a.rank - b.rank)
    return { rankList }
}
import { NavLink } from "react-router-dom";
import './TournNav.css';

const TournNav = ({ tournaments }) => {
    const tournamentList = tournaments.map(tournament => (
        <li key={tournament.id}>
            <NavLink to={`/tournaments/${tournament.id}`}>
            {tournament.name} - {tournament.date}
            </NavLink>
        </li>
    ))

    return (
        <nav>
          <h1>Tournaments</h1>
          <NavLink to="/" exact>Home</NavLink>
          <ul>
            {tournamentList}
          </ul>
        </nav>
      )
}

export default TournNav;
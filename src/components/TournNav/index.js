import { NavLink } from "react-router-dom";
import './TournNav.css';

const TournNav = ({ title, tournaments }) => {
    const tournamentList = tournaments.map(tournament => (
        <li key={tournament.id}>
            <NavLink to={`/Smash-Tournament/tournaments/${tournament.id}`}>
            {tournament.name} - {tournament.date}
            </NavLink>
        </li>
    ))

    return (
        <nav>
            <div className="top-logo">
                <img className="smash-logo" src={title} />
            </div>
            <div className="navbar">
                <h1>Navigation</h1>
                <ul>
                    <li><NavLink to="/Smash-Tournament/" exact>Home</NavLink></li>
                    <li><NavLink to="/Smash-Tournament/players" exact>Players</NavLink></li>
                    {tournamentList}
                </ul>
            </div>
        </nav>
      )
}

export default TournNav;
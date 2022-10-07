import { NavLink } from "react-router-dom";
import './TournNav.css';

const TournNav = ({ title, tournaments }) => {
    const tournamentList = tournaments.map(tournament => (
        <li key={tournament.id} className="navbar-link">
            <NavLink to={`/Smash-Tournament/tournaments/${tournament.id}`}>
                {tournament.name} - {tournament.date}
            </NavLink>
        </li>
    ))

    return (
        <nav className="side-bar">
            <div className="navbar-whole">
                <div className="top-logo">
                    <img className="smash-logo" src={title} />
                </div>
                <div className="navbar">
                    <h1>Navigation</h1>
                    <ul>
                        <li className="navbar-link">
                            <NavLink to="/Smash-Tournament/" exact>
                                Home
                            </NavLink>
                        </li>
                        <li className="navbar-link">
                            <NavLink to="/Smash-Tournament/players" exact>
                                Players
                            </NavLink>
                        </li>
                        {tournamentList}
                    </ul>
                </div>
            </div>
            <div className="side-bar-line"></div>
        </nav>
      )
}

export default TournNav;
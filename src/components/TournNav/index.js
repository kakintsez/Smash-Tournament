import { NavLink } from "react-router-dom";
import './TournNav.css';

const TournNav = ({ title, tournaments }) => {
    const tournamentList = tournaments.map(tournament => (
        <NavLink to={`/Smash-Tournament/tournaments/${tournament.id}`} key={tournament.id}>
            <li className="navbar-link">
                {tournament.name} - {tournament.date}
            </li>
        </NavLink>
    ))

    return (
        <div className="fixed">
        <nav className="side-bar">
            <div className="navbar-whole">
                <div className="top-logo">
                    <img className="smash-logo" src={title} />
                </div>
                <div className="navbar">
                    <h1>Navigation</h1>
                    <ul className="navbar-buttons">
                        <NavLink to="/Smash-Tournament/" exact>
                            <li className="navbar-link">
                                Home
                            </li>
                        </NavLink>
                        <NavLink to="/Smash-Tournament/players" exact>
                            <li className="navbar-link">
                                Players
                            </li>
                        </NavLink>
                        {tournamentList}
                    </ul>
                </div>
            </div>
            <div className="side-bar-line"></div>
        </nav>
        </div>
      )
}

export default TournNav;
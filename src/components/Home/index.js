import { Link, NavLink, useParams } from "react-router-dom";
import './Home.css';

const Home = ({ title, tournaments }) => {
    // Finding most recent tournament that isn't upcoming
    // debugger
    const recentTourn = tournaments.find(tournament => tournament.recent === true)
    const recentLogoURL = recentTourn.topEightImg;
    return (
        <div className="home">
            <div className="home-top">
                <h1>Welcome to Kakintse's Smash Tournaments</h1>
                {/* <img className="smash-logo" src={title} /> */}
            </div>
            <Link className="home-logo" to={`/Smash-Tournament/tournaments/${2}`}>
                <img
                    className="recent-tourn-logo"
                    src={recentLogoURL}
                    alt={recentTourn.date} />
            </Link>
        </div>
    )
}

export default Home;
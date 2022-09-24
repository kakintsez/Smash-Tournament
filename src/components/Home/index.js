import { Link, NavLink, useParams } from "react-router-dom";
import './Home.css';

const Home = ({ tournaments }) => {
    // Finding most recent tournament that isn't upcoming
    // debugger
    const recentTourn = tournaments.find(tournament => tournament.recent === true)
    const recentLogoURL = recentTourn.top_eight_img;
    return (
        <div className="home">
            <h1>Welcome to Kakintse's Smash Tournaments</h1>
            <Link className="image-tile" to={`/tournaments/${2}`}>
                <img
                    className="home-logo"
                    src={recentLogoURL}
                    alt={recentTourn.date} />
            </Link>
        </div>
    )
}

export default Home;
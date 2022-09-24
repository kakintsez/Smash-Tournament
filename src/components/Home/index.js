import { Link, NavLink, useParams } from "react-router-dom";
import './Home.css';

const Home = ({ tournaments }) => {
    const last = tournaments.length-1
    const recentTourn = tournaments[last];
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
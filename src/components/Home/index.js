import { NavLink } from "react-router-dom";
import './Home.css';

const Home = ({ tournaments }) => {
    const recentLogoURL = tournaments.august_twentytwo.top_eight_img
    return (
        <div className="home">
            <h1>Welcome to Kakintse's Smash Tournaments</h1>
            <Link className="image-tile" to={`/tournaments/${tournamentId}`}>
                <img src={art.images[0].baseimageurl} alt={art.title} />
            </Link>
        </div>
    )
}

export default Home;
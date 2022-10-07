import smashObject from "./data/smashObject";
import TournNav from "./components/TournNav";
import TournView from "./components/TournView";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const tournaments = smashObject.tournaments;
  const players = smashObject.players;

  return (
    <div className="whole-app">
      <TournNav
          title={smashObject.info.title}
          tournaments={tournaments}/>
      <main>
        <Switch>
          <Route path="/Smash-Tournament/" exact>
            <Home
                title={smashObject.info.title}
                tournaments={tournaments} />
          </Route>
          <Route path="/Smash-Tournament/tournaments/:tournamentId">
            <TournView players={players} tournaments={tournaments} />
          </Route>
          <Route path="/Smash-Tournament/players">
            {/* <PlayerNav /> */}
            <h2>Players not here yet</h2>
            <h3>Sort option - Rank</h3>
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// import { Switch, Route } from 'react-router-dom';
// import GalleryNavigation from './components/GalleryNavigation';
// import GalleryView from './components/GalleryView';
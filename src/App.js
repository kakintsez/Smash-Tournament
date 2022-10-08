import smashObject from "./data/smashObject";
import TournNav from "./components/TournNav";
import TournView from "./components/TournView";
import PlayerNav from "./components/PlayerNav";
import PlayerNavBetter from "./components/PlayerNavBetter";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const tournaments = smashObject.tournaments;
  const players = smashObject.players;

  return (
    <div className="whole-app">
      <div className="sticky-navbar">
      <TournNav
          title={smashObject.info.title}
          tournaments={tournaments}/>
      </div>
      <main className="main-app">
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
            {/* <PlayerNav players={players}/> */}
            <PlayerNavBetter players={players}/>
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
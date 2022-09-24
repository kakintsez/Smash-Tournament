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
          <Route path="/" exact>
            <Home
                title={smashObject.info.title}
                tournaments={tournaments} />
          </Route>
          <Route path="/tournaments/:tournamentId">
            <TournView tournaments={tournaments} />
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
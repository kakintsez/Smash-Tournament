import smashObject from "./data/smashObject";
import TournNav from "./components/TournNav";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="whole-app">
      <TournNav
        title={smashObject.info.title}
        tournaments={smashObject.tournaments}/>
      <Switch>
        <Route path="/" exact>
          <Home tournaments={smashObject.tournaments}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// import { Switch, Route } from 'react-router-dom';
// import GalleryNavigation from './components/GalleryNavigation';
// import GalleryView from './components/GalleryView';
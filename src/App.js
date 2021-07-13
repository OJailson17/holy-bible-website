import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BiblePage } from './pages/Bible/BiblePage';
import { Home } from "./pages/Home/Home";
import { NewTestament } from './pages/New Testament/NewTestament';
import { Topics } from './pages/Topics/Topics';
import { VersePage } from './pages/VersePage/VersePage';
import { WordOfDay } from './pages/WordOfDay/WordOfDay';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/bible" component={BiblePage} />
    <Route exact path="/bible/verse" component={VersePage} />
    <Route exact path="/wordofday" component={WordOfDay} />
    <Route exact path="/topics" component={Topics} />
    <Route exact path="/newtestament" component={NewTestament} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;

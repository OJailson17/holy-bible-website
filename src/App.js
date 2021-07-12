import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BiblePage } from './pages/Bible/BiblePage';
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/bible" component={BiblePage} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;

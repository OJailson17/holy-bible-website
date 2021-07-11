import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/" component={Home}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

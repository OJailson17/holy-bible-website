import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BiblePage } from './pages/Bible/BiblePage';
import { FavoriteVerse } from './pages/FavoriteVerse/FavoriteVerse';
import { Home } from "./pages/Home/Home";
import { NewTestament } from './pages/NewTestament/NewTestament';
import { OldTestament } from './pages/OldTestament/OldTestament';
import { Topics } from './pages/Topics/Topics';
import { VersePage } from './pages/VersePage/VersePage';
import { VerseTopic } from './pages/VerseTopic/VerseTopic';
import { WordOfDay } from './pages/WordOfDay/WordOfDay';


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/biblia" component={BiblePage} />
    <Route exact path="/biblia/livro/:book/capitulo/:chapterNum/versiculo/:verseNum/" component={VersePage} />
    <Route exact path="/palavradodia" component={WordOfDay} />
    <Route exact path="/versiculosparavida" component={Topics} />
    <Route exact path="/versiculosparavida/versiculo" component={VerseTopic} />
    <Route exact path="/novotestamento" component={NewTestament} />
    <Route exact path="/velhotestamento" component={OldTestament} />
    <Route exact path="/favoritos" component={FavoriteVerse} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;

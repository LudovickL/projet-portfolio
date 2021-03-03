import './App.scss';
import LienSociaux from './components/LienSociaux';
import Acceuil from './pages/Acceuil';
import NavEcran from './components/NavEcran';
import Infos from './pages/Infos';
import { Switch, Route } from 'react-router-dom';
import Projets from './pages/Projets';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        <NavEcran></NavEcran>
        <div className="App-section">
            <Switch>
              <Route path="/" component={Acceuil} exact/>
              <Route path="/a-propos" exact>
                <Infos />
              </Route>
              <Route path="/projets" exact>
                <Projets />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
            </Switch>
        </div>
        <LienSociaux></LienSociaux>
    </div>
  );
}

export default App;

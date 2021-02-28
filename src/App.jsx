import './App.scss';
import LienSociaux from './components/LienSociaux';
import Acceuil from './pages/Acceuil';
import NavEcran from './components/NavEcran';

function App() {
  return (
    <div className="App">
        <NavEcran></NavEcran>
        <div className="App-section">
            <Acceuil></Acceuil>
        </div>
        <LienSociaux></LienSociaux>
    </div>
  );
}

export default App;

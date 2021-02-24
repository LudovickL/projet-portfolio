import './App.scss';
import LienSociaux from './components/LienSociaux';
import LogoCentre from './components/LogoCentre';
import NavEcran from './components/NavEcran';

function App() {
  return (
    <div className="App">
      <NavEcran></NavEcran>
      <div className="App-section">
          <LogoCentre></LogoCentre>
      </div>
      <LienSociaux></LienSociaux>
    </div>
  );
}

export default App;

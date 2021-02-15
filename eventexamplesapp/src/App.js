import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Welcome from './Components/Welcome';
import CurrencyCoverter from './Components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <div style={{marginLeft: '10px'}}>
        <Counter/>
        <Welcome/>
        <CurrencyCoverter/>
      </div>
    </div>
  );
}

export default App;

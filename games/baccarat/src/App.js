import logo from './logo.svg';
import './App.css';

function App() {
  const a = 0;
  if (a == 1) return null;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Baccarat
        </a>

      </header>
    </div>
  );
}

export default App;

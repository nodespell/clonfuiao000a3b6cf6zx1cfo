import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
  <iframe
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; screen-wake-lock"
    src="https://stagetimer.io/r/DEMO0001/"
  />
</div>
        <div style={{ color: 'gray' }}>Deployed with NodeSpell</div>
      </header>
    </div>
  );
}

export default App;
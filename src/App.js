import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
  <div
    style={{
      color: 'red'
    }}
  >
    First node spell app done. WOW
  </div>
</div>
        <div style={{ color: 'gray' }}>Deployed with NodeSpell</div>
      </header>
    </div>
  );
}

export default App;
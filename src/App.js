import logo from "./assets/cookrlogo.png";
import cross from "./assets/cross.png";
import tick from "./assets/tick.png";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main-content">
          <img src={cross} className="cross-logo" alt="cross" />
          <Card className="card-one" />
          <img src={tick} className="tick-logo" alt="tick" />
        </div>
      </header>
      <footer className="app-footer">
        <div className="bottom-nav">
          <p>Created by Dan Sutton 2022</p>
          <p>How to use</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

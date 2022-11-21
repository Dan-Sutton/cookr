import logo from "./assets/cookrlogo.png";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card />
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

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
    </div>
  );
}

export default App;

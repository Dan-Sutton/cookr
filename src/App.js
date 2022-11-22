import logo from "./assets/cookrlogo.png";
import cross from "./assets/cross.png";
import tick from "./assets/tick.png";
import "./App.css";
import FlippableCard from "./components/flippable-card";
import { useState } from "react";

function App() {
  const [recipe, setRecipe] = useState();

  async function getRecipe() {
    console.log(process.env.REACT_APP_API_KEY);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`
    );
    const data = await response.json();
    setRecipe(data);
    console.log(recipe);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main-content">
          <img
            onClick={() => {
              getRecipe();
            }}
            src={cross}
            className="cross-logo"
            alt="cross"
          />
          {/* <Card className="card-one" /> */}
          <FlippableCard recipe={recipe} />
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

import logo from "./assets/cookrlogo.png";
import cross from "./assets/cross.png";
import tick from "./assets/tick.png";
import berries from "./assets/berries.jpeg";
import "./App.css";
import FlippableCard from "./components/flippable-card";
import { useState } from "react";

function App() {
  const [recipe, setRecipe] = useState({
    title: "Welcome to Cookr!",
    readyInMinutes: "INIT",
    servings: "INIT",
    image: berries,
  });

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`
    );
    const data = await response.json();
    setRecipe(data.recipes[0]);
    console.log(recipe);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main-content">
          <FlippableCard recipe={recipe} />
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              getRecipe();
            }}
          >
            ❌
          </button>
          <button>✅</button>
        </div>
      </header>

      <div className="app-footer">
        <div className="bottom-nav">
          <p>Created by Dan Sutton 2022</p>
          <p>How to use</p>
        </div>
      </div>
    </div>
  );
}

export default App;

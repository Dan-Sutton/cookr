import logo from "./assets/cookrlogo.png";
import berries from "./assets/berries.jpeg";
import "./App.css";
import FlippableCard from "./components/flippable-card";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [recipe, setRecipe] = useState({
    title: "Welcome to Cookr!",
    readyInMinutes: "INIT",
    servings: "INIT",
    image: berries,
  });

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`
    );
    const data = await response.json();
    setRecipe(data.recipes[0]);
    console.log(recipe);
  };

  function acceptRecipe() {
    if (recipe.servings === "INIT") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "No recipe selected yet!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Accepted recipe!",
      }).then(() => openInNewTab(`${recipe.sourceUrl}`));
    }
  }

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
          <button
            onClick={() => {
              acceptRecipe();
            }}
          >
            ✅
          </button>
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

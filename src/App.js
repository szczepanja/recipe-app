import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "d2bc2ac0";
  const APP_KEY = "43acd09e440b325d23806e4b6e0addfe";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <h1>recipies</h1>
    </div>
  );
};

export default App;

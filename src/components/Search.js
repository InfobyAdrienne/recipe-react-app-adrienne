import React, { useState } from "react";
import "../search.css";
// import Result from "./Result.js";
var GLOBAL_API = "https://api.spoonacular.com/recipes/findByIngredients";
var API_KEY = process.env.REACT_APP_API_KEY;

function Search() {
  const [ingredient, setIngredient] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");

  const [mealData, setMealData] = useState([]);

  function handleChange(inputEvent) {
    setIngredient(inputEvent.target.value);
  }

  function handleChange2(inputEvent) {
    setIngredient2(inputEvent.target.value);
  }

  function handleChange3(inputEvent) {
    setIngredient3(inputEvent.target.value);
  }

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    fetch(
      `${GLOBAL_API}?ingredients=${ingredient},${ingredient2},${ingredient3}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Ingredient 1"
        ></input>

        <input
          onChange={handleChange2}
          type="text"
          placeholder="Ingredient 2"
        ></input>

        <input
          onChange={handleChange3}
          type="text"
          placeholder="Ingredient 3"
        ></input>

        <button type="submit">Search</button>
      </form>

      <form>
        <div className="meal-container">
          {mealData &&
            mealData.map((meal) => (
              <div className="column">
                <div>
                  <img
                    className="meal-image"
                    src={meal.image}
                    alt={meal.title}
                  />
                  <h2 className="meal-title">{meal.title}</h2>
                  <p>
                    {meal.missedIngredients.map((ingredient) => (
                      <div key={ingredient.id}>
                        <p className="ingredient">{ingredient.original}</p>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </form>
    </div>
  );
}

export default Search;

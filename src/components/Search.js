import React, { useState } from "react";
import "../search.css";
var GLOBAL_API = "https://api.spoonacular.com/recipes/findByIngredients"
var API_KEY = process.env.REACT_APP_API_KEY

function Search() {

  const [mealData, setMealData] = useState(null)
  const [ingredients, setIngredients] = useState(null)

  function getMealData(event) {
    event.preventDefault();
    fetch(
      `${GLOBAL_API}?apiKey=${API_KEY}&ingredients=${ingredients}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
        console.log(data)
      })
      .catch(() => {
        console.log("error")
      })
  }

  function handleChange(e) {
    setIngredients(e.target.value)
  }

  return (
    <form>
      <input
        onChange={handleChange} className="ingredient-search" placeholder="Input ingredient...">
      </input>

      <button onClick={(event) => getMealData(event)} className="submit">Search</button>

      {mealData && mealData.map(meal => (
        <div key={meal.id}>
          <h2 className="meal-title">{meal.title}</h2>
          <img className="meal-image"src={meal.image} alt={meal.title} />
        </div>
      ))}
    </form>


  );
}

export default Search;
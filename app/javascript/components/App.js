import React, { useEffect, useState } from "react";
import axios from 'axios';
import RecipeDetails from "./RecipeDetails";
import RecipesList from "./RecipesList";
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await axios.get(`/v1/recipes`);
        setRecipes(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getRecipes();
  }, [])

  const handleSelectRecipe = id => () => {
    const recipe = recipes.find(recipe => recipe.id === id)
    setSelectedRecipe(recipe)
  }

  const handleSelection = () => {
    setSelectedRecipe(null)
  }

  const recipeList = <RecipesList recipes={recipes} handleSelectRecipe={handleSelectRecipe} />
  const recipeDetails = <RecipeDetails selectedRecipe={selectedRecipe} handleSelection={handleSelection}/>
  return (
    <div className='App'>
      <h1>Bon Apétit!</h1>
      {selectedRecipe ? recipeDetails : recipeList}
    </div>
  )
}

export default App;

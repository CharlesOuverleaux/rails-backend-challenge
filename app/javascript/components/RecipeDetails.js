import React from "react";


export default function RecipeDetails({ selectedRecipe, handleSelection}) {
  return (
    <div className="RecipesDetails">
      <h1>{selectedRecipe.title}</h1>
      <button onClick={handleSelection}>Go back</button>
    </div>
  )
}

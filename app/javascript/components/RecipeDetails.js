import React from "react";


export default function RecipeDetails({ selectedRecipe, handleSelection}) {
  const recipe = selectedRecipe
  return (
    <div className="RecipesDetails">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.id} />
      <ul>
        {recipe.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <p>{recipe.description}</p>
      <p>{recipe.chef}</p>
      <button onClick={handleSelection}>Go back</button>
    </div>
  )
}

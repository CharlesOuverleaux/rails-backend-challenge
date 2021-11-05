import React from "react";
import './RecipeDetails.css';
import ReactMarkdown from "react-markdown";

export default function RecipeDetails({ selectedRecipe, handleSelection}) {
  const recipe = selectedRecipe
  return (
    <div className="RecipesDetails">
      <img className="RecipeDetailsImage"src={recipe.image} alt={recipe.id} />
      <div className="RecipeDetailsInfos">
        <h2 className="RecipeDetailsTitle">{recipe.title}</h2>
        <div className="RecipeDetailsTags">
          {recipe.tags.map(tag => <p className='RecipeDetailsPill' key={tag}>{tag}</p>)}
        </div>
        <p><ReactMarkdown>{recipe.description}</ReactMarkdown></p>
        <p>{recipe.chef}</p>
        <button onClick={handleSelection}>Go back</button>
      </div>
    </div>
  )
}

import React from "react";
import './RecipesList.css';

export default function RecipesList({ recipes, handleSelectRecipe}){

  return(
    <div className="RecipesList">
      {recipes.map( recipe =>
        <div className='RecipeCard' key={recipe.id} onClick={handleSelectRecipe(recipe.id)}>
          <img className='RecipeCardImage' src={recipe.image} alt={recipe.id} />
          <div className='RecipeCardInfo'>
            <p className='RecipeCardTitle'>{recipe.title}</p>
          </div>
        </div>
        )}
    </div>
  )
}

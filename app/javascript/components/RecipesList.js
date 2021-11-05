import React from "react";

export default function RecipesList({ recipes, handleSelectRecipe}){

  return(
    <div className="RecipesList">
      {recipes.map( recipe =>
        <div className='Recipe-Card' key={recipe.id} onClick={handleSelectRecipe(recipe.id)}>
            <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.id}/>
        </div>
        )}
    </div>
  )
}

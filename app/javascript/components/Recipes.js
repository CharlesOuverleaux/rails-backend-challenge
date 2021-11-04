import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Recipes(){
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes(){
      try {
        const response = await axios.get(`/v1/recipes`);
        setRecipes(response.data);
      } catch (error){
        console.log(error)
      }
    }
    getRecipes();
  }, [])
  return(
    <div className="Recipes">
      {recipes.map( recipe =>
        <div key={recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.id}/>
        </div>
        )}
    </div>
  )
}

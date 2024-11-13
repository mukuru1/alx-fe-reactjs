import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            {/* Link to RecipeDetails page */}
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default RecipeList;

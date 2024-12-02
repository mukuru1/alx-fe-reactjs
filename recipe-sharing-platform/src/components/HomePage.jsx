import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
    <p className="text-gray-600 mt-2">{recipe.summary}</p>
  </div>
</Link>,
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required.";
    if (!formData.steps.trim())
      newErrors.steps = "Preparation steps are required.";
    if (formData.ingredients.split(",").length < 2)
      newErrors.ingredients = "Please list at least two ingredients.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      alert("Recipe submitted successfully!");
      setFormData({ title: "", ingredients: "", steps: "" });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg md:max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8 md:text-4xl">
        Add a New Recipe
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4 md:p-8"
      >
       
        <div>
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2 md:text-lg"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.title ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 md:py-3`}
            placeholder="Enter the recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1 md:text-base">
              {errors.title}
            </p>
          )}
        </div>

       
        <div>
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-semibold mb-2 md:text-lg"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 md:py-3`}
            placeholder="List ingredients separated by commas"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1 md:text-base">
              {errors.ingredients}
            </p>
          )}
        </div>

        
        <div>
          <label
            htmlFor="steps"
            className="block text-gray-700 font-semibold mb-2 md:text-lg"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="6"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 md:py-3`}
            placeholder="Describe the preparation steps"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1 md:text-base">
              {errors.steps}
            </p>
          )}
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 md:py-3"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

import { useState } from "react";
import { useParams } from "react-router-dom";
import recipes from "./recipes";

const roundToThreeDigits = (number) => Math.round(number * 1000) / 1000;

const Recipe = () => {
  const params = useParams();
  const recipe = recipes.find(
    (recipeToFind) => recipeToFind.id === params.recipeId
  );
  const [portions, setPortions] = useState(recipe.portions);

  return (
    <div>
      <h2>{recipe.name}</h2>
      <label>Portions</label>
      <input
        value={portions}
        type="number"
        min={1}
        onChange={(event) => {
          setPortions(Number(event.target.value));
        }}
      />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, ingredientIndex) => (
          <li key={ingredientIndex}>
            {roundToThreeDigits(
              (portions * ingredient.amount) / recipe.portions
            )}
            {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;

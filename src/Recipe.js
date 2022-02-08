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
      {recipe.ingredientGroups.length === 1 && (
        <ul>
          {recipe.ingredientGroups[0].ingredients.map(
            (ingredient, ingredientIndex) => (
              <li key={ingredientIndex}>
                {roundToThreeDigits(
                  (portions * ingredient.amount) / recipe.portions
                )}
                {ingredient.unit} {ingredient.name}
              </li>
            )
          )}
        </ul>
      )}
      {recipe.ingredientGroups.length > 1 &&
        recipe.ingredientGroups.map((ingredientGroup) => (
          <div>
            <h4>{ingredientGroup.name}</h4>
            <ul>
              {ingredientGroup.ingredients.map(
                (ingredient, ingredientIndex) => (
                  <li key={ingredientIndex}>
                    {roundToThreeDigits(
                      (portions * ingredient.amount) / recipe.portions
                    )}
                    {ingredient.unit} {ingredient.name}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Recipe;

import { useState } from "react";
import { useParams } from "react-router-dom";
import recipes from "./recipes";
import IngredientGroup from "./IngredientGroup";
import MethodGroup from "./MethodGroup";

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
        <IngredientGroup
          ingredients={recipe.ingredientGroups[0].ingredients}
          portions={portions}
          recipePortions={recipe.portions}
        />
      )}
      {recipe.ingredientGroups.length > 1 &&
        recipe.ingredientGroups.map((ingredientGroup) => (
          <div key={ingredientGroup.name}>
            <h4>{ingredientGroup.name}</h4>
            <IngredientGroup
              ingredients={ingredientGroup.ingredients}
              portions={portions}
              recipePortions={recipe.portions}
            />
          </div>
        ))}
      <h3>Method:</h3>
      {recipe.methodGroups.length === 1 && (
        <MethodGroup steps={recipe.methodGroups[0].steps} />
      )}
      {recipe.methodGroups.length > 1 &&
        recipe.methodGroups.map((methodGroup) => (
          <div key={methodGroup.name}>
            <h4>{methodGroup.name}</h4>
            <MethodGroup steps={methodGroup.steps} />
          </div>
        ))}
    </div>
  );
};

export default Recipe;

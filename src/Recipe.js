import { useParams } from "react-router-dom";
import recipes from "./recipes";

const Recipe = () => {
  const params = useParams();
  const recipe = recipes.find((recipeToFind) => {
    return recipeToFind.id === params.recipeId;
  });

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, ingredientIndex) => {
          return (
            <li key={ingredientIndex}>
              {ingredient.amount}
              {ingredient.unit} {ingredient.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recipe;

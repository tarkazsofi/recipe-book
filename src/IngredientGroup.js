import { roundToThreeDigits } from "./utility";

const IngredientGroup = ({ ingredients, portions, recipePortions }) => (
  <ul>
    {ingredients.map((ingredient, ingredientIndex) => (
      <li key={ingredientIndex}>
        {roundToThreeDigits((portions * ingredient.amount) / recipePortions)}
        {ingredient.unit} {ingredient.name}
      </li>
    ))}
  </ul>
);

export default IngredientGroup;

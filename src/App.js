import "./App.css";
import recipes from "./recipes";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Settings from "./Settings";
import Recipe from "./Recipe";

const App = () => {
  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <nav>
        <ul>
          {recipes.map((recipe) => {
            return (
              <li key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link to="/settings">Settings</Link>
      <Routes>
        <Route path="/recipe/:recipeId" element={<Recipe />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;

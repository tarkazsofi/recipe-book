import "./App.css";
import recipes from "./recipes";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Settings from "./Settings";

const App = () => {
  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <Link to="/settings">Settings</Link>
      <Routes>
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;

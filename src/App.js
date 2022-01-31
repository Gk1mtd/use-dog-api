import RandomDog from "./components/RandomDog.js";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="random-dog">Give me a random dog, please.</Link>
      <Routes>
        <Route path="/random-dog" element={<RandomDog />}/>
      </Routes>
    </div>
  );
}

export default App;

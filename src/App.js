import RandomDog from "./components/RandomDog.js";
import SearchBreed from "./components/SearchBreed.js";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">🏡</Link>
      <Link to="random-dog">Give me a random dog, please.</Link>
      <Link to="search-breed">I am looking for one specific breed...</Link>
      <Routes>
        <Route exact path="/random-dog" element={<RandomDog />}/>
        <Route exact path="/search-breed" element={<SearchBreed />}/>
      </Routes>
    </div>
  );
}

export default App;

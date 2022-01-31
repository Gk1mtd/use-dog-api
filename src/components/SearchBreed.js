import React from "react";
import axios from "axios";

const api = axios.create({ baseURL: "https://dog.ceo/api/breeds/list" });

function SearchBreed() {
  //api call to db
  async function getAllDogs() {
    const { data } = await api.get("/all");
    setAllDogs(Object.keys(data.message));
  }
  //states
  const [allDogs, setAllDogs] = React.useState([]);
  const [filteredDogs, setFilteredDogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // use effect for api call
  React.useEffect(() => {
    getAllDogs();
    setLoading(false);
  }, []);

  const handleChange = ({ target }) => {
      //filter dogs according to input
      const newDogList = allDogs.filter(dog => dog.includes(target.value.toLowerCase()))
      setFilteredDogs(newDogList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="searchBreed">
      {loading && <em>Throughing stick ...</em>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Enter Breed here</label>
        <br/>
        <input
          type="text"
          onChange={handleChange}
          name="search"
          placeholder="Labrador"
        ></input>
        {filteredDogs.map(dog => <p key={dog} >{dog}</p>)}
      </form>
    </div>
  );
}
export default SearchBreed;

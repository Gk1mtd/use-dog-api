import React from "react";
import axios from "axios";

const api = axios.create({ baseURL: "https://dog.ceo/api/breeds/image" });

function RandomDog() {
  //api call to db
  async function getRandomDog() {
    const { data } = await api.get("/random");
    setRandomDog(data);
  }
  //states
  const [randomDog, setRandomDog] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  // use effect for api call
  React.useEffect(() => {
    getRandomDog();
    setLoading(false)
  }, []);

  return (
    <div className="randomDog">
    {loading && <em>Throughing stick ...</em>}
      <img src={randomDog.message} alt=""></img>
      <br />
      <em>Woof</em>
      <br />
      <button onClick={()=>getRandomDog()}>Throw another toy!</button>
    </div>
  );
}
export default RandomDog;

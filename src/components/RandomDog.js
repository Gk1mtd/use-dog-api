import React from "react";
import axios from "axios";

const api = axios.create({baseURL: "https://dog.ceo/api/breeds/image"})


function RandomDog() {
    async function getRandomDog() {
        const {data} = await api.get("/random")
        setRandomDog(data)
    }
    const [randomDog, setRandomDog] = React.useState({})
    React.useEffect(()=>{
        getRandomDog()
    },[])
  return <div>
    <img src={randomDog.message}></img>
    <em>Woof</em>
  </div>;
}
export default RandomDog;

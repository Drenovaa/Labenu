import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/index"

const App = () => {

    const [pokeList, setPokeList] = useState([]);
    const [pokeName, setPokename] = useState("");
    const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=151"


    useEffect (() => {
      const getPokemons = () =>{
        axios
          .get(API_URL)
          .then((res) => setPokeList(res.data.results))
          .catch((err) => console.log(err));
        }
        getPokemons()
      }, [setPokeList, API_URL])

  const changePokeName = event => {
    setPokename(event.target.value);
  };

    return (
      <div className="App">
        <h1>Poke-Lista</h1>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }


export default App;

import React, {useEffect, useState} from "react";
import axios from "axios";

export default function PokeCard(props) {
    const [ pokemon, setPokemon] = useState({})
    const URL = "https://pokeapi.co/api/v2/pokemon/"

  
    useEffect(() => {
      pegaPokemon(props.pokemon);
    }, [props.pokemon])
  
    const pegaPokemon = pokeName => {
      axios
        .get(URL+pokeName)
        .then(res => {
          setPokemon(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    return (
        <div>
          {pokemon.name && pokemon.sprites.front_default ? (
            <div>
              <p>{pokemon.name}</p>
              <p>{pokemon.weight} Kg</p>
              {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
              {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              )}
            </div>
          ) : (
            <h3>Segura a onda aí tio</h3>
          )}
        </div>
      );
    };
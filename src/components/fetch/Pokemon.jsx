import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/10")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }, []);

  return (
    <div>
      {pokemon && (
        <div>
          <h2> {pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default Pokemon;

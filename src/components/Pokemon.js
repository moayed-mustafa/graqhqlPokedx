import React from "react";
export default function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon__name">{pokemon.name}</div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name}></img>
      </div>
      <div className="pokemon__meta"></div>
    </div>
  );
}

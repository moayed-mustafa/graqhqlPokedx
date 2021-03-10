import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Pokemon from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

export default function PokemonsContainer() {
  //* how I got back the data from the graphql server
  // const { data } = useQuery(gql`
  //   query {
  //     pokemons(first: 10) {
  //       name
  //     }
  //   }
  // `);

  // How the instructor retrieved the data back from the server
  const first = 10;
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: first },
  });
  console.log(pokemons);
  return (
    <h1>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </h1>
  );
}

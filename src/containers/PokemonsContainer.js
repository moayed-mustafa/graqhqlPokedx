import React from "react";
import { gql, useQuery } from '@apollo/react-hooks'


export default function PokemonsContainer() {
  const { data } = useQuery(gql`
query{
  pokemons(first:10){
    name
  }
}`
  )
  console.log(data)
  return <h1>Pokemon container</h1>;
}

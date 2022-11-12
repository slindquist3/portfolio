import { useState } from "react";

const Pokedex = ({ list }) => {

  console.log(list)

  return (
    <div>Pokedex</div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );

  const list = await response.json();

  return {
    props: { 
      list: list.results,
    },
  };
}


export default Pokedex;


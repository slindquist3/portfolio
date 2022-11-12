import { useState, useEffect } from "react";
import styled from "styled-components";

const API = "https://pokeapi.co/api/v2/pokemon/";

const Pokedex = ({ pokemon }) => {
  const [currentId, setCurrentId] = useState(1);

  console.log(pokemon);

  //on load
  // display first pokemon, serverside rendered
  // on clicks of buttons, fetches next pokemon

  const Controls = styled.div`
    background-color: pink;
    height: 20px;
    width: 20px;
  `;

  return (
    <>
      <Controls>
        <button onClick={() => setCurrentId(currentId - 1)}>Back</button>
        <button onClick={() => setCurrentId(currentId + 1)}>Next</button>
      </Controls>

      <div>Display</div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch(API + 1);
  const pokemon = await response.json();

  return {
    props: { pokemon },
  };
}

export default Pokedex;

import { useState, useEffect } from "react";
import Display from "../components/pokedex/Display";
import Controls from "../components/pokedex/Controls";
import Lights from "../components/pokedex/Lights";
import styled from "styled-components";

const API = "https://pokeapi.co/api/v2/pokemon/";

const Pokedex = () => {
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({
    name: "",
    id: 0,
    image: "",
  });

  const fetchPokemon = async (id: number) => {
    const api = "https://pokeapi.co/api/v2/pokemon/";

    const response = await fetch(api + id);
    const data = await response.json();

    const current = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
    };

    setPokemon(current);
  };

  useEffect(() => {
    fetchPokemon(currentId);
  }, [currentId]);

  const Screen = styled.div`
    margin: 20px;
    background-color: white;
  `;

  const ScreenBorder = styled.div`
    background-color: gray;
    border: 1px solid gray;
    height: 200px;
    width: 200px;
  `;

  const Panel = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Device = styled.div`
    background-color: red;
    height: 600px;
    width: 300px;
    border: 3px solid black;
    margin-left: 50%;
    margin-top: 3rem;
    transform: translate(-50%, 0);
  `;

  return (
    <>
      <Device>
        <Panel>
          <Lights />
          <ScreenBorder>
            <Screen>{pokemon.name && <Display {...pokemon} />}</Screen>
          </ScreenBorder>
        </Panel>
        <Panel>
          <Controls currentId={currentId} setCurrentId={setCurrentId} />
        </Panel>
      </Device>
    </>
  );
};

export default Pokedex;

//

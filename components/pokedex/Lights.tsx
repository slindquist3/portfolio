import styled from "styled-components";

const Lights = () => {
  const LightsContainer = styled.div`
    display: flex;
  `;

  const BlueLight = styled.div`
    background-color: cyan;
    height: 40px;
    width: 40px;
    border: 2px solid black;
    border-radius: 100%;
  `;

  const RedLight = styled.div`
    background-color: red;
    height: 20px;
    width: 20px;
    border: 2px solid black;
    border-radius: 100%;
  `;

  const YellowLight = styled.div`
    background-color: yellow;
    height: 20px;
    width: 20px;
    border: 2px solid black;
    border-radius: 100%;
  `;

  const GreenLight = styled.div`
    background-color: green;
    height: 20px;
    width: 20px;
    border: 2px solid black;
    border-radius: 100%;
  `;
  return (
    <LightsContainer>
      <BlueLight />
      <RedLight />
      <YellowLight />
      <GreenLight />
    </LightsContainer>
  );
};

export default Lights;

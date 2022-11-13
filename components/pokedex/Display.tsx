import styled from "styled-components";

interface Display {
  id: number;
  image: string;
  name: string;
}

const DisplayContainer = styled.div`
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Display = ({ name, image, id }: Display) => {
  return (
    <DisplayContainer>
      <TextContainer>
        <h3>{name}</h3>
        <span>{id}</span>
      </TextContainer>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
    </DisplayContainer>
  );
};

export default Display;

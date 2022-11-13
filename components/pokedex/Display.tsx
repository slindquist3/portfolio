interface Display {
  id: number;
  image: string;
  name: string;
}

const Display = ({ name, image, id }: Display) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{id}</p>
      <img src={image} />
    </>
  );
};

export default Display;

interface Controls {
  currentId: number;
  setCurrentId: Function;
}

const Controls = ({ setCurrentId, currentId }: Controls) => (
  <>
    <button
      disabled={currentId <= 1}
      onClick={() => setCurrentId(currentId - 1)}
    >
      Back
    </button>
    <button onClick={() => setCurrentId(currentId + 1)}>Next</button>
  </>
);

export default Controls;

function Title(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.array}</p>
      <p>{props.obj.name}</p>
      <button onClick={() => props.function(props.title)}>
        WHAT IS THE TITLE?
      </button>
    </>
  );
}

export default Title;

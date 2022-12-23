function Title(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>
        {props.array} {props.obj.name}
      </p>
      <button onClick={() => props.function(props.title)}>
        WHAT IS THE TITLE?
      </button>
      <p> </p>
    </>
  );
}

export default Title;

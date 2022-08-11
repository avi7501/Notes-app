function Note(props) {
  return (
    <div className="card">
          <button className="close">X</button>
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          
    </div>
  );
}

export default Note;
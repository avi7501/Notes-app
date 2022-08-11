import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function submitNote(event) {
    props.onAdd(note);
    
    event.preventDefault();
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <center>
      <div className="area">
        <form onSubmit={submitNote}>
          <center>
            <input
              onChange={handleChange}
              type="text"
              placeholder="title"
              name="title"
              value={note.title}
            />
            <textarea
              onChange={handleChange}
              placeholder="take a note..."
              name="content"
              value={note.content}
              rows="3"
            ></textarea>
          </center>
          <button className="add">+</button>
        </form>
      </div>
    </center>
  );
}
export default CreateArea;

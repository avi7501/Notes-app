// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Note from "./components/note.jsx";
import notes from "./notes.js";
import CreateArea from "./components/createarea.jsx";
import React, { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes(prevNotes => [...prevNotes, note]);
  }
  function deleteNote(id) {

  }
  return (
    <div className="App">
      {
        <>
          <Header />
          <CreateArea onAdd={addNote} onDelete={deleteNote}/>
          {notes.map((notes) => (
            <Note key={notes.key} title={notes.title} content={notes.content} />
          ))}
          <Footer />
        </>
      }
    </div>
  );
}

export default App;

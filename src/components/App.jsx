import React from "react";
import Heading from "./Heading.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import note from "../note.js";
import AddNote from "./AddNote.jsx";

function noteCreate(note) {
  return <Note key={note.key} title={note.title} noteText={note.content} />;
}

export default function App() {
  return (
    <div>
      <Heading />
      {note.map(noteCreate)}
      <AddNote />
      <Footer />
    </div>
  );
}

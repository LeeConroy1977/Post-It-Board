import { useState } from "react";
import Board from "./components/Board";
import CreateNote from "./components/CreateNote";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [postItNotes, setPostItNotes] = useState([]);

  function createPostNote(noteObj) {
    console.log(noteObj);
    const { task, colour, importance, importanceValue } = noteObj;
    const date = new Date().toLocaleDateString();
    const dateString = new Date();
    // console.log(date);
    const id = uuidv4();

    const newNoteObj = {
      id,
      task,
      colour,
      importance,
      importanceValue,
      date,
      dateString,
    };
    return setPostItNotes([...postItNotes, newNoteObj]);
  }

  console.log(postItNotes);

  return (
    <div className="app">
      <CreateNote createPostNote={createPostNote} />
      <Board postItNotes={postItNotes} setPostItNotes={setPostItNotes} />
    </div>
  );
}

export default App;

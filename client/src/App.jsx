import { useState } from "react";
import Board from "./components/Board";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [postItNotes, setPostItNotes] = useState([]);

  const createPostNote = (noteObj) => {
    const { task, colour, priority } = noteObj;
    const date = new Date();
    const id = uuidv4();

    const newNoteObj = {
      id,
      task,
      colour,
      priority,
      date,
    };
    setPostItNotes([...postItNotes, newNoteObj]);
  };

  return (
    <div className="app">
      <Header />
      <CreateNote createPostNote={createPostNote} />
      <Board />
    </div>
  );
}

export default App;

import Colours from "./Colours";
import Priorities from "./Priorities";

import styles from "../styles/formStyles.module.css";

const FormStyles = ({ handleChange, colour, setNewNoteObj, newNoteObj }) => {
  const { task } = newNoteObj;
  return (
    <>
      <label htmlFor="task">Add task</label>
      <textarea
        placeholder="Enter task..."
        style={{
          border: " 1px solid black",
          margin: "1rem",
          padding: "1rem",
          fontSize: "1rem",
          fontFamily: "arial",
          letterSpacing: "0.08rem",
        }}
        name="task"
        maxLength={20}
        id="task"
        className={styles.textArea}
        value={task}
        cols="30"
        rows="10"
        onChange={handleChange}
      ></textarea>
      <Colours
        colour={colour}
        setNewNoteObj={setNewNoteObj}
        newNoteObj={newNoteObj}
      />
      <Priorities setNewNoteObj={setNewNoteObj} />
    </>
  );
};

export default FormStyles;

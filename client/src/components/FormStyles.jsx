import Colours from "./Colours";
import Priorities from "./Priorities";

import styles from "../styles/formStyles.module.css";

const FormStyles = ({ handleChange, colour, setNewNoteObj, newNoteObj }) => {
  const { task } = newNoteObj;
  return (
    <div className={styles.formStyles}>
      <label htmlFor="task">Add Task</label>
      <textarea
        placeholder="Enter task..."
        style={{
          width: "84%",
          height: "22%",
          border: " 2px solid black",
          fontSize: "0.9rem",
          fontFamily: "Noto Sans Georgian, sans-serif",
          fontWeight: "bold",
          letterSpacing: "0.05rem",
          padding: "0.8rem",
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
    </div>
  );
};

export default FormStyles;

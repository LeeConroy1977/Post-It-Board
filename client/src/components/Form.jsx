import Colours from "./Colours";
import Priority from "../components/Priority";
import styles from "../styles/form.module.css";
import Priorities from "./Priorities";

const Form = ({ createPostNote, setNewNoteObj, newNoteObj, initalObj }) => {
  const { task, colour, priority } = newNoteObj;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewNoteObj((obj) => (obj = { ...obj, [name]: value }));
    console.log(newNoteObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostNote(newNoteObj);
    setNewNoteObj(initalObj);
  };

  return (
    <div className={styles.formContainer}>
      <form action="submit" className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="task">Add task</label>
        <textarea
          name="task"
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
      </form>
    </div>
  );
};

export default Form;

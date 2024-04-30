import styles from "../styles/noteList.module.css";
import Note from "../components/Note";
import SortNote from "./SortNote";

const NoteList = ({ postItNotes, setPostItNotes }) => {
  return (
    <ul className={styles.noteList}>
      <SortNote setPostItNotes={setPostItNotes} postItNotes={postItNotes} />
      {postItNotes &&
        postItNotes.map((note) => {
          return <Note note={note} key={note.id} />;
        })}
    </ul>
  );
};

export default NoteList;

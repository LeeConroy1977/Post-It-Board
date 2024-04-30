import styles from "../styles/board.module.css";
import NoteList from "./NoteList";

const Board = ({ postItNotes, setPostItNotes }) => {
  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardEdge}>
        <main className={styles.noteBoard}>
          <NoteList postItNotes={postItNotes} setPostItNotes={setPostItNotes} />
        </main>
      </div>
    </div>
  );
};

export default Board;

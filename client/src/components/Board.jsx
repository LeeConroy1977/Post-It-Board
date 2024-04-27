import styles from "../styles/board.module.css";

const Board = () => {
  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardEdge}>
        <main className={styles.noteBoard}></main>
      </div>
    </div>
  );
};

export default Board;

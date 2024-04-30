import styles from "../styles/note.module.css";

const Note = ({ note }) => {
  const { task, date, importance, colour } = note;
  console.log(date);

  return (
    <li className={`${styles[colour]} ${styles.note}`}>
      <div className={styles.noteHeader}>
        <div className={`${styles[importance]} ${styles.indicator}`}></div>
        <p>{date}</p>
      </div>
      <div className={styles.noteBody}>
        <p>{task}</p>
      </div>
      <div className={styles.noteFooter}>X</div>
    </li>
  );
};

export default Note;

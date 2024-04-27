import styles from "../styles/preview.module.css";

const Preview = ({ newNoteObj }) => {
  const { task, colour, importance } = newNoteObj;

  return (
    <div className={styles.preview}>
      <h2>Preview</h2>
      <div className={`${styles[colour]} ${styles.previewNote}`}>
        <div className={`${styles[importance]} ${styles.indicator}`}></div>
        <p>{newNoteObj.task}</p>
        <button className={styles.deleteBtn}>X</button>
      </div>
    </div>
  );
};

export default Preview;

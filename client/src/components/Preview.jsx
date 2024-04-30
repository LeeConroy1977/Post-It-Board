import styles from "../styles/preview.module.css";

const Preview = ({ newNoteObj }) => {
  const { task, colour, importance, date } = newNoteObj;

  return (
    <div className={styles.preview}>
      <div className={`${styles[colour]} ${styles.previewNote}`}>
        <div className={styles.previewHeader}>
          <div className={`${styles[importance]} ${styles.indicator}`}></div>
          <p>{date}</p>
        </div>
        <p>{newNoteObj.task}</p>
        {!task ? <p className={styles.defaultText}>- - PREVIEW - -</p> : null}
      </div>
    </div>
  );
};

export default Preview;

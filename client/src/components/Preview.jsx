import styles from "../styles/preview.module.css";

const Preview = () => {
  return (
    <div className={styles.preview}>
      <h2>Preview</h2>
      <div className={styles.previewNote}></div>
    </div>
  );
};

export default Preview;

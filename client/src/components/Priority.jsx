import styles from "../styles/priority.module.css";

const Priority = ({ level, levels, setLevels, setNewNoteObj }) => {
  const { id, importance, isSelected } = level;
  const classname = ` ${styles.box} ${isSelected ? styles.selected : null}`;

  const handleClick = (e) => {
    const selectedId = Number(e.target.id);
    {
      levels.map((obj) => {
        if (obj.id === selectedId) {
          obj.isSelected = true;
          console.log(obj.importance);
          setNewNoteObj(
            (note) => (note = { ...note, importance: obj.importance })
          );
        } else {
          obj.isSelected = false;
        }

        setLevels(() => [...levels]);
      });
    }
  };
  return (
    <div className={styles.priorityBox} id={id} onClick={handleClick}>
      <div className={classname} id={id} onClick={handleClick}>
        <div
          className={`${styles[importance]} ${styles.priority}`}
          id={id}
          onClick={handleClick}
        ></div>
      </div>
    </div>
  );
};

export default Priority;

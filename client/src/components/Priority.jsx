import styles from "../styles/priority.module.css";

const Priority = ({ level, levels, setLevels }) => {
  const { id, importance, isSelected } = level;
  const classname = ` ${styles.box} ${isSelected ? styles.selected : null}`;

  const handleClick = (e) => {
    const selectedId = Number(e.target.id);
    {
      levels.map((obj) => {
        obj.id === selectedId
          ? (obj.isSelected = true)
          : (obj.isSelected = false);
        console.log(obj);
        setLevels(() => [...levels]);
      });
    }
  };
  return (
    <div className={styles.priorityBox} id={id} onClick={handleClick}>
      <h4 id={id} onClick={handleClick} className={styles.priorityName}>
        {importance}
      </h4>
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

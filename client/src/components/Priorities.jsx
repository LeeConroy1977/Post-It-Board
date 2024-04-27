import styles from "../styles/priorities.module.css";
import Priority from "../components/Priority";
import { useState } from "react";

const prioritiesArr = [
  {
    id: 1,
    importance: "Low",
    colourHex: "#33FF57",
    isSelected: true,
  },
  {
    id: 2,
    importance: "Medium",
    colourHex: "#FFFE33",
    isSelected: false,
  },
  {
    id: 3,
    importance: "High",
    colourHex: "#FF5733",
    isSelected: false,
  },
  {
    id: 4,
    importance: "Alert",
    colourHex: "#FF5733",
    isSelected: false,
  },
];

const Priorities = ({ setNewNoteObj }) => {
  const [levels, setLevels] = useState(prioritiesArr);
  return (
    <>
      <h4 className={styles.priorityLabel}>Priority Indicator</h4>
      <div className={styles.prioritiesContainer}>
        {levels.map((level) => {
          return (
            <Priority
              level={level}
              key={level.id}
              setLevels={setLevels}
              levels={levels}
              setNewNoteObj={setNewNoteObj}
            />
          );
        })}
      </div>
    </>
  );
};

export default Priorities;

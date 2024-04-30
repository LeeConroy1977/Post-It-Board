import React, { useEffect, useState } from "react";
import styles from "../styles/sortNote.module.css";

const SortNote = ({ setPostItNotes, postItNotes }) => {
  const [sortMethod, setSortMethod] = useState("");

  function handleSort(sortBy) {
    return setSortMethod(sortBy);
    // console.log(sortBy);
  }
  console.log(sortMethod, "state");

  useEffect(() => {
    const sortedPosts = postItNotes;

    if (sortMethod === "importanceValue") {
      sortedPosts.sort((a, b) => b.importanceValue - a.importanceValue);
      return setPostItNotes([...sortedPosts]);
    }
    if (sortMethod === "oldest") {
      sortedPosts.sort((a, b) => a.dateString - b.dateString);
      return setPostItNotes([...sortedPosts]);
    }
    if (sortMethod === "newest") {
      sortedPosts.sort((a, b) => b.dateString - a.dateString);
      return setPostItNotes([...sortedPosts]);
    }
  }, [sortMethod]);

  return (
    <div className={styles.sortNote}>
      <div className={styles.sort}>
        <p>Sort by:</p>
        <div className={styles.sortBtns}>
          <button
            className={`${styles.priorityBtn} ${styles.btn}`}
            name="importanceValue"
            onClick={(e) => handleSort(e.target.name)}
          >
            Priorty
          </button>
          <button
            className={`${styles.oldestBtn} ${styles.btn}`}
            name="oldest"
            onClick={(e) => handleSort(e.target.name)}
          >
            Oldest{" "}
          </button>
          <button
            className={`${styles.newestBtn} ${styles.btn}`}
            name="newest"
            onClick={(e) => handleSort(e.target.name)}
          >
            Newest
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortNote;

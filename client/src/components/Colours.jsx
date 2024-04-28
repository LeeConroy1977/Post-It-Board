import styles from "../styles/colours.module.css";
import colours from "../data/colourData";
import Colour from "./Colour";
import { useState } from "react";

const Colours = ({ colour, setNewNoteObj, newNoteObj }) => {
  const [colourArr, setcolourArr] = useState(colours);

  return (
    <>
      <label htmlFor="colourBox">Note Colours</label>
      <div className={styles.colourBox}>
        {colourArr &&
          colourArr.map((colour) => {
            return (
              <Colour
                name={colour}
                colour={colour}
                key={colour.id}
                colourArr={colourArr}
                setcolourArr={setcolourArr}
                setNewNoteObj={setNewNoteObj}
                newNoteObj={newNoteObj}
              />
            );
          })}
      </div>
    </>
  );
};

export default Colours;

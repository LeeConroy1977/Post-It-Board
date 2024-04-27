import styles from "../styles/colours.module.css";
import colours from "../data/colourData";
import Colour from "./Colour";
import { useState } from "react";

const Colours = ({ colour, setNewNoteObj }) => {
  const [colourArr, setcolourArr] = useState(colours);
  // const handleColourClick = (e) => {
  //   const { name, value } = e.target;
  //   console.log(value, "value", name);
  //   setNewNoteObj((obj) => (obj = { ...obj, [name]: value }));
  // };
  return (
    <>
      <label htmlFor="colourBox">Colours</label>
      <div className={styles.colourBox}>
        {colourArr &&
          colourArr.map((colour) => {
            return (
              <Colour
                colour={colour}
                key={colour.id}
                colourArr={colourArr}
                setcolourArr={setcolourArr}
              />
            );
          })}
      </div>
    </>
  );
};

export default Colours;

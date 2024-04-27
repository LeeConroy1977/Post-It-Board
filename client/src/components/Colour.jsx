import React from "react";
import styles from "../styles/colour.module.css";

const Colour = ({
  colour,
  colourArr,
  setcolourArr,
  newNoteObj,
  setNewNoteObj,
}) => {
  const { colourHex, isSelected, id } = colour;

  const handleClick = (e) => {
    const selectedID = Number(e.target.id);
    {
      colourArr.map((obj) => {
        obj.id === selectedID
          ? (obj.isSelected = true)
          : (obj.isSelected = false);
        console.log(obj.colourHex);
        setcolourArr(() => [...colourArr]);
        setNewNoteObj((note) => (note = { ...note, colour: colourHex }));
      });
    }
  };

  const classname = `${styles[colourHex]} ${styles.colour} ${
    isSelected ? styles.selected : null
  }`;

  return (
    <div
      id={id}
      className={classname}
      value={colourHex}
      onClick={handleClick}
    ></div>
  );
};

export default Colour;

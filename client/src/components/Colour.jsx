import React from "react";
import styles from "../styles/colour.module.css";

const Colour = ({ colour, colourArr, setcolourArr }) => {
  const { colourHex, isSelected, id } = colour;
  const handleClick = (e) => {
    const selectedID = Number(e.target.id);
    {
      colourArr.map((obj) => {
        obj.id === selectedID
          ? (obj.isSelected = true)
          : (obj.isSelected = false);
        setcolourArr(() => [...colourArr]);

        console.log(colour);
      });
    }
  };

  const classname = `${styles[colourHex]} ${styles.colour} ${
    isSelected ? styles.selected : null
  }`;

  return <div id={id} className={classname} onClick={handleClick}></div>;
};

export default Colour;

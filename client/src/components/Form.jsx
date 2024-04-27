import Colours from "./Colours";
import Priority from "../components/Priority";
import styles from "../styles/form.module.css";
import Priorities from "./Priorities";

import FormFonts from "../components/FormFonts";
import FormStyles from "../components/FormStyles";
import { useState } from "react";
import FontColours from "./FontColours";

const Form = ({ createPostNote, setNewNoteObj, newNoteObj, initalObj }) => {
  const [isOpen, setIsOpen] = useState("styles");
  const { task, colour, priority } = newNoteObj;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewNoteObj((obj) => (obj = { ...obj, [name]: value }));
    console.log(newNoteObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPostNote(newNoteObj);
    setNewNoteObj(initalObj);
  };

  const handleIsOpen = (navPage) => {
    setIsOpen(navPage);
  };

  return (
    <div className={styles.formContainer}>
      <nav className={styles.formNav}>
        <ul>
          <li
            className={styles.noteStyles}
            onClick={() => handleIsOpen("styles")}
          >
            Styles
          </li>
          <li
            className={styles.noteFonts}
            onClick={() => handleIsOpen("fonts")}
          >
            Fonts
          </li>
          <li
            className={styles.noteFontColour}
            onClick={() => handleIsOpen("colours")}
          >
            Colour
          </li>
        </ul>
      </nav>
      <form action="submit" className={styles.form} onSubmit={handleSubmit}>
        {isOpen === "styles" ? (
          <FormStyles
            handleChange={handleChange}
            setNewNoteObj={setNewNoteObj}
            newNoteObj={newNoteObj}
            colour={colour}
          />
        ) : isOpen === "fonts" ? (
          <FormFonts />
        ) : (
          <FontColours />
        )}
      </form>
    </div>
  );
};

export default Form;

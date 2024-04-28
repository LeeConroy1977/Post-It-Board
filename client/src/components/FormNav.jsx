import styles from "../styles/formNav.module.css";

const FormNav = ({ handleIsOpen }) => {
  return (
    <nav className={styles.formNav}>
      <ul>
        <li
          className={styles.noteStyles}
          onClick={() => handleIsOpen("styles")}
        >
          Styles
        </li>
        <li className={styles.noteFonts} onClick={() => handleIsOpen("fonts")}>
          Fonts
        </li>
        <li
          className={styles.noteFontColour}
          onClick={() => handleIsOpen("colours")}
        >
          Colours
        </li>
      </ul>
    </nav>
  );
};

export default FormNav;

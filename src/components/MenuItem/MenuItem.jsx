import React from "react";
import styles from "./MenuItem.module.css"
const MainMenu = (props) => {
    return (
        <li className={styles.main-menu__item}>
      <a className={styles.main-menu__link} href="/">
         {props.text}
      </a>
    </li>
    );
  };
    export default MainMenu
import React from "react";
import styles from "./MenuItem.module.css";
import { Link } from "react-router-dom";
const MenuItem = (props) => {
  return (
    <li className={styles.MenuItem__item}>
      <Link className={styles.MenuItem__link} to={props.link}>
        {props.text}
      </Link>
    </li>
  );
};
export default MenuItem;

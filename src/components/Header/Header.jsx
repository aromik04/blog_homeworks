import React, {useState} from "react";
import { Link } from "react-router-dom";

import MenuItem from "../MenuItem";
import SocialMenu from "../SocialMenu";

import cn from "classnames";
import styles from "./Header.module.css"
import logo from "../../images/logo.png"
import { MENU_PAGES, SOCIAL_MENU } from "./store";


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    

    return (
        <header className={styles.header}>
          <nav className={styles.header__nav}>
            <Link className={styles.header__logo} to="/">
              <img src={logo} alt="logo" width="126" height="23" />
            </Link>
            <button
              className={cn(styles.header__burger, {
                [styles.header__burger__active]: isActive,
              })}
              type="button"
              aria-label="открыть меню"
              onClick={() => setIsActive(true)}
               />
              <div
          className={cn(styles.MainMenu, {
            [styles.MainMenu__active]: isActive,
          })}
        >
          <p className={styles.MainMenu__title}>&gt; меню</p>
          <button
            className={styles.MainMenu__close}
            type="button"
            aria-label="закрыть меню"
            onClick={() => setIsActive(false)}
          />
          <ul className={styles.MainMenu__list}>
            {MENU_PAGES.map(({ id, title, href }) => (
              <MenuItem key={id} text={title} link={href} />
            ))}
          </ul>
          <ul className={styles.SocialMenu}>
            {SOCIAL_MENU.map(({ id, title, href, SocialIcon }) => (
              <SocialMenu
                key={id}
                className={styles.SocialMenu__link}
                href={href}
                aria={title}
              >
                <SocialIcon className={styles.icon} />
              </SocialMenu>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
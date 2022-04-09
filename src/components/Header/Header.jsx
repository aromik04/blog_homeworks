import React, {useState} from "react";
import cn from "classnames";
import MenuItem from "../MenuItem";
import SocialMenu from "../SocialMenu";
import styles from "./Header.module.css"

const MENU_LINKS = [
  {id: '1', title: "_главная", link: "/main_page"},
  {id: '2', title: '_посты', link: "/posts"},
  {id: '3', title: '_категории', link: "/categories"},
  {id: '4', title: '_полезное', link: "/useful"},
  {id: '5', title: '_обо мне', link: "/about_me"}

]

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <header className={styles.header}>
          <nav className={styles.header__nav}>
            <a className={styles.header__logo} href="/">
              <img src="" alt="logo" width="126" height="23" />
            </a>
            <button
              className={cn(styles.header__burger, { [styles.header__menu]: isActive, })}
              type="button"
              aria-label="открыть меню"
              onClick={() => {
                setIsActive(true);
              }} />
              {isActive && (
                <div className={styles.menu-item}>
              <p className={styles.menu-item__title}>{">"}меню</p>
              <button
                className={styles.menu-item__hide}
                type="button"
                aria-label="закрыть меню"
              ></button>
             <ul
               className={cn(styles.menu-item__hide, { [styles.menu-item]: isActive })}
              >
              )
              {MENU_LINKS.map(({id, link, title}) => (
                  <MenuItem key={id} title={title} link={link}/> 
                ))} 
              </ul>
              <ul className={styles.social-menu}>
                <SocialMenu
                  className={styles.social-menu__link, styles.social-menu__link__instagram}
                 aria="instagram"
                />
                <SocialMenu
                  className={styles.social-menu__link, styles.social-menu__link__vk}
                  aria="vk"
                />
                <SocialMenu
                  className={styles.social-menu__link, styles.social-menu__link__twitter}
                  aria="twitter"
                />
                <SocialMenu
                  className={styles.social-menu__link, styles.social-menu__link__youtube}
                  aria="youtube"
                />
              </ul>
            </div>
          </nav>
        </header>      
    );
  };
  
export default Header;
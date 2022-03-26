import React, {useState} from "react";
import cn from "classnames";
import MenuItem from "../MenuItem";
import SocialMenu from "../SocialMenu";

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
        <header className="header">
        <nav className="header__nav">
          <a className="header__logo" href="/">
            <img src="/" alt="logo" width="126" height="23" />
          </a>
          <button
            className={cn("header__burger", { "header__menu": isActive })}
            type="button"
            aria-label="открыть меню"
          />
          <div className="main-menu">
            <p className="main-menu__title">{">"}меню</p>
            <button
              className="main-menu__close"
              type="button"
              aria-label="закрыть меню"
            ></button>
            <ul
             className={cn("main-menu__close", { "main-menu": isActive })}
            >
            {MENU_LINKS.map(({id, link, title}) => (
              <MenuItem key={id} title={titlee} link={link}/> 
            ))} 
            </ul>

            <ul className="social-menu">
              <SocialMenu
                className="social-menu__link social-menu__link--instagram"
                aria="instagram"
              />
              <SocialMenu
                className="social-menu__link social-menu__link--vk"
                aria="vk"
              />
              <SocialMenu
                className="social-menu__link social-menu__link--twitter"
                aria="twitter"
              />
              <SocialMenu
                className="social-menu__link social-menu__link--youtube"
                aria="youtube"
              />
            </ul>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
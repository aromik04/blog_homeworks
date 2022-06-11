import React from "react";
import styles from "./SocialMenu.module.css";
const SocialMenu = (props) => {
	return (
		<li className={styles.SocialMenu}>
			<a className={props.className} href={props.href} aria-label={props.aria}>
				{props.children}
			</a>
		</li>
	);
};
export default SocialMenu;

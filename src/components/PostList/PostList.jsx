 import React from "react";
import styles from "./PostList.module.css";
import { POSTS } from "./posts";
const PostList = () => {
	return (
		<section className={styles.posts}>
			<h2 className={styles.posts__title}>_новые посты</h2>
			<ul className={styles.posts__list}>
				{POSTS.map(
					({ id, title, content, date, img, num, imgMob, alt }) => (
						<li key={id} className={styles.posts__item}>
							<div className={styles.posts__heading}>
								<h3>{title}</h3>
								<time className={styles.posts__date} dateTime={date}>
									{date.toDateString()}
								</time>
							</div>
							<div className={styles.posts__content}>
								<picture className={styles.picture}>
									<source media="(min-width: 768px)" srcSet={img} />
									<img
										className={styles.posts__image}
										src={imgMob}
										alt={alt}
										width="115"
										height="115"
									/>
								</picture>
								<p className={styles.posts__text}>{content}</p>
								<span className={styles.posts__num}>{num} </span>
							</div>
						</li>
					)
				)}
			</ul>
			<a className={styles.posts__more} href="/posts">
				остальные...
			</a>
		</section>
	);
};
export default PostList; 

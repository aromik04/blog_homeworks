import React from "react";
import styles from "./Author.module.css";
import author from "../../images/author.jpg";
import authorMob from "../../images/authorMob.jpg";

const Author = () => {
    return (
        <section className={styles.author}>
          <h2 className="visually-hidden">Обо мне</h2>
          <picture className={styles.picture}>
            <source media="(min-width: 768px)" srcSet={author} />
            <img className={styles.AuthorImage} src={authorMob} alt="Николай" />
          </picture>
          <p className={styles.author__text}>
            <span className={styles.author__item}>Привет!</span>
            <span className={styles.author__item}>Меня зовут Николай.</span>
            <span className={styles.author__item}>
              Я верстальщик, и начинающий фронтенд-разработчик.
            </span>
            <span className={styles.author__item}>
              Это мой блог, где я буду делиться своими мыслями относительно
              веб-разработки
            </span>
          </p>
        </section>
      );
    };
export default Author;    
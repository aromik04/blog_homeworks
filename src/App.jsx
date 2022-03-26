import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import "./styles/main.css"
const App = () => {
    return (
        <>
        <Header />
        <Main title="web blog">
          <section className="profile">
            <h2 className="visually-hidden">Обо мне</h2>
            <img className="profile-image" src="/" alt="Николай" width="115" height="115"/>
            <p className="profile__text">
              <span className="profile__item">Привет!</span>
              <span className="profile__item">Меня зовут Николай.</span>
              <span className="profile__item">
                Я верстальщик, и начинающий фронтенд-разработчик.
              </span>
              <span className="profile__item">
                Это мой блог, где я буду делиться своими мыслями относительно
                веб-разработки
              </span>
            </p>
          </section>
          <section className="posts">
            <h2 className="posts__title">_новые посты</h2>
            <PostList/>
            <a className="posts__more" href="/">
              остальные...
            </a>
          </section>
        </Main>
        <Footer text="&copy; _web.blog 2022" />
      </>
    );
  };
    
export default App
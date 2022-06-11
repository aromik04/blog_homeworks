import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import CategoriesPage from "./pages/CategoriesPage";
import UsefulPage from "./pages/UsefulPage"

import "./styles/main.css";

 const App = () => {
    return (
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<MainLayout />}/>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="useful" element={<UsefulPage /> } />
      </Routes>
   </BrowserRouter>
    );
  };
    
export default App;
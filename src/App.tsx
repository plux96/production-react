import React, { Suspense, useContext, useState } from "react";
import Counter from "./components/Counter";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { ThemeContext, ThemeType } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

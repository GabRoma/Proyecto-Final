//Botón para cambiar de tema claro a tema oscuro

import React, { useState, useEffect } from "react";
import { Navbar } from "./navbar";

export const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
    toDarkMode();
  };

  useEffect(() => {
    if (!isDarkMode) {
      toDarkMode();
    }
  }, []);

  const toDarkMode = () => {
    document.body.style.backgroundColor = isDarkMode ? "white" : "#292929";
    document.body.style.color = isDarkMode ? "#212529" : "#babec2";
    document.querySelector(".navbar").style.backgroundColor = isDarkMode
      ? "rgb(243, 245, 244)"
      : "black";
    document.querySelector(".navbar").style.color = isDarkMode
      ? "white"
      : "black";
    document.querySelector(".search").style.backgroundColor = isDarkMode
      ? "rgb(243, 245, 244)"
      : "black";
    document.querySelector(".searchbtn").style.border = isDarkMode
      ? "#000000"
      : "#babec2";
    document.querySelector(".searchbtn").style.color = isDarkMode
      ? "#212529"
      : "#babec2";
    document.querySelector(".searchbar").style.backgroundColor = isDarkMode
      ? "rgb(243, 245, 244)"
      : "black";
    document.querySelector(".searchbar").style.border = isDarkMode
      ? "#000000"
      : "#babec2";
    document.querySelector(".log").style.color = isDarkMode ? "black" : "white";
    document.querySelector(".cartbtn").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".toggle-button").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".footer").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".ftext1").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".ftext2").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".ftext3").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".ftext4").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".ftext5").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".ftext6").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".tituloprincipal").style.color = isDarkMode
      ? "black"
      : "white";
    document.querySelector(".dropdown-menu").style.backgroundColor = isDarkMode
      ? "white"
      : "#555555";
    document.querySelector(".listaCarrito").style.backgroundColor = isDarkMode
      ? "white"
      : "#555555";
    document.querySelector(".modal").style.color = isDarkMode
      ? "white"
      : "black";
  };

  return (
    <button className={`toggle-button`} onClick={toggleDarkMode}>
      {" "}
      {isDarkMode ? (
        <i className="fas fa-sun" />
      ) : (
        <i className="fas fa-moon" />
      )}{" "}
    </button>
  );
};

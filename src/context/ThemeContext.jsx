import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [accent, setAccent] = useState("purple");

  useEffect(() => {
    const saved = localStorage.getItem("accent") || "purple";
    setAccent(saved);
    document.documentElement.setAttribute("data-accent", saved);
  }, []);

  const changeAccent = (color) => {
    setAccent(color);
    localStorage.setItem("accent", color);
    document.documentElement.setAttribute("data-accent", color);
  };

  return (
    <ThemeContext.Provider value={{ accent, changeAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

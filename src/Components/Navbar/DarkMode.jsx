import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      {theme === "light" ? (
        <CiLight
          className="cursor-pointer text-2xl transition-all duration-300"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <MdNightlightRound
          className="cursor-pointer text-2xl transition-all duration-300"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default DarkMode;

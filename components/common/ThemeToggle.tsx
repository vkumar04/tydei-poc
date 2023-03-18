"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    (document.querySelector("html") as HTMLElement).setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);
  return (
    <button
      className="btn-ghost btn-circle btn"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
}

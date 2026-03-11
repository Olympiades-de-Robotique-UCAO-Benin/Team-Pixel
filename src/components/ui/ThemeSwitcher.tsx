import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const themes = ["dark", "light"];

  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";

    setTheme(saved);

    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const changeTheme = () => {
    const index = themes.indexOf(theme);

    const next = themes[(index + 1) % themes.length];

    setTheme(next);

    localStorage.setItem("theme", next);

    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button className="btn btn-circle btn-ghost" onClick={changeTheme}>
      {theme === "dark" && <Moon size={18} />}

      {theme === "light" && <Sun size={18} />}
    </button>
  );
}

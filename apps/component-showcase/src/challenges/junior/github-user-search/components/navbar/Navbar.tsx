import { useTheme } from "../../hooks/useTheme";
import moonIcon from "../../assets/icon-moon.svg";
import sunIcon from "../../assets/icon-sun.svg";
import "./Navbar.css";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <h1 className="navbar-title">devfinder</h1>
      <div className="toggle-theme">
        <button onClick={toggleTheme}>
          <img
            src={isDark ? sunIcon : moonIcon}
            alt="icon to switch between dark and light mode"
            className="toggle-theme-icon"
          />
        </button>
      </div>
    </header>
  );
};

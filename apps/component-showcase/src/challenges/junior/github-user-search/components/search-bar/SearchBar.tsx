import { useState } from "react";
import searchIcon from "../../assets/icon-search.svg";
import "./SearchBar.css";

export const SearchBar = ({
  onClick,
}: {
  onClick: (username: string) => void;
}) => {
  const [username, setUsername] = useState("");

  return (
    <div className="search-bar">
      <div className="search-input">
        <img src={searchIcon} alt="icon to search for github users" />
        <input
          className="search-input-input"
          type="text"
          placeholder="Search GitHub users..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button className="search-button" onClick={() => onClick(username)}>
        Search
      </button>
    </div>
  );
};

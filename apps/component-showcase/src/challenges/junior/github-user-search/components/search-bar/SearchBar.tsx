import searchIcon from "../../assets/icon-search.svg";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <img src={searchIcon} alt="icon to search for github users" />
        <input
          className="search-input-input"
          type="text"
          placeholder="Search GitHub users..."
        />
      </div>
      <button className="search-button">Search</button>
    </div>
  );
};

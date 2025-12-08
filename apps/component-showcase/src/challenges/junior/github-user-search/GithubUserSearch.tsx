import { Navbar } from "./components/navbar/Navbar";
import { SearchBar } from "./components/search-bar/SearchBar";
import { UserInfo } from "./components/user-info/UserInfo";
import { useGetGithubUser } from "./hooks/useGetGithubUser";
import "./GithubUserSearch.css";

const GithubUserSearch = () => {
  const { user, isLoading, error, searchUser } = useGetGithubUser();
  return (
    <div className="github-user-search">
      <div className="main-content">
        <Navbar />
        <SearchBar />
        <UserInfo user={user} />
      </div>
    </div>
  );
};

export default GithubUserSearch;

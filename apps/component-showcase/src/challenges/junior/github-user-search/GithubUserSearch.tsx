import { Navbar } from "./components/navbar/Navbar";
import { SearchBar } from "./components/search-bar/SearchBar";
import { UserInfo } from "./components/user-info/UserInfo";
import { LoadingState } from "./components/loading-state/LoadingState";
import { ErrorState } from "./components/error-state/ErrorState";
import { useGetGithubUser } from "./hooks/useGetGithubUser";
import "./GithubUserSearch.css";

const GithubUserSearch = () => {
  const { user, isLoading, error, searchUser } = useGetGithubUser();
  return (
    <div className="github-user-search">
      <div className="main-content">
        <Navbar />
        <SearchBar onClick={searchUser} />
        {isLoading && <LoadingState />}
        {error && !isLoading && <ErrorState />}
        {!isLoading && !error && <UserInfo user={user} />}
      </div>
    </div>
  );
};

export default GithubUserSearch;

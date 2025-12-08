import type { GithubUser } from "../../../../types/github";
import "./ProfileContainer.css";

interface ProfileContainerProps {
  user: GithubUser | null;
}

export const ProfileContainer = ({ user }: ProfileContainerProps) => {
  return (
    <div className="profile-container">
      <img src={user?.avatar_url} alt="" className="profile-image" />
      <div className="profile-header">
        <div className="user-details">
          <p className="username">{user?.name}</p>
          <p className="handle">@{user?.login}</p>
        </div>
        <p className="joined-date">
          Joined {new Date(user?.created_at || "").toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

import type { GithubUser } from "../../../../types/github";
import "./ProfileHeader.css";

interface ProfileHeaderProps {
  user: GithubUser | null;
}

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div className="profile-header-info">
      <div className="user-details">
        <p className="username">{user?.name}</p>
        <p className="handle">@{user?.login}</p>
      </div>
      <p className="joined-date">
        Joined {new Date(user?.created_at || "").toLocaleDateString()}
      </p>
    </div>
  );
};

import { ProfileHeader } from "./components/profile-container/ProfileHeader";
import { ProfileInfo } from "./components/profile-info/ProfileInfo";
import "./UserInfo.css";
import type { GithubUser } from "../../types/github";

interface UserInfoProps {
  user: GithubUser | null;
}

export const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="user-info">
      <img src={user?.avatar_url} alt="User avatar" className="profile-image" />
      <ProfileHeader user={user} />
      <ProfileInfo user={user} />
    </div>
  );
};

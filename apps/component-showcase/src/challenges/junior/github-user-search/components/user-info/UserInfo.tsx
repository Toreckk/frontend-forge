import { ProfileContainer } from "./components/profile-container/ProfileContainer";
import { ProfileInfo } from "./components/profile-info/ProfileInfo";
import "./UserInfo.css";
import type { GithubUser } from "../../types/github";

interface UserInfoProps {
  user: GithubUser | null;
}

export const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="user-info">
      <ProfileContainer user={user} />
      <ProfileInfo user={user} />
    </div>
  );
};

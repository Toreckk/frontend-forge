import type { GithubUser } from "../../../../types/github";
import { LocationIcon } from "../../../icons/LocationIcon";
import { TwitterIcon } from "../../../icons/TwitterIcon";
import { WebsiteIcon } from "../../../icons/WebsiteIcon";
import { CompanyIcon } from "../../../icons/CompanyIcon";
import "./ProfileInfo.css";

interface ProfileInfoProps {
  user: GithubUser | null;
}

export const ProfileInfo = ({ user }: ProfileInfoProps) => {
  return (
    <div className="profile-info">
      <p className="profile-bio">{user?.bio || "This profile has no bio"}</p>
      <div className="stats-section">
        <div className="stat-item">
          <p className="label">Repos</p>
          <p className="count">{user?.public_repos}</p>
        </div>
        <div className="stat-item">
          <p className="label">Followers</p>
          <p className="count">{user?.followers}</p>
        </div>
        <div className="stat-item">
          <p className="label">Following</p>
          <p className="count">{user?.following}</p>
        </div>
      </div>
      <div className="links-section">
        <div className="link-item">
          <LocationIcon className="icon" aria-label="Location" />
          <p className="link-value">{user?.location || "Not available"}</p>
        </div>

        <div className="link-item">
          <TwitterIcon className="icon" aria-label="Twitter" />
          <p className="link-value">
            {user?.twitter_username || "Not available"}
          </p>
        </div>
        <div className="link-item">
          <WebsiteIcon className="icon" aria-label="Blog" />
          <p className="link-value">{user?.blog || "Not available"}</p>
        </div>
        <div className="link-item">
          <CompanyIcon className="icon" aria-label="Company" />
          <p className="link-value">{user?.company || "Not available"}</p>
        </div>
      </div>
    </div>
  );
};

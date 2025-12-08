import type { GithubUser } from "../../../../types/github";
import iconLocation from "../../../../assets/icon-location.svg";
import iconTwitter from "../../../../assets/icon-twitter.svg";
import iconBlog from "../../../../assets/icon-website.svg";
import iconCompany from "../../../../assets/icon-company.svg";
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
          <img src={iconLocation} alt="Location" className="icon" />
          <p className="link-value">{user?.location || "Not available"}</p>
        </div>

        <div className="link-item">
          <img src={iconTwitter} alt="Twitter" className="icon" />
          <p className="link-value">
            {user?.twitter_username || "Not available"}
          </p>
        </div>
        <div className="link-item">
          <img src={iconBlog} alt="Blog" className="icon" />
          <p className="link-value">{user?.blog || "Not available"}</p>
        </div>
        <div className="link-item">
          <img src={iconCompany} alt="Company" className="icon" />
          <p className="link-value">{user?.company || "Not available"}</p>
        </div>
      </div>
    </div>
  );
};

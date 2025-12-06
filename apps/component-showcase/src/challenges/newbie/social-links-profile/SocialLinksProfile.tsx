import "./SocialLinksProfile.css";
import avatarIcon from "./assets/avatar.webp";

const SocialLinksProfile = () => {
  return (
    <article className="social-links-profile-main">
      <section className="social-links-profile-card">
        <img
          src={avatarIcon}
          alt="Author avatar"
          className="social-links-profile-avatar"
        />
        <div className="social-links-profile-personal-info">
          <p className="social-links-profile-name">Juan Coret</p>
          <p className="social-links-profile-location">Valencia, Spain</p>
        </div>
        <p className="social-links-profile-description">
          "Frontend Developer and avid reader"
        </p>
        <div className="social-links-profile-social-links">
          <a href="#" className="social-links-profile-social-link">
            Github
          </a>
          <a href="#" className="social-links-profile-social-link">
            Twitter
          </a>
          <a href="#" className="social-links-profile-social-link">
            Linkedin
          </a>
          <a href="#" className="social-links-profile-social-link">
            Leetcode
          </a>
          <a href="#" className="social-links-profile-social-link">
            Medium
          </a>
        </div>
      </section>
    </article>
  );
};

export default SocialLinksProfile;

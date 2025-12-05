import blogImage from "./assets/illustration-article.svg";
import blogAuthorImage from "./assets/image-avatar.webp";
import { bpTheme } from "./theme";
import "./BlogPreviewCard.css";

const BlogPreviewCard = () => {
  return (
    <main style={bpTheme} className="blog-preview-main">
      <div id="blog-preview-container" className="blog-card">
        <img src={blogImage} alt="Blog preview" className="blog-image" />
        <div id="blog-preview-text" className="blog-content">
          <p id="blog-tag" className="blog-badge">
            Learning
          </p>
          <p id="blog-publish-date" className="blog-date">
            Published 21 Dec 2023
          </p>
          <p id="blog-title" className="blog-title">
            HTML & CSS foundations
          </p>
          <p id="blog-description" className="blog-description">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div id="blog-author-section" className="blog-author">
          <img
            src={blogAuthorImage}
            alt="Blog author"
            className="blog-author-img"
          />
          <p id="blog-author-text" className="blog-author-name">
            Juan Coret
          </p>
        </div>
      </div>
    </main>
  );
};

export default BlogPreviewCard;

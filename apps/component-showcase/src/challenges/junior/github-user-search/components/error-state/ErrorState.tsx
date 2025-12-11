import "./ErrorState.css";

export const ErrorState = () => {
  return (
    <div className="error-state">
      <div className="error-icon">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="31"
            cy="31"
            r="30"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.2"
          />
          <path
            d="M31 15C22.163 15 15 22.163 15 31C15 39.837 22.163 47 31 47C39.837 47 47 39.837 47 31C47 22.163 39.837 15 31 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31 25V31"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31 37H31.016"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="error-content">
        <h2 className="error-title">Profile Not Found</h2>
        <p className="error-message">
          We cannot find a GitHub profile for that username.
        </p>
      </div>
    </div>
  );
};

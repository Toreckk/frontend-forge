import { qrTheme } from "./theme";
import qrCodeImage from "./assets/image-qr-code.png";
import "./QrCodeComponent.css";

const QRCodeComponent = () => {
  return (
    <main style={qrTheme} className="qr-code-main">
      <div id="qr-code-container" className="qr-card-container">
        <img
          src={qrCodeImage}
          alt="QR code directing to Frontend Mentor website"
          className="qr-image"
        />
        <div id="qr-code-text" className="qr-text-section">
          <h1 id="qr-code-title" className="qr-title">
            Improve your front-end skills by building projects
          </h1>
          <p id="qr-code-description" className="qr-description">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
};

export default QRCodeComponent;

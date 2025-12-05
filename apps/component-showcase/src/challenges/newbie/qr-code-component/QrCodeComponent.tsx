import { qrTheme } from "./theme";
import qrCodeImage from "./assets/image-qr-code.png";

const QRCodeComponent = () => {
  return (
    <main
      style={qrTheme}
      className="font-primary flex items-center justify-center bg-tertiary w-full min-h-screen"
    >
      <div
        id="qr-code-container"
        className="flex flex-col gap-300 items-center bg-white px-4 pt-4 pb-10 w-full max-w-[320px] h-auto rounded-[20px] shadow-md"
      >
        <img
          src={qrCodeImage}
          alt="QR code directing to Frontend Mentor website"
          className="w-72 h-72 rounded-[20px]"
        />
        <div
          id="qr-code-text"
          className="text-center flex flex-col gap-200 px-3"
        >
          <h1
            id="qr-code-title"
            className="text-preset-1 font-bold text-primary primary"
          >
            Improve your front-end skills by building projects
          </h1>
          <p
            id="qr-code-description"
            className="text-preset-2 tracking-p2 font-normal text-secondary"
          >
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
};

export default QRCodeComponent;

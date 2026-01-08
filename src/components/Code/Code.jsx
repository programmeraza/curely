import React from "react";
import "./Code.scss";
import { Link } from "react-router-dom";

const Code = () => {
  return (
    <>
      <div className="code">
        <div className="container">
          <div className="code__wrapper">
            <h1>Download Curely & Take Control of Your Health</h1>
            <p>
              Download on App Store | Get it on Google Play Logos of App Store &
              Play Store with QR code
            </p>
            <img className="code__img" src="./qr-code.png" alt="" />
            <div className="code__flex">
              <Link className="code__btn">
                <img src="./app-store.png" alt="" />
              </Link>
              <Link id="about" className="code__btn">
                <img src="./play-market.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Code;

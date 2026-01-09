import React from "react";
import "./Code.scss";
import { Link } from "react-router-dom";

const Code = () => {
  return (
    <>
      <div className="code">
        <div className="container">
          <div className="code__wrapper">
            <h1>Download LingvAI & Turn Weaknesses into Higher Scores</h1>
            <p>Download on App Store | Google Play</p>
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

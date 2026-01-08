import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__wrapper">
            <div className="hero__content">
              <p className="hero__text">Best Medical Service</p>
              <h1>LingvAI — IELTS Test Simulator in Your Hands.</h1>
              <p className="hero__desc">
                The only solution you need to accurately test Reading,
                Listening, Speaking and Writing skills.
              </p>
              <div className="hero__flex">
                <div className="hero__btn">
                  <img src="./app-store.png" alt="" />
                </div>
                <div className="hero__btn">
                  <img src="./play-market.png" alt="" />
                </div>
              </div>
            </div>

            <img src="./1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

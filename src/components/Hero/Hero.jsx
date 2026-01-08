import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__wrapper">
            <div className="hero__content slide-in-bottom">
              <p className="hero__text">Best Medical Service</p>
              <h1>Manage Your Health Anytime, Anywhere.</h1>
              <p className="hero__desc">
                Curely helps you book appointments, track wellness, consult
                doctors, and manage reports — all in one simple app.
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

            <img src="./phone.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

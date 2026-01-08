import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__top">
              <div className="footer__logo-flex">
                <img src="./favicon.svg" alt="" />
                <p>
                  Your personal health companion for a healthier, organized
                  life.
                </p>
              </div>
              <div className="footer__email-flex">
                <h3>Stay Updated</h3>
                <div className="footer__inp-flex">
                  <input type="email" placeholder="Enter Your Email" />
                  <button className="footer__btn">
                    Subscribe
                    <div className="footer__svg">
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6666 4.47133L11.138 4L11.6093 4.47133L11.138 4.94267L10.6666 4.47133ZM0.666647 5.138C0.489837 5.138 0.320267 5.06776 0.195242 4.94274C0.0702181 4.81771 -1.90735e-05 4.64814 -1.90735e-05 4.47133C-1.90735e-05 4.29452 0.0702181 4.12495 0.195242 3.99993C0.320267 3.8749 0.489837 3.80467 0.666647 3.80467V5.138ZM7.13798 0L11.138 4L10.1953 4.94267L6.19531 0.942666L7.13798 0ZM11.138 4.94267L7.13798 8.94267L6.19531 8L10.1953 4L11.138 4.94267ZM10.6666 5.138H0.666647V3.80467H10.6666V5.138Z"
                          fill="#151419"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="footer__line">
            </div>

            <div className="footer__bottom">
              <div className="footer__icon-flex">
                <div className="footer__icon">
                  <img src="./insta.svg" alt="" />
                  <img src="./face.svg" alt="" />
                  <img src="./twitter.svg" alt="" />
                  <img src="./in.svg" alt="" />
                </div>
                <p>
                  © 2025 Curely Inc. All rights reserved. Designed by Jabel -
                  Trexa Lab
                </p>
              </div>
              <div className="footer__nav-flex">
                <ul className="footer__ul">
                  <h3>Company</h3>
                  <a href="#">About</a>
                  <a href="#">Blog</a>
                  <a href="#">Press</a>
                </ul>
                <ul className="footer__ul">
                  <h3>Help</h3>
                  <a href="#">Support</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">FAQ</a>
                </ul>
                <ul className="footer__ul">
                  <h3>Contact Info</h3>
                  <div className="footer__email">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3333 5.00016C18.3333 4.0835 17.5833 3.3335 16.6666 3.3335H3.33329C2.41663 3.3335 1.66663 4.0835 1.66663 5.00016V15.0002C1.66663 15.9168 2.41663 16.6668 3.33329 16.6668H16.6666C17.5833 16.6668 18.3333 15.9168 18.3333 15.0002V5.00016ZM16.6666 5.00016L9.99996 9.16683L3.33329 5.00016H16.6666ZM16.6666 15.0002H3.33329V6.66683L9.99996 10.8335L16.6666 6.66683V15.0002Z"
                        fill="white"
                        fill-opacity="0.8"
                      />
                    </svg>
                    <a href="#">help@curely.app</a>
                  </div>
                  <div className="footer__location">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1.6665C6.33337 1.6665 3.33337 4.6665 3.33337 8.33317C3.33337 12.8332 9.16671 17.9165 9.41671 18.1665C9.58337 18.2498 9.83337 18.3332 10 18.3332C10.1667 18.3332 10.4167 18.2498 10.5834 18.1665C10.8334 17.9165 16.6667 12.8332 16.6667 8.33317C16.6667 4.6665 13.6667 1.6665 10 1.6665ZM10 16.4165C8.25004 14.7498 5.00004 11.1665 5.00004 8.33317C5.00004 5.58317 7.25004 3.33317 10 3.33317C12.75 3.33317 15 5.58317 15 8.33317C15 11.0832 11.75 14.7498 10 16.4165ZM10 4.99984C8.16671 4.99984 6.66671 6.49984 6.66671 8.33317C6.66671 10.1665 8.16671 11.6665 10 11.6665C11.8334 11.6665 13.3334 10.1665 13.3334 8.33317C13.3334 6.49984 11.8334 4.99984 10 4.99984ZM10 9.99984C9.08337 9.99984 8.33337 9.24984 8.33337 8.33317C8.33337 7.4165 9.08337 6.6665 10 6.6665C10.9167 6.6665 11.6667 7.4165 11.6667 8.33317C11.6667 9.24984 10.9167 9.99984 10 9.99984Z"
                        fill="white"
                        fill-opacity="0.8"
                      />
                    </svg>
                    <a href="#">Dhaka, Bangladesh</a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

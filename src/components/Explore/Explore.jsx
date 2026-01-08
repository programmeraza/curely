import React, { useEffect } from "react";
import "./Explore.scss";
import { Link } from "react-router-dom";

const ArrowIcon = () => (
  <svg
    width="16"
    height="13"
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.85125 0L15.5402 5.68895L16 6.17017L15.5402 6.65138L9.85125 12.3403L8.88881 11.3779L13.4273 6.83945H0V5.50088H13.4279L8.88881 0.962436L9.85125 0Z"
      fill="#151419"
      fillOpacity="0.8"
    />
  </svg>
);

const cards = [
  {
    type: "card",
    img: "./1.svg",
    title: "Objective 9-Band Scoring",
    text: "Receive accurate, skill-based scoring aligned with IELTS criteria to understand your real readiness level",
  },
  { type: "img", img: "./2.png" },
  {
    type: "card",
    img: "./2.svg",
    title: "Deep Skill Analytics",
    text: "Get detailed breakdowns for each section and discover which areas need the most attention to boost your score.",
  },
  {
    type: "card",
    img: "./3.svg",
    title: "Personalized Preparation Plan",
    text: "LingvAI builds a tailored improvement strategy based on your weaknesses, strengths, and performance trends.",
  },
  {
    type: "card",
    img: "./4.svg",
    title: "Speaking & Writing Feedback",
    text: "Receive expert-style feedback on fluency, grammar, coherence, vocabulary, and structure — with clear improvement tips.",
  },
  {
    type: "card",
    img: "./5.svg",
    title: "Track Measurable Progress",
    text: "Monitor score improvements over time and see exactly how your skills evolve as you prepare for the exam.",
  },
];

const Explore = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".expo__card, .expo__card-img");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="expo fade-up">
      <div className="container">
        <div className="expo__wrapper">
          <div className="expo__content">
            <h1>Train. Score. Improve. From Practice to Performance.</h1>
            <p>
              Comprehensive healthcare management designed with simplicity and
              security in mind.
            </p>
          </div>

          <div className="expo__cards">
            {cards.map((c, i) =>
              c.type === "img" ? (
                <div className="expo__card-img" key={i}>
                  <img className="expo__img" src={c.img} alt="" />
                </div>
              ) : (
                <div className="expo__card fade-up" key={i}>
                  <div className="expo__icon">
                    <img src={c.img} alt={c.title} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <Link className="expo__link" to="#">
                    Learn More
                    <ArrowIcon />
                  </Link>
                </div>
              )
            )}
          </div>

          <button className="expo__btn">
            Explore Full Features
            <div className="expo__svg">
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
  );
};

export default Explore;

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
    <div id="features" className="expo fade-up">
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
        </div>
      </div>
    </div>
  );
};

export default Explore;

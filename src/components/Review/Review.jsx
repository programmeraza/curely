import React, { useEffect } from "react";
import "./Review.scss";

const reviews = [
  {
    img: "./rafiq.png",
    name: "Azizbek Karimov",
    location: "Tashkent",
    text: "LingvAI finally showed my real band score for Speaking. The feedback was super clear and helped me fix my weak spots.",
  },
  {
    img: "./sarah.png",
    name: "Amina Askarova",
    location: "Samarkand",
    text: "I loved the Writing evaluation. It explained what I was doing wrong with coherence and vocabulary. Very helpful!",
  },
  {
    img: "./tanvir.png",
    name: "Dilshod Rakhimov",
    location: "Samarkand",
    text: "The simulation felt like the actual IELTS exam. I felt much more confident before my real test.",
  },
  {
    img: "./shabnam.png",
    name: "Irina Petrova",
    location: "Tashkent",
    text: "Scoring is honest and objective. No sugarcoating. That alone saved me time and made my prep more efficient.",
  },
  {
    img: "./mahmud.png",
    name: "Kamilla Nurmatova",
    location: "Kazan",
    text: "I always struggled with Speaking timing. LingvAI helped me practice the structure and answer faster with confidence.",
  },
  {
    img: "./jannatul.png",
    name: "Nurlan Kabylov",
    location: "Bishkek",
    text: "After two sessions I finally understood what was stopping me from getting Band 7. Worth every minute.",
  },
];

const Review = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".review__card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <>
      <div className="review fade-up">
        <div className="container">
          <div className="review__wrapper">
            <div className="review__content">
              <h1>Real People. Real Results.</h1>
              <p>Thousands of learners. One goal: Higher score.</p>
            </div>

            <div className="review__cards">
              {reviews.map((r, i) => (
                <div className="review__card fade-up" key={i}>
                  <div className="review__card-img">
                    <img src={r.img} alt={r.name} />
                    <div className="review__card-flex">
                      <h3>{r.name}</h3>
                      <p>{r.location}</p>
                    </div>
                  </div>
                  <p>{r.text}</p>
                  <img src="./star.svg" alt="rating" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;

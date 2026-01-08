import React, { useEffect } from "react";
import "./Review.scss";

const reviews = [
  {
    img: "./rafiq.png",
    name: "Rafiq Ahmed",
    location: "Chattogram",
    text: "Perfect for managing my parents' medications and appointments from one place.",
  },
  {
    img: "./sarah.png",
    name: "Sarah Khan",
    location: "Sylhet",
    text: "The telehealth feature saved me so much time. Professional doctors, great service!",
  },
  {
    img: "./tanvir.png",
    name: "Tanvir",
    location: "Sylhet",
    text: "I booked a video consultation during lunch break — no traffic, no hassle!",
  },
  {
    img: "./shabnam.png",
    name: "Shabnam",
    location: "Rajshahi",
    text: "Finally, an app that reminds me about my medicine on time. Super helpful! made it simple and fast!",
  },
  {
    img: "./mahmud.png",
    name: "Mahmud",
    location: "Barisal",
    text: "The chat with doctor feature saved me an unnecessary clinic visit.",
  },
  {
    img: "./jannatul.png",
    name: "Jannatul Ferdous",
    location: "Dhaka",
    text: "I never thought seeing a doctor could be this easy. Curely made it simple and fast!",
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
      <div className="review">
        <div className="container">
          <div className="review__wrapper">
            <div className="review__content">
              <h1>Real People. Real Results.</h1>
              <p>Thousands trust Curely for their healthcare needs</p>
            </div>

            <div className="review__cards">
              {reviews.map((r, i) => (
                <div className="review__card" key={i}>
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

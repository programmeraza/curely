import { useEffect } from "react";
import "./App.scss";
import Code from "./components/Code/Code";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Review from "./components/Review/Review";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Explore />
      <Code />
      <Review />
      <Footer />
    </>
  );
}

export default App;

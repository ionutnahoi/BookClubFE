import { SliderData } from "./data.js";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import React from "react";

const Banner = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const numberOfSlides = slides.length;

  const nextSlide = () => {
    setCurrent(current === numberOfSlides - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? numberOfSlides - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Banner;

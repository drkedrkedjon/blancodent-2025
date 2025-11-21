"use client";
import { useState, useRef } from "react";
import styles from "./heroCarousel.module.css";
import {
  ArrowFatLinesLeftIcon,
  ArrowFatLinesRightIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);
  const totalSlides = 6;

  const scrollToSlide = (direction: "prev" | "next") => {
    if (!sliderRef.current) return;

    let newSlide =
      direction === "next"
        ? (currentSlide + 1) % totalSlides
        : (currentSlide - 1 + totalSlides) % totalSlides;

    setCurrentSlide(newSlide);

    const slideWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left: slideWidth * newSlide,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.slider}>
        <ul
          role="list"
          ref={sliderRef}
        >
          <li>Slide 1</li>
          <li>Slide 2</li>
          <li>Slide 3</li>
          <li>Slide 4</li>
          <li>Slide 5</li>
          <li>Slide 6</li>
        </ul>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.navButton}
          onClick={() => scrollToSlide("prev")}
          aria-label="Previous slide"
        >
          <ArrowFatLinesLeftIcon size={32} />
        </button>
        <button
          className={styles.navButton}
          onClick={() => scrollToSlide("next")}
          aria-label="Next slide"
        >
          <ArrowFatLinesRightIcon size={32} />
        </button>
      </div>
    </div>
  );
}

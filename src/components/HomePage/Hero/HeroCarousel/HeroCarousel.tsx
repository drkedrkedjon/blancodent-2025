"use client";

import { useState, useRef } from "react";
import styles from "./heroCarousel.module.css";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);
  const totalSlides = 6; // Update this to match your number of slides

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
      <button
        className={styles.navButton}
        onClick={() => scrollToSlide("prev")}
        aria-label="Previous slide"
      >
        ‹
      </button>

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

      <button
        className={styles.navButton}
        onClick={() => scrollToSlide("next")}
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}

// import styles from "./heroCarousel.module.css";

// export default function HeroCarousel() {
//   return (
//     <div className={`narrow-grid ${styles.slider}`}>
//       <ul role="list">
//         <li>
//           <h2>Page 1</h2>
//         </li>
//         <li>
//           <h2>Page 2</h2>
//         </li>
//         <li>
//           <h2>Page 3</h2>
//         </li>
//         <li>
//           <h2>Page 4</h2>
//         </li>
//       </ul>
//     </div>
//   );
// }

"use client";
import { useState, useRef } from "react";
import { Link } from "@/i18n/navigation";
import styles from "./heroCarousel.module.css";
import {
  AlignCenterHorizontalIcon,
  ArrowFatLinesLeftIcon,
  ArrowFatLinesRightIcon,
  DotsSixIcon,
  EraserIcon,
  FirstAidIcon,
  PaintBrushIcon,
  PaintBucketIcon,
  SprayBottleIcon,
  ToothIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);
  const totalSlides = 6;

  function scrollTheSlide(slideNumber: number) {
    if (!sliderRef.current) return;

    const slideWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left: slideWidth * slideNumber,
      behavior: "smooth",
    });
  }

  const scrollToSlide = (direction: "prev" | "next") => {
    let newSlide =
      direction === "next"
        ? (currentSlide + 1) % totalSlides
        : (currentSlide - 1 + totalSlides) % totalSlides;

    setCurrentSlide(newSlide);
    scrollTheSlide(newSlide);
  };

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
    scrollTheSlide(slideNumber);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.slider}>
        <ul
          className={styles.ulOuter}
          role="list"
          ref={sliderRef}
        >
          <li>
            <div>Slide 1</div>
          </li>
          <li>
            <div>Slide 2</div>
          </li>
          <li>
            <div>Slide 3</div>
          </li>
          <li>
            <div>Slide 4</div>
          </li>
          <li>
            <div>Slide 5</div>
          </li>
          <li>
            <div>Slide 6</div>
          </li>
        </ul>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.navButton}
          onClick={() => scrollToSlide("prev")}
          aria-label="Previous slide"
        >
          <ArrowFatLinesLeftIcon />
        </button>
        {/* • */}
        <DotsSixIcon weight="bold" />
        <button
          className={styles.navButton}
          onClick={() => scrollToSlide("next")}
          aria-label="Next slide"
        >
          <ArrowFatLinesRightIcon />
        </button>
      </div>
      <div className={styles.tagLineContainer}>
        <p>
          Cualquiera pregunta. Blancodent responde.{" "}
          <Link href="/varios/cita-previa">Saber mas...</Link>
        </p>
      </div>
      <menu className={styles.menuCarousel}>
        <button
          className={styles.menuCarouselBtn}
          onClick={() => goToSlide(0)}
        >
          <PaintBrushIcon
            size={32}
            weight="duotone"
          />
          Blanqueamiento
        </button>
        <button
          className={styles.menuCarouselBtn}
          onClick={() => goToSlide(1)}
        >
          <AlignCenterHorizontalIcon
            size={32}
            weight="duotone"
          />
          Ortodoncia
        </button>
        <button
          className={styles.menuCarouselBtn}
          onClick={() => goToSlide(2)}
        >
          <ToothIcon
            size={32}
            weight="duotone"
          />
          Implantologia
        </button>
        <button
          className={styles.menuCarouselBtn}
          onClick={() => goToSlide(3)}
        >
          <FirstAidIcon
            size={32}
            weight="duotone"
          />
          Periodoncia
        </button>
        <button
          className={styles.menuCarouselBtn}
          onClick={() => goToSlide(4)}
        >
          <PaintBucketIcon
            size={32}
            weight="duotone"
          />
          Empastes
        </button>
        <button
          className={styles.menuCarouselBtn}
          onClick={() => goToSlide(5)}
        >
          <SprayBottleIcon
            size={32}
            weight="duotone"
          />
          Higiene
        </button>
      </menu>
    </div>
  );
}

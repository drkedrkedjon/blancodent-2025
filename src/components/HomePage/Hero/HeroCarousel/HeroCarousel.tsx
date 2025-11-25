"use client";
import { useState, useRef } from "react";
import { Link } from "@/i18n/navigation";
import styles from "./heroCarousel.module.css";
import {
  AlignCenterHorizontalIcon,
  ArrowFatLinesLeftIcon,
  ArrowFatLinesRightIcon,
  DotsSixIcon,
  FirstAidIcon,
  PaintBrushIcon,
  PaintBucketIcon,
  SprayBottleIcon,
  ToothIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);
  const totalSlides = 6;
  const t = useTranslations("HomePage");

  function scrollTheSlide(slideNumber: number) {
    if (!sliderRef.current) return;

    const slideWidth = sliderRef.current.offsetWidth;

    sliderRef.current.scrollTo({
      left: slideWidth * slideNumber,
      behavior: "smooth",
    });
  }

  const arrowToSlide = (direction: "prev" | "next") => {
    let newSlide =
      direction === "next"
        ? (currentSlide + 1) % totalSlides
        : (currentSlide - 1 + totalSlides) % totalSlides;

    setCurrentSlide(newSlide);
    scrollTheSlide(newSlide);
  };

  const clickToSlide = (slideNumber: number) => {
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
            <div className={styles.slideContainer}>
              <h2>{t("heroCarousel.heroSlides.slide1.h2")}</h2>
              <h3>{t("heroCarousel.heroSlides.slide1.h3")}</h3>
              <p>{t("heroCarousel.heroSlides.slide1.p")}</p>
              <Link
                className={`btn ${styles.slideBtnLink}`}
                href={"#"}
              >
                {t("heroCarousel.heroSlides.slide1.link")}
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.slideContainer}>
              <h2>{t("heroCarousel.heroSlides.slide2.h2")}</h2>
              <h3>{t("heroCarousel.heroSlides.slide2.h3")}</h3>
              <p>{t("heroCarousel.heroSlides.slide2.p")}</p>
              <Link
                className={`btn ${styles.slideBtnLink}`}
                href={"#"}
              >
                {t("heroCarousel.heroSlides.slide1.link")}
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.slideContainer}>
              <h2>{t("heroCarousel.heroSlides.slide3.h2")}</h2>
              <h3>{t("heroCarousel.heroSlides.slide3.h3")}</h3>
              <p>{t("heroCarousel.heroSlides.slide3.p")}</p>
              <Link
                className={`btn ${styles.slideBtnLink}`}
                href={"#"}
              >
                {t("heroCarousel.heroSlides.slide1.link")}
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.slideContainer}>
              <h2>{t("heroCarousel.heroSlides.slide4.h2")}</h2>
              <h3>{t("heroCarousel.heroSlides.slide4.h3")}</h3>
              <p>{t("heroCarousel.heroSlides.slide4.p")}</p>
              <Link
                className={`btn ${styles.slideBtnLink}`}
                href={"#"}
              >
                {t("heroCarousel.heroSlides.slide1.link")}
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.slideContainer}>
              <h2>{t("heroCarousel.heroSlides.slide5.h2")}</h2>
              <h3>{t("heroCarousel.heroSlides.slide5.h3")}</h3>
              <p>{t("heroCarousel.heroSlides.slide5.p")}</p>
              <Link
                className={`btn ${styles.slideBtnLink}`}
                href={"#"}
              >
                {t("heroCarousel.heroSlides.slide1.link")}
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.slideContainer}>
              <h2>{t("heroCarousel.heroSlides.slide6.h2")}</h2>
              <h3>{t("heroCarousel.heroSlides.slide6.h3")}</h3>
              <p>{t("heroCarousel.heroSlides.slide6.p")}</p>
              <Link
                className={`btn ${styles.slideBtnLink}`}
                href={"#"}
              >
                {t("heroCarousel.heroSlides.slide1.link")}
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.navButton}
          onClick={() => arrowToSlide("prev")}
          aria-label={t("heroCarousel.navButtonLeftAlt")}
        >
          <ArrowFatLinesLeftIcon />
        </button>
        {/* • */}
        <DotsSixIcon weight="bold" />
        <button
          className={styles.navButton}
          onClick={() => arrowToSlide("next")}
          aria-label={t("heroCarousel.navButtonRightAlt")}
        >
          <ArrowFatLinesRightIcon />
        </button>
      </div>
      <div className={styles.tagLineContainer}>
        <p>
          {t("heroCarousel.tagLine.p")}{" "}
          <Link href="/varios/cita-previa">
            {t("heroCarousel.tagLine.link")}
          </Link>
        </p>
      </div>
      <menu className={styles.menuCarousel}>
        <div className={styles.leftCollumn}>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(0)}
          >
            <PaintBrushIcon
              size={32}
              weight="duotone"
            />
            {t("heroCarousel.heroMenuBtns.1")}
          </button>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(1)}
          >
            <AlignCenterHorizontalIcon
              size={32}
              weight="duotone"
            />
            {t("heroCarousel.heroMenuBtns.2")}
          </button>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(2)}
          >
            <ToothIcon
              size={32}
              weight="duotone"
            />
            {t("heroCarousel.heroMenuBtns.3")}
          </button>
        </div>
        <div className={styles.rightCollumn}>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(3)}
          >
            <FirstAidIcon
              size={32}
              weight="duotone"
            />
            {t("heroCarousel.heroMenuBtns.4")}
          </button>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(4)}
          >
            <PaintBucketIcon
              size={32}
              weight="duotone"
            />
            {t("heroCarousel.heroMenuBtns.5")}
          </button>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(5)}
          >
            <SprayBottleIcon
              size={32}
              weight="duotone"
            />
            {t("heroCarousel.heroMenuBtns.6")}
          </button>
        </div>
      </menu>
    </div>
  );
}

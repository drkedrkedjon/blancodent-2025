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
              <h2>Blanqueamiento Dental</h2>
              <h3>Dientes blancos, boca sana y sonrisa feliz.</h3>
              <p>
                Este tratamiento dental permite solucionar las alteraciones en
                el color de los dientes. La boca es una de las partes del cuerpo
                que más refleja la personalidad y más dice de una persona. Tener
                una sonrisa sana y unos dientes blancos es un deseo que todos
                tenemos. Por tanto, para mostrar tu mejor versión, no dudes en
                realizar el mejor blanqueamiento dental con Blancodent, tu
                dentista en Las Palmas.
              </p>
              <Link
                className={`btnLink`}
                href={"#"}
              >
                Más informacion
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.slideContainer}>
              <h2>Ortodoncia invisible</h2>
              <h3>Ya no hay escusas para no sonreir.</h3>
              <p>
                La ortodoncia te permite corregir la mala posición de los
                dientes. Es mucho más que una solución estética, más que una
                simple alineación de los dientes. Se consigue la vida saludable
                de los dientes, encías y la mordida correcta, proporcionando así
                el bienestar de tu boca.
              </p>
              <Link
                className={`btnLink`}
                href={"#"}
              >
                Más informacion
              </Link>
            </div>
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
          onClick={() => arrowToSlide("prev")}
          aria-label="Previous slide"
        >
          <ArrowFatLinesLeftIcon />
        </button>
        {/* • */}
        <DotsSixIcon weight="bold" />
        <button
          className={styles.navButton}
          onClick={() => arrowToSlide("next")}
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
        <div className={styles.leftCollumn}>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(0)}
          >
            <PaintBrushIcon
              size={32}
              weight="duotone"
            />
            Blanqueamiento
          </button>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(1)}
          >
            <AlignCenterHorizontalIcon
              size={32}
              weight="duotone"
            />
            Ortodoncia
          </button>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(2)}
          >
            <ToothIcon
              size={32}
              weight="duotone"
            />
            Implantologia
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
            Periodoncia
          </button>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(4)}
          >
            <PaintBucketIcon
              size={32}
              weight="duotone"
            />
            Empastes
          </button>
          <button
            className={styles.menuCarouselBtn}
            onClick={() => clickToSlide(5)}
          >
            <SprayBottleIcon
              size={32}
              weight="duotone"
            />
            Higiene
          </button>
        </div>
      </menu>
    </div>
  );
}

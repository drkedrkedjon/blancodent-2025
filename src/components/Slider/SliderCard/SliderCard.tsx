import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useId } from "react";
import styles from "./SliderCard.module.css";

interface SliderCardProps {
  img: StaticImageData | string;
  link: string;
  title: string;
  content: string;
  alt: string;
}

export default function SliderCard({
  img,
  link,
  title,
  content,
  alt,
}: SliderCardProps) {
  const descriptionId = useId();

  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        href={link}
        aria-label={title}
        aria-describedby={descriptionId}
      >
        <div className={styles.titleContainer}>
          <Image
            aria-hidden={true}
            src={img}
            alt={alt}
          />
          <h3 className={styles.h3}>{title}</h3>
        </div>
        <div className={styles.contentContainer}>
          <p
            id={descriptionId}
            className={styles.p}
          >
            {content}
          </p>
        </div>
      </Link>
    </div>
  );
}

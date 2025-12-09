import image from "@/assets/images/personal.jpg";
import Image from "next/image";
import Link from "next/link";
import styles from "./SliderCard.module.css";

export default function SliderCard() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Image
          src={image}
          alt=""
        />
        <h3 className={styles.h3}>Personal</h3>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.p}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ullam,
          dolor distinctio adipisci placeat optio beatae eius? Non, dolorem
          amet. Totam earum ipsam ea quae tempore aut dolorum laboriosam
          suscipit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Iure ullam, dolor distinctio adipisci placeat optio beatae eius? Non,
          dolorem amet. Totam earum ipsam ea quae tempore aut dolorum laboriosam
          suscipit.
        </p>
        <Link
          className={styles.link}
          href={"#"}
        >
          Leer mas...
        </Link>
      </div>
    </div>
  );
}

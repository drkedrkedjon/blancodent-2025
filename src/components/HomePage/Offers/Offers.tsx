import backgroundImg from "@/assets/images/home-page/offer-background.jpg";
import Image from "next/image";
import styles from "./offers.module.css";

import { ReactNode } from "react";

export default function Offers({ children }: { children: ReactNode }) {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.h2}>Últimas ofertas</h2>
        <div className={styles.decorativeLine} />
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.containerImg}
          src={backgroundImg}
          alt="Dibujo de peces en el mar"
          aria-hidden={true}
        />
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}

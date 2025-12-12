import { getTranslations } from "next-intl/server";
import styles from "./opinions.module.css";

export default async function Opinions() {
  const t = await getTranslations("HomePage.opinions");

  return (
    <section className={`${styles.container}`}>
      <div>
        <h2>{t("title")}</h2>
        <div className={styles.decorativeLine} />
      </div>
      <div className={styles.cardContainer}>Sasa</div>
    </section>
  );
}

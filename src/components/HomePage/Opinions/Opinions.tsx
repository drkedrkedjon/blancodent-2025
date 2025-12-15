import { getTranslations } from "next-intl/server";
import styles from "./opinions.module.css";

export default async function Opinions() {
  const t = await getTranslations("HomePage.opinions");

  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.opinionsTitle}>{t("title")}</h2>
        <div className={styles.decorativeLine} />
      </div>
      <div className={styles.opinionsContainer}>
        <article className={styles.firstOpinionArticle}>
          <header className={styles.firstOpinionHeader}>
            <h3>Jordan</h3>
            <span>*****</span>
          </header>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ab
              officiis. Consequuntur, pariatur ullam tempore fugiat sit officiis
              dignissimos explicabo consequatur vel sint expedita voluptatem
              ratione repellendus excepturi quam odio.
            </p>
          </blockquote>
        </article>
        <div className={styles.otherOpinionsContainer}>
          sasa
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>
  );
}

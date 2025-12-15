import img from "@/assets/images/home-page/porque-card/cardimg-1.png";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
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
              dignissimos explicabo consequatur vel sint
            </p>
          </blockquote>
        </article>
        <div className={styles.otherOpinionsContainer}>
          <article
            className={`${styles.secondOpinionArticle} ${styles.bgColor1}`}
          >
            <Image
              src={img}
              alt=""
            />
            <header>
              <h3>Matt</h3>
              <span>*****</span>
            </header>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, possimus quisquam aperiam deserunt provident facilis
                sit odio accusamus, ea molestias tempore sint
              </p>
            </blockquote>
          </article>
          <article
            className={`${styles.secondOpinionArticle} ${styles.bgColor2}`}
          >
            <Image
              src={img}
              alt=""
            />
            <header>
              <h3>Brendann</h3>
              <span>*****</span>
            </header>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, possimus quisquam aperiam deserunt provident facilis
                sit odio accusamus, ea molestias tempore sint
              </p>
            </blockquote>
          </article>
          <article
            className={`${styles.secondOpinionArticle} ${styles.bgColor3}`}
          >
            <Image
              src={img}
              alt=""
            />
            <header>
              <h3>Maria</h3>
              <span>*****</span>
            </header>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, possimus quisquam aperiam deserunt provident facilis
                sit odio accusamus, ea molestias tempore sint
              </p>
            </blockquote>
          </article>
          <div className={styles.thirdOpinionsContainer}>
            <article
              className={`${styles.secondOpinionArticle} ${styles.bgColor4}`}
            >
              <header>
                <h3>Maria</h3>
                <span>*****</span>
              </header>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, possimus quisquam aperiam deserunt provident
                  facilis sit odio accusamus, ea molestias tempore sint
                </p>
              </blockquote>
            </article>
            <article
              className={`${styles.secondOpinionArticle} ${styles.bgColor5}`}
            >
              <header>
                <h3>Maria</h3>
                <span>*****</span>
              </header>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, possimus quisquam aperiam deserunt provident
                  facilis sit odio accusamus, ea molestias tempore sint
                </p>
              </blockquote>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

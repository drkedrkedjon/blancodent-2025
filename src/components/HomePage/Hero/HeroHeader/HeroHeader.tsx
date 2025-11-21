import { ArrowFatRightIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./heroHeader.module.css";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <div className={styles.titleGroup}>
        <h1 className={styles.title}>
          <span className={styles.dentalClinic}>{t("hero.titleSmall")}</span>
          <br />
          {t("hero.titleBig")}
        </h1>
        <p className={styles.tagline}>{t("hero.tagLine")}</p>
        <address className={styles.address}>{t("hero.address")}</address>
      </div>
      <div className={styles.actionGroup}>
        <a
          href="tel:+34928292455"
          className={`btn ${styles.actionBtn}`}
        >
          {t("hero.actionBtn")}
        </a>
        <Link href="/varios/cita-previa">
          {t("hero.actionLink")}
          <ArrowFatRightIcon
            weight="duotone"
            className={styles.rightArrow}
          />
        </Link>
      </div>
    </div>
  );
}

import styles from "./MenuDrawer.module.css";
import { useEffect } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
// import { Link } from "@/i18n/routing";

interface MenuDrawerProps {
  handleCloseDrawer: () => void;
}

export default function MenuDrawer({ handleCloseDrawer }: MenuDrawerProps) {
  const t = useTranslations("MainMenu");

  // This is an alternative way to focus to the last focused element (before the drawer was opened)
  // useEffect(() => {
  //   const focusedElementBeforeModal = document.activeElement as HTMLElement;
  //   return () => {
  //     focusedElementBeforeModal.focus();
  //   };
  // }, []);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        handleCloseDrawer();
      }
    }

    window.addEventListener("keyup", handleEscapeKey);
    return () => {
      window.removeEventListener("keyup", handleEscapeKey);
    };
  }, [handleCloseDrawer]);

  return (
    <div className={styles.navContainer}>
      <div
        className={styles.navBackground}
        onClick={handleCloseDrawer}
      />
      <FocusLock returnFocus={true}>
        <RemoveScroll>
          <div className={styles.navDrawer}>
            <button
              className={styles.closeBtn}
              onClick={handleCloseDrawer}
              aria-describedby="close-btn-label"
            >
              <span
                className="visually-hidden"
                id="close-btn-label"
              >
                {t("closeMenuBtn")}
              </span>
              <X
                aria-hidden="true"
                weight="bold"
              />
            </button>
            <div className={styles.innerContainer}>
              {/* <div>
                <ul role="list">
                  <li>
                    <Link href="/location">{t("quickLinksLocation")}</Link> •{" "}
                  </li>
                  <li>
                    <Link href="/contact">{t("quickLinksContact")}</Link> •{" "}
                  </li>
                  <li>
                    <Link href="tel:+34928292455">{t("quickLinksTel")}</Link>
                  </li>
                </ul>
              </div> */}
              <div
                role="group"
                aria-labelledby="nav-links-group-label"
                className={styles.accordion}
              >
                <span
                  id="nav-links-group-label"
                  className="visually-hidden"
                >
                  {t("disclosureGroupLabel")}
                </span>
                <details className={styles.details}>
                  <summary className={styles.summary}>Our Services</summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Higiene</li>
                    <li>Protesis</li>
                    <li>Blanqueamiento</li>
                  </ul>
                </details>
                <details className={styles.details}>
                  <summary className={styles.summary}>About the clinic</summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Higiene</li>
                    <li>Protesis</li>
                    <li>Blanqueamiento</li>
                  </ul>
                </details>
                <details className={styles.details}>
                  <summary className={styles.summary}>
                    Articles And News
                  </summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Higiene</li>
                    <li>Protesis</li>
                    <li>Blanqueamiento</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}

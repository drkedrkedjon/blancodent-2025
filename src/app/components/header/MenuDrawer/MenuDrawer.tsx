import styles from "./MenuDrawer.module.css";
import { useEffect } from "react";
import { EyeClosed } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

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
            <div
              role="group"
              aria-labelledby="nav-group-label"
              className={styles.navLinks}
            >
              <span
                id="nav-group-label"
                className="visually-hidden"
              >
                {t("disclosureGroupLabel")}
              </span>
              <details className={styles.details}>
                <summary className={styles.summary}>Our Services</summary>
                <ul role="list">
                  <li className={styles.navLinks}>Implantologia</li>
                  <li>Higiene</li>
                  <li>Protesis</li>
                  <li>Blanqueamiento</li>
                </ul>
              </details>

              <details className={styles.details}>
                <summary className={styles.summary}>About the clinic</summary>
                <ul role="list">
                  <li className={styles.navLinks}>Implantologia</li>
                  <li>Higiene</li>
                  <li>Protesis</li>
                  <li>Blanqueamiento</li>
                </ul>
              </details>

              <details className={styles.details}>
                <summary className={styles.summary}>Articles And News</summary>
                <ul role="list">
                  <li className={styles.navLinks}>Implantologia</li>
                  <li>Higiene</li>
                  <li>Protesis</li>
                  <li>Blanqueamiento</li>
                </ul>
              </details>
            </div>
            <button
              aria-hidden="true"
              className={styles.closeBtn}
              onClick={handleCloseDrawer}
            >
              <EyeClosed weight="bold" />
              {t("closeMenuBtn")}
            </button>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}

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
            <div className={styles.navLinks}>
              <ul role="list">
                <li>
                  <details className={styles.details}>
                    <summary className={styles.summary}>Servicios</summary>
                    <ul role="list">
                      <li className={styles.navLinks}>Implantologia</li>
                      <li>Higiene</li>
                      <li>Protesis</li>
                      <li>Blanqueamiento</li>
                    </ul>
                  </details>
                </li>{" "}
                <li>
                  <details className={styles.details}>
                    <summary className={styles.summary}>Articulos</summary>
                    <ul role="list">
                      <li className={styles.navLinks}>Implantologia</li>
                      <li>Higiene</li>
                      <li>Protesis</li>
                      <li>Blanqueamiento</li>
                    </ul>
                  </details>
                </li>{" "}
                <li>
                  <details className={styles.details}>
                    <summary className={styles.summary}>Contacto</summary>
                    <ul role="list">
                      <li className={styles.navLinks}>Implantologia</li>
                      <li>Higiene</li>
                      <li>Protesis</li>
                      <li>Blanqueamiento</li>
                    </ul>
                  </details>
                </li>
              </ul>
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

import styles from "./MenuDrawer.module.css";
import { useEffect, useState } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { Link } from "@/i18n/routing";

interface MenuDrawerProps {
  handleCloseDrawer: () => void;
}

export default function MenuDrawer({ handleCloseDrawer }: MenuDrawerProps) {
  const t = useTranslations("MainMenu");
  const [openedDetails, setOpenedDetails] = useState<number | null>(null);

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

  function handleOpenDetails(
    e: React.MouseEvent<HTMLElement>,
    id: number
  ): void {
    e.preventDefault();
    setOpenedDetails((prev) => (prev === id ? null : id));
  }

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
              <ul
                className={styles.quickLinks}
                role="list"
              >
                <li>
                  <Link href="/contact">Appointment</Link> •{""}
                </li>
                <li>
                  <Link href="tel:+34928292455">Call us</Link>
                </li>
              </ul>

              <div
                // ref={detailsRef}
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
                <details
                  open={openedDetails === 0}
                  className={styles.details}
                >
                  <summary
                    onClick={(e) => handleOpenDetails(e, 0)}
                    className={styles.summary}
                  >
                    Our Services
                  </summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Higiene</li>
                    <li>Protesis</li>
                    <li>Blanqueamiento</li>
                    <li>Implantologia</li>
                    <li>Higiene</li>
                    <li>Protesis</li>
                    <li>Blanqueamiento</li>
                    <li>Blanqueamiento</li>
                  </ul>
                </details>
                <details
                  open={openedDetails === 1}
                  className={styles.details}
                >
                  <summary
                    onClick={(e) => handleOpenDetails(e, 1)}
                    className={styles.summary}
                  >
                    About the clinic
                  </summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Higiene</li>
                    <li>Protesis</li>
                    <li>Blanqueamiento</li>
                  </ul>
                </details>
                <details
                  open={openedDetails === 2}
                  className={styles.details}
                >
                  <summary
                    onClick={(e) => handleOpenDetails(e, 2)}
                    className={styles.summary}
                  >
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

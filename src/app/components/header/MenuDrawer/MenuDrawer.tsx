import styles from "./MenuDrawer.module.css";
import { useEffect, useState } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import smallMap from "./assets/small-map.jpg";

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
            <div className={styles.innerContainer}>
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
              <div className={styles.location}>
                <h2>Where to find us</h2>
                <address>
                  <p>
                    Address:
                    <br />
                    Av. Mesa y López, 1 - 1ª izq.
                    <br />
                    35006 Las Palmas de G.C.
                    <br />
                    Islas Canarias, España.
                  </p>
                </address>
                <Image
                  src={smallMap}
                  alt="Map showing the location of the clinic"
                />
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/Cl%C3%ADnica+Dental+Blancodent/@28.134669,-15.429525,17z/data=!4m2!3m1!1s0x0:0x9293d54eccbd51c?hl=en"
                >
                  Open in Google Maps
                </Link>{" "}
                <br />
                <Link
                  target="_blank"
                  href="https://maps.apple.com/maps?address=Av%20Mesa%20y%20L%C3%B3pez,%201%20-%201%C2%AA%20izquierda,%2035006%20Las%20Palmas%20de%20Gran%20Canaria,%20Las%20Palmas,%20Las%20Palmas,%20Spain&auid=4569860911891010439&ll=28.134679,-15.429491&lsp=9902&q=Cl%C3%ADnica%20Dental%20Blancodent&t=m"
                >
                  Open in Apple Maps
                </Link>
              </div>
              <div className={styles.containerQuery}>
                <div className={styles.info}>
                  <div className={styles.contact}>
                    <h2>How to contact us</h2>
                    <p>
                      You can make an appointment or ask any question using our
                      contact form
                    </p>
                    <p>
                      Or you can call us directly in our working hours or leave
                      voice message here: Call us
                    </p>
                  </div>
                  <div className={styles.timetable}>
                    <h2>Opening Hours</h2>
                    <p>
                      Lunes: 09:30h - 16:00h Martes: 14:00 - 20:00h Miércoles:
                      09:30h - 16:00h Jueves: 14:00 - 20:00h Viernes: 09:30h -
                      16:00h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}

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
                <Link href="/contacto">Appointment</Link> •{""}
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
                    Servicios:
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/implantologia"
                      >
                        Implantología
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/ortodoncia"
                      >
                        Ortodoncia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/periodoncia"
                      >
                        Periodoncia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/blanqueamiento-dental"
                      >
                        Blanqueamiento Dental
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/bruxismo-o-rechinchar-de-dientes"
                      >
                        Bruxismo o rechinchar de dientes
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/odontologia-conservadora"
                      >
                        Odontologia Conservadora
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/endodoncia"
                      >
                        Endodoncia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/protesis-dentales"
                      >
                        Prótesis dentales
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/higiene-dental"
                      >
                        Higiene dental
                      </Link>
                    </li>
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
                    Así Somos:
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/ubicacion"
                      >
                        Ubicación
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/transporte"
                      >
                        Transporte
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/los-horarios"
                      >
                        Los horarios
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/las-imagenes"
                      >
                        Las imágenes
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/el-personal"
                      >
                        El personal
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/financiacion"
                      >
                        Financiación
                      </Link>
                    </li>
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
                    Artículos:
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/tu-propio-diente-como-biomaterial"
                      >
                        Tu propio diente como biomaterial
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/laser-dental"
                      >
                        Láser dental
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/anestesia"
                      >
                        Anestesia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/para-los-peques"
                      >
                        Para los Peques
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/para-los-fumadores"
                      >
                        Para los fumadores
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/mal-aliento"
                      >
                        Mal aliento
                      </Link>
                    </li>
                  </ul>
                </details>
                <details
                  open={openedDetails === 3}
                  className={styles.details}
                >
                  <summary
                    onClick={(e) => handleOpenDetails(e, 3)}
                    className={styles.summary}
                  >
                    Varios:
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/la-salud-esta-navidad"
                      >
                        La salud esta navidad
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/preguntas-frecuentes"
                      >
                        Preguntas frecuentes
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/ofertas-continuas"
                      >
                        Ofertas continuas
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/contacto"
                      >
                        Cita Previa
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/nota-legal"
                      >
                        Nota legal
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/covid-19"
                      >
                        Covid-19
                      </Link>
                    </li>
                  </ul>
                </details>
              </div>
              <div className={`${styles.location} flow`}>
                <h2>Where to find us:</h2>
                <address>
                  <p>
                    <strong>Address:</strong>
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
                    <h2>How to contact us:</h2>
                    <p>
                      You can make an appointment or ask any question using our{" "}
                      <Link href="/contacto">Contact Form</Link>
                    </p>
                    <p>
                      Or, if you prefer, you can call us directly during our
                      working hours or leave a voice message here:{" "}
                      <Link href="tel:+34928292455">Call us</Link>
                    </p>
                  </div>
                  <div className={styles.timetable}>
                    <h2>Opening Hours:</h2>
                    <p>
                      <strong>Monday:</strong> 09:30 h - 16:00 h <br />
                      <strong>Tuesday:</strong> 14:00 h - 20:00 h <br />
                      <strong>Wednesday:</strong> 09:30 h - 16:00 h <br />
                      <strong>Thursday:</strong> 14:00 h - 20:00 h <br />
                      <strong>Friday:</strong> 09:30 h - 16:00 h <br />
                      <strong>Saturday & Sunday:</strong> Closed
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

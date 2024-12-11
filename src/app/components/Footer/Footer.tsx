import styles from "./Footer.module.css";
import { Link } from "@/i18n/routing";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className={`${styles.footer} wide-grid `}>
      <div className={styles.cardsContainer}>
        <div className={styles.boxOne}>
          <nav
            className={styles.navLinks}
            aria-labelledby="nav-label"
          >
            <h2 id="nav-label">Enlaces</h2>
            <ul role="list">
              <li>
                <Link href="/">Página de inicio</Link>
              </li>
              <li>
                <Link href="/varios/preguntas-frecuentes">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/varios/ofertas-continuas">Últimas ofertas</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
              <li>
                <Link href="tel:+34928292455">Llámanos</Link>
              </li>
            </ul>
          </nav>
          <address>
            <h2>Dirección</h2>
            <p>
              Av. Mesa y López, 1 - 1ª izq.
              <br />
              35006, Las Palmas de G.C.
              <br />
              Islas Canarias, España.
            </p>
            <p>
              <strong>Redes sociales:</strong>
            </p>
            <ul
              className={styles.socialNetworks}
              role="list"
            >
              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/clinica.dental.blancodent.las.palmas/"
                >
                  <FacebookLogo weight="duotone" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/blancodentclinicadental_gc/"
                >
                  <InstagramLogo weight="duotone" />
                </Link>
              </li>
            </ul>
          </address>
        </div>
        <div className={styles.boxTwo}>
          <div>
            <h2>Horarios</h2>
            <p>
              <strong>Lunes:</strong>
              <br />
              09:30 - 16:00.
            </p>
            <p>
              <strong>Martes:</strong>
              <br />
              14:00 - 20:00.
            </p>
            <p>
              <strong>Miércoles:</strong>
              <br />
              09:30 - 16:00.
            </p>
            <p>
              <strong>Jueves:</strong>
              <br />
              14:00 - 20:00.
            </p>
            <p>
              <strong>Viernes:</strong>
              <br />
              09:30 - 16:00.
            </p>
          </div>
          <div>
            <h2>Newsletter</h2>
            <p>
              Suscríbete a nuestro newsletter para recibir ofertas y descuentos
              exclusivos no mas que cuatro veces al año.
            </p>
            <Link
              className="btnLink"
              href="https://mailchi.mp/blancodent.com/blancodent-web"
            >
              Suscribirse
            </Link>
          </div>
        </div>
      </div>
      <div className={`narrow-grid ${styles.notaLegalContainer}`}>
        <h3>Condiciones del uso del servicio - página web</h3>
        <p>
          La información de este medio no puede sustituir un servicio de
          atención medica directa, así como tampoco se hará ninguna
          recomendación sobre productos, técnicas, fármacos , etc… La
          utilización de este servicio se lleva a cabo bajo la propia
          responsabilidad del usuario.
        </p>
        <Link href="/varios/nota-legal">Nota legal</Link>
      </div>
    </footer>
  );
}

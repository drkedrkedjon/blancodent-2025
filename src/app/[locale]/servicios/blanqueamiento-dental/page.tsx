import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

interface ServiciosLayoutProps {
  params: Promise<{ locale: string }>;
}

export default async function BlanqueamientoDental({
  params,
}: ServiciosLayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Dynamic import based on locale
  const { metadata, default: Content } = await import(
    locale && `./markdown/content-${locale}.mdx`
  );

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>{metadata.title}</h1>
        <p className={styles.subTitle}>{metadata.subTitle}</p>
        <p className={styles.date}>Fecha publicacion: {metadata.fecha}</p>
      </header>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <Content />
      </div>
      <aside className={styles.aside}>
        <h4>Implants</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint
          omnis tempore enim voluptatibus tempora laborum! Nostrum atque
          repellendus non qui sit. Ratione accusamus nam a corporis porro odio
          laboriosam?
        </p>
        <br />
        <h4>Bruxismo</h4>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit id
          temporibus adipisci obcaecati quos doloribus quisquam aliquam ab
          beatae tempore qui est atque impedit nesciunt minima dignissimos
          facere voluptates?
        </p>
        <br />
        <h4>Ortodoncia</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit id
          temporibus adipisci obcaecati quos doloribus quisquam aliquam ab
          beatae tempore qui est atque impedit nesciunt minima dignissimos
          facere voluptates?
        </p>
      </aside>
    </article>
  );
}

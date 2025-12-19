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
      <aside className={styles.aside}>aside</aside>
    </article>
  );
}

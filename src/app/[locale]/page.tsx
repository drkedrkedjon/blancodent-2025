import Hero from "@/components/HomePage/Hero/Hero/Hero";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Enable static rendering in next-intl
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  return (
    <main
      className="wide-grid"
      id="main"
      tabIndex={-1}
    >
      <Hero />
      {/* <div>
        <h1>{t("title")}</h1>
        <h2>{t("title")}</h2>
        <h3>{t("title")}</h3>
        <h4>{t("title")}</h4>
        <p>Sasha es un pendejon de cojones</p>

        <Link href="/about">{t("about")}</Link>
      </div> */}
    </main>
  );
}

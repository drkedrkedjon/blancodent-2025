import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

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
      id="main"
      tabIndex={-1}
    >
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </main>
  );
}

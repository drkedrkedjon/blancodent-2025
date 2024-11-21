import LangSwitcherSelect from "@/app/components/header/LangSwitcherSelect";
import { useLocale, useTranslations } from "next-intl";

export default function LangSwitcher() {
  const t = useTranslations("LangSwitcher");
  const locale = useLocale();

  return (
    <LangSwitcherSelect>
      <option value="en">English</option>
      <option value="es">Español</option>
    </LangSwitcherSelect>
  );
}

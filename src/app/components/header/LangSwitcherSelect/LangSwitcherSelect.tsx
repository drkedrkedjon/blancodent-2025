"use client";
import React, { ChangeEvent, ReactNode } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LangSwitcherSelect({
  children,
  defaultValue,
  label,
}: {
  children: ReactNode;
  defaultValue: string;
  label: string;
}) {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  function handleLangChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLanguage = event.target.value as string;
    // @ts-expect-error -- Expected error...
    router.replace({ pathname, params }, { locale: nextLanguage });
  }

  return (
    <>
      <label
        htmlFor="lang-switcher"
        className="visually-hidden"
      >
        {label}
      </label>
      <select
        id="lang-switcher"
        defaultValue={defaultValue}
        onChange={handleLangChange}
      >
        {children}
      </select>
    </>
  );
}

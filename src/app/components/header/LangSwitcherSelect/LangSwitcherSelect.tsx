"use client";
import styles from "./LangSwitcherSelect.module.css";
import React, { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

export default function LangSwitcherSelect({
  children,
  defaultValue,
  label,
}: {
  children: ReactNode;
  defaultValue: string;
  label: string;
}) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  function handleLangChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLanguage = event.target.value as string;
    startTransition(() =>
      // @ts-expect-error -- Expected error...
      router.replace({ pathname, params }, { locale: nextLanguage })
    );
  }

  return (
    <div className={styles.container}>
      <label
        htmlFor="lang-switcher"
        className="visually-hidden"
      >
        {label}
      </label>
      <select
        id="lang-switcher"
        className={`${styles.select} ${isPending && styles.pending}`}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={handleLangChange}
      >
        {children}
      </select>
      <CaretDown weight="fill" />
    </div>
  );
}

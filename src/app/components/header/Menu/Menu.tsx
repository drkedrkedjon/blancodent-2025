"use client";
import styles from "./Menu.module.css";
import { List } from "@phosphor-icons/react/dist/ssr";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("MainMenu");

  function handleOpenDrawer(): void {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      aria-labelledby="nav-label"
      className={styles.container}
    >
      <span
        hidden
        id="nav-label"
      >
        {t("navLabel")}
      </span>
      <button
        onClick={handleOpenDrawer}
        className={styles.button}
        aria-labelledby="btn-name"
        aria-expanded={isOpen}
      >
        <span
          hidden
          id="btn-name"
        >
          {t("openMenuBtn")}
        </span>
        <List
          aria-hidden="true"
          weight="bold"
        />
      </button>
      {isOpen && <MenuDrawer handleCloseDrawer={handleOpenDrawer} />}
    </nav>
  );
}

"use client";
import styles from "./Menu.module.css";
import { List } from "@phosphor-icons/react/dist/ssr";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenDrawer(): void {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.container}>
      <button
        onClick={handleOpenDrawer}
        className={styles.button}
      >
        <List weight="bold" />
      </button>
      {isOpen && <MenuDrawer handleCloseDrawer={handleOpenDrawer} />}
    </nav>
  );
}

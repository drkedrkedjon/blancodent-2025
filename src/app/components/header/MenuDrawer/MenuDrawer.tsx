import styles from "./MenuDrawer.module.css";
import { useEffect } from "react";

interface MenuDrawerProps {
  handleCloseDrawer: () => void;
}

export default function MenuDrawer({ handleCloseDrawer }: MenuDrawerProps) {
  useEffect(() => {
    const focusedElementBeforeModal = document.activeElement as HTMLElement;
    return () => {
      focusedElementBeforeModal.focus();
    };
  }, []);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBackground} />
      <div className={styles.navDrawer}>
        <div className={styles.navLinks}>
          <a href="#">Home</a>
        </div>
        <button onClick={handleCloseDrawer}>Close</button>
      </div>
    </div>
  );
}

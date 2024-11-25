import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
  );
}

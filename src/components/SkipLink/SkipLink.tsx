import styles from "./SkipLink.module.css";
import { Link } from "@/i18n/navigation";

export default function SkipLink({
  link,
  content,
}: {
  link: string;
  content: string;
}) {
  return (
    <Link
      id={styles.skipLink}
      className={styles.visuallyHidden}
      href={`#${link}`}
    >
      {content}
    </Link>
  );
}

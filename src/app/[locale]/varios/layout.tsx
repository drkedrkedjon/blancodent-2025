import styles from "./layout.module.css";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default async function ServiciosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      id="main"
      tabIndex={-1}
      className={`${styles.container} wide-grid`}
    >
      {children}
    </main>
  );
}

import { ReactNode } from "react";

export default function ServiciosLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <h1>Layout H1</h1>
      <h3>Layout H3</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        temporibus consequuntur suscipit atque autem earum laboriosam.
        Recusandae eos unde hic quasi soluta quibusdam sapiente, blanditiis,
        consequuntur ullam, odio nostrum quos?
      </p>
      {children}
    </section>
  );
}

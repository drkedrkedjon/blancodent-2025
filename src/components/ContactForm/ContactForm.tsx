// export default function ContactForm() {
//   return <h2>Contact Form</h2>;
// }
"use client";
import { useTranslations } from "next-intl";
import type { SubmitEvent } from "react";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function Formulario() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const t = useTranslations("Formulario");

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    // THIS IS NEW mailjet SHIT, HOPE IT WORKS NOW - IT DOES...
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/mailjet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact-form"
      className={styles.container}
    >
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <label
          className={styles.label}
          htmlFor="name"
        >
          Nombre:
        </label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={styles.input}
          type="text"
          name="Nombre"
          id="name"
          placeholder={t("nombrePlhol")}
        />
        <label
          className={styles.label}
          htmlFor="email"
        >
          Email:
        </label>
        <input
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={styles.input}
          type="email"
          id="email"
          name="Email"
          placeholder={t("emailPlhol")}
        />
        <label
          className={styles.label}
          htmlFor="message"
        >
          Mensaje:
        </label>
        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
        ></input>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={styles.input}
          name="Mensaje"
          id="message"
          cols={30}
          rows={6}
          placeholder={t("mensajePlhol")}
        />
        <p className={styles.formMessage}>{status}</p>
        <button className={styles.button}>{t("btnEnviar")}</button>
      </form>
    </section>
  );
}

"use client";

import { useState } from "react";
import { restaurant } from "../content";
import styles from "./contact.module.css";

export default function ReservationForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const date = data.get("date");
    const time = data.get("time");
    const guests = data.get("guests");
    const message = data.get("message");
    const phone = data.get("phone");

    const subject = `Réservation — ${name} (${guests} pers., ${date} ${time})`;
    const body = [
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Date souhaitée : ${date}`,
      `Heure souhaitée : ${time}`,
      `Nombre de personnes : ${guests}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${restaurant.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          Nom
          <input name="name" type="text" required placeholder="Votre nom" />
        </label>
        <label className={styles.field}>
          Téléphone
          <input name="phone" type="tel" required placeholder="06 12 34 56 78" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          Date
          <input name="date" type="date" required />
        </label>
        <label className={styles.field}>
          Heure
          <input name="time" type="time" required />
        </label>
        <label className={styles.field}>
          Personnes
          <input name="guests" type="number" min="1" max="20" defaultValue="2" required />
        </label>
      </div>

      <label className={styles.field}>
        Message (optionnel)
        <textarea name="message" rows="4" placeholder="Occasion particulière, allergies..." />
      </label>

      <button type="submit" className="btn btn-primary">
        Envoyer la demande
      </button>

      {sent && (
        <p className={styles.confirm}>
          Votre application de messagerie va s'ouvrir pour finaliser l'envoi. Nous vous
          confirmerons la réservation par téléphone.
        </p>
      )}
    </form>
  );
}

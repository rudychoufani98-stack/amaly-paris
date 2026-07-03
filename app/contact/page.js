import { restaurant } from "../content";
import ReservationForm from "./ReservationForm";
import styles from "./contact.module.css";

export const metadata = {
  title: `Accès & Contact — ${restaurant.name}`,
  description: "Adresse, horaires et réservation du restaurant libanais Amaly à Paris.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(restaurant.address);

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">Accès & Réservation</span>
          <h1>Venez nous voir</h1>
          <p className={styles.sub}>
            Une question, une réservation ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div>
            <h2 className={styles.groupTitle}>Informations</h2>
            <ul className={styles.infoList}>
              <li>
                <strong>Adresse</strong>
                <span>{restaurant.address}</span>
              </li>
              <li>
                <strong>Téléphone</strong>
                <a href={`tel:${restaurant.phoneHref}`}>{restaurant.phone}</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
              </li>
              <li>
                <strong>Horaires</strong>
                <span className={styles.hours}>
                  {restaurant.hours.map((h) => (
                    <span key={h.day}>
                      {h.day} : {h.value}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <div className={styles.mapWrap}>
              <iframe
                title="Localisation du restaurant Amaly"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className={styles.groupTitle}>Réserver une table</h2>
            <div className={styles.theforkBox}>
              <p>
                Réservez instantanément en ligne via TheFork
                {restaurant.rating ? ` (note ${restaurant.rating})` : ""}.
              </p>
              <a
                href={restaurant.thefork}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Réserver sur TheFork
              </a>
            </div>

            <h3 className={styles.formTitle}>Une autre demande ? Écrivez-nous</h3>
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  );
}

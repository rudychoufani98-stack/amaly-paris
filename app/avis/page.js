import { restaurant, reviews } from "../content";
import styles from "./avis.module.css";

export const metadata = {
  title: `Avis clients — ${restaurant.name}`,
  description: "Ce que nos clients pensent du restaurant libanais Amaly à Paris.",
};

export default function AvisPage() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">Témoignages</span>
          <h1>Avis de nos clients</h1>
          <p className={styles.sub}>
            Merci à tous ceux qui font vivre Amaly. Voici quelques mots laissés par nos
            clients.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {reviews.map((review) => (
              <div key={review.name} className={styles.card}>
                <div className={styles.stars}>{"★".repeat(review.rating)}</div>
                <p>"{review.text}"</p>
                <span className={styles.name}>{review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

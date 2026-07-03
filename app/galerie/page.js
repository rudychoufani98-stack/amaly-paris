import { galleryPlaceholders, restaurant } from "../content";
import styles from "./galerie.module.css";

export const metadata = {
  title: `Galerie — ${restaurant.name}`,
  description: "Photos des plats et de la salle du restaurant Amaly à Paris.",
};

function PlaceholderGrid({ count, label }) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.tile}>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function GaleriePage() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">En images</span>
          <h1>Galerie</h1>
          <p className={styles.sub}>
            Photos à venir prochainement — remplacez ces emplacements par vos propres
            photos de plats et de la salle.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className={styles.groupTitle}>Nos plats</h2>
          <PlaceholderGrid count={galleryPlaceholders.plats} label="Photo à venir" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className={styles.groupTitle}>La salle</h2>
          <PlaceholderGrid count={galleryPlaceholders.salle} label="Photo à venir" />
        </div>
      </section>
    </>
  );
}

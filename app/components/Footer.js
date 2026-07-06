import Link from "next/link";
import { restaurant } from "../content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <img src="/logo.png" alt={restaurant.name} className={styles.logo} />
          <p className={styles.tagline}>{restaurant.tagline}</p>
        </div>

        <div>
          <h4 className={styles.heading}>Horaires</h4>
          <ul className={styles.list}>
            {restaurant.hours.map((h) => (
              <li key={h.day}>
                <span className={styles.day}>{h.day}</span>
                <span>{h.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Contact</h4>
          <ul className={styles.list}>
            <li>{restaurant.address}</li>
            <li>
              <a href={`tel:${restaurant.phoneHref}`}>{restaurant.phone}</a>
            </li>
            <li>
              <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
            </li>
            <li>
              <a href={restaurant.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Le restaurant</h4>
          <ul className={styles.list}>
            <li><Link href="/menu">Carte</Link></li>
            <li><Link href="/galerie">Galerie</Link></li>
            <li><Link href="/avis">Avis</Link></li>
            <li><Link href="/contact">Réservation</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          © {new Date().getFullYear()} {restaurant.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

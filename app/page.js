import Link from "next/link";
import { highlights, menu, restaurant, reviews } from "./content";
import styles from "./page.module.css";

export default function Home() {
  const featuredDishes = menu.find((g) => g.category === "Grillades").items.slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">Restaurant libanais — Paris 16e</span>
          <h1 className={styles.heroTitle}>
            Les saveurs du Liban,
            <br />
            servies avec coeur.
          </h1>
          <p className={styles.heroText}>
            Mezze généreux, grillades parfumées et pâtisseries maison, dans une salle
            chaleureuse au coeur de Paris. Amaly vous accueille comme en famille.
          </p>
          <p className={styles.heroRating}>★ {restaurant.rating} sur TheFork</p>
          <div className={styles.heroActions}>
            <a href={restaurant.thefork} target="_blank" rel="noreferrer" className="btn btn-primary">
              Réserver une table
            </a>
            <Link href="/menu" className="btn btn-ghost">
              Voir la carte
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.highlightGrid}>
            {highlights.map((item) => (
              <div key={item.title} className={styles.highlightCard}>
                <span className={styles.highlightMark}>—</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">A ne pas manquer</span>
            <h2>Nos incontournables</h2>
            <p>Une sélection de plats emblématiques de la maison.</p>
          </div>
          <div className={styles.dishGrid}>
            {featuredDishes.map((dish) => (
              <div key={dish.name} className={styles.dishCard}>
                <div className={styles.dishImage} aria-hidden="true" />
                <div className={styles.dishBody}>
                  <div className={styles.dishHead}>
                    <h3>{dish.name}</h3>
                    <span>{dish.price}</span>
                  </div>
                  <p>{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.center}>
            <Link href="/menu" className="btn btn-ghost">
              Toute la carte
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Ils nous ont rendu visite</span>
            <h2>Ce qu'en pensent nos clients</h2>
          </div>
          <div className={styles.reviewGrid}>
            {reviews.map((review, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.stars}>{"★".repeat(review.rating)}</div>
                <p>"{review.text}"</p>
                <span className={styles.reviewName}>{review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Envie d'un moment libanais ?</h2>
          <p>{restaurant.address}</p>
          <div className={styles.heroActions}>
            <a href={restaurant.thefork} target="_blank" rel="noreferrer" className="btn btn-primary">
              Réserver
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

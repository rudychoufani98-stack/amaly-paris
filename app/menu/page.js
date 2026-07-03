import { menu, restaurant } from "../content";
import styles from "./menu.module.css";

export const metadata = {
  title: `Carte — ${restaurant.name}`,
  description: "Découvrez la carte du restaurant libanais Amaly à Paris.",
};

export default function MenuPage() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">La carte</span>
          <h1>Notre carte</h1>
          <p className={styles.sub}>
            Une cuisine libanaise généreuse, préparée chaque jour avec des produits frais.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {menu.map((group) => (
            <div key={group.category} className={styles.group}>
              <h2 className={styles.groupTitle}>{group.category}</h2>
              <div className={styles.divider} />
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <div className={styles.itemHead}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.dots} aria-hidden="true" />
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    {item.desc ? <p className={styles.itemDesc}>{item.desc}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className={styles.note}>
            La carte peut évoluer selon les arrivages. N'hésitez pas à nous signaler toute
            allergie ou intolérance alimentaire.
          </p>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { restaurant } from "../content";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Carte" },
  { href: "/galerie", label: "Galerie" },
  { href: "/avis", label: "Avis" },
  { href: "/contact", label: "Accès & Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt={`${restaurant.name} - restaurant libanais`} className={styles.logo} />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a
            href={restaurant.thefork}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Réserver
          </a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

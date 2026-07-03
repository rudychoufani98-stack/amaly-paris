"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { restaurant } from "../content";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "amaly-cookie-consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "refused") {
      setConsent(stored);
    }
  }, []);

  function choose(value) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  const gaConfigured = restaurant.gaId && !restaurant.gaId.includes("XXXX");

  return (
    <>
      {consent === "accepted" && gaConfigured && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${restaurant.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${restaurant.gaId}');
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div className={styles.banner} role="dialog" aria-label="Consentement cookies">
          <p>
            Nous utilisons Google Analytics pour mesurer l'audience du site (nombre de
            visites, pages consultées). Ces cookies ne sont déposés qu'avec votre accord.
          </p>
          <div className={styles.actions}>
            <button type="button" className="btn btn-ghost" onClick={() => choose("refused")}>
              Refuser
            </button>
            <button type="button" className="btn btn-primary" onClick={() => choose("accepted")}>
              Accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}

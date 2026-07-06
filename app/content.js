// ------------------------------------------------------------------
// Le contenu réel du site (textes, prix, horaires, avis) vit dans
// content/site.json à la racine du projet. C'est ce fichier que
// l'interface d'administration (/admin) modifie directement.
// Ne modifiez ce fichier-ci que pour changer la structure du site,
// pas son contenu.
// ------------------------------------------------------------------

import site from "../content/site.json";

export const restaurant = site.restaurant;
export const highlights = site.highlights;
export const menu = site.menu;
export const reviews = site.reviews;

export const galleryPlaceholders = {
  plats: 6,
  salle: 4,
};

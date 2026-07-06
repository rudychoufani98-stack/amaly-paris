// ------------------------------------------------------------------
// TOUT LE CONTENU DU SITE EST ICI. Modifiez ce fichier pour mettre
// à jour les vrais textes, prix, horaires, avis, etc. du restaurant.
// Les valeurs marquées [A CONFIRMER] sont des exemples à remplacer.
// ------------------------------------------------------------------

export const restaurant = {
  name: "Amaly",
  tagline: "Cuisine libanaise, coeur du 16e",
  phone: "01 23 45 67 89", // [A CONFIRMER] — non public sur TheFork/Instagram, à récupérer auprès du resto
  phoneHref: "+33123456789", // [A CONFIRMER]
  email: "contact@amaly.paris", // [A CONFIRMER]
  address: "20 bis Rue Jean Giraudoux, 75116 Paris", // confirmé via TheFork
  instagram: "https://www.instagram.com/amalyparis/", // confirmé par le client
  thefork: "https://www.thefork.fr/restaurant/amaly-r863243", // confirmé
  rating: "9,6/10", // confirmé (TheFork, 38 avis sur 30 jours)
  gaId: "G-XXXXXXXXXX", // [A CONFIRMER] — remplacez par votre ID Google Analytics (Admin > Flux de données > ID de mesure)
  hours: [
    { day: "Lundi", value: "Fermé" },
    { day: "Mardi - Vendredi", value: "12h00 - 14h30 / 19h00 - 22h30" },
    { day: "Samedi - Dimanche", value: "12h00 - 15h00 / 19h00 - 23h00" },
  ], // [A CONFIRMER] — horaires non publiés sur TheFork, à confirmer
};

export const highlights = [
  {
    title: "Formules mezze généreuses",
    text: "Assortiments de 10 à 18 mezzés à partager, pensés pour un vrai repas libanais convivial.",
  },
  {
    title: "Terrasse & ambiance chaleureuse",
    text: "Une salle moderne et épurée, avec terrasse, pour un déjeuner comme pour un dîner romantique.",
  },
  {
    title: "Végétarien & vegan bienvenus",
    text: "Une large sélection de mezze végétariens et vegan, aussi savoureux que les plats de viande.",
  },
]; // Basé sur les caractéristiques confirmées du restaurant (TheFork)

// Carte complète et réelle, relevée sur les 9 photos de la carte publiées sur TheFork
// (thefork.fr/restaurant/amaly-r863243) le 2026-07-03. Vérifiez les prix avant
// publication au cas où la carte ait changé depuis.
export const menu = [
  {
    category: "Dégustation",
    items: [
      { name: "Instant mezzé végétarien", desc: "1 personne — sélection de 5 mezzés", price: "16,00 €" },
      { name: "Instant mezzé Amaly", desc: "1 personne — sélection de 5 mezzés", price: "16,00 €" },
      { name: "Mezzé Amaly à partager — 2 pers.", desc: "Assortiment de 10 mezzés", price: "60,00 €" },
      { name: "Mezzé Amaly à partager — 3 pers.", desc: "Assortiment de 14 mezzés", price: "90,00 €" },
      { name: "Mezzé Amaly à partager — 4 pers.", desc: "Assortiment de 18 mezzés", price: "120,00 €" },
      { name: "Manakish Zaatar", desc: "Galette au thym, graines de sésame, crudités", price: "12,00 €" },
      { name: "Manakish Jebne", desc: "Galette au fromage, crudités", price: "12,00 €" },
      { name: "Manakish Lahm bel ajin", desc: "Galette à la viande hachée de boeuf, tomates, citron, épices, crudités", price: "12,00 €" },
    ],
  },
  {
    category: "Mezzés froids",
    items: [
      { name: "Taboulé", desc: "Persil plat, tomates, menthe fraîche, oignons, citron, huile d'olive", price: "9,00 €" },
      { name: "Salade orientale", desc: "Laitue, tomates, concombres, poivron, citron, huile d'olive", price: "9,00 €" },
      { name: "Salade fattouche", desc: "Mesclun, tomates, concombres, radis, poivron, pain grillé, citron, huile d'olive", price: "9,00 €" },
      { name: "Salade Amaly", desc: "Mesclun, tomates cerises, feta, raisins secs, graines de tournesol, citron, huile d'olive", price: "9,00 €" },
      { name: "Salade du moine", desc: "Aubergines grillées, tomates, poivrons, oignons, persil, citron, huile d'olive", price: "9,00 €" },
      { name: "Moussakaa", desc: "Aubergines fondantes, pois chiches, tomate mijotée", price: "9,00 €" },
      { name: "Moutabbal", desc: "Aubergines fumées, crème de sésame", price: "9,00 €" },
      { name: "Houmous", desc: "Crème de pois chiches", price: "9,00 €" },
      { name: "Houmous beyrouthi", desc: "Crème de pois chiches, piment, persil, citron", price: "9,00 €" },
      { name: "Labné", desc: "Fromage frais libanais", price: "9,00 €" },
      { name: "Shanklish", desc: "Salade de fromage de brebis, thym, tomates, huile d'olive", price: "9,00 €" },
      { name: "Warak enab", desc: "Feuilles de vigne végétariennes", price: "9,00 €" },
      { name: "Loubié bel zeit", desc: "Haricots verts, tomate mijotée, huile d'olive", price: "9,00 €" },
      { name: "Batrakh", desc: "Boutargue, ail, thym, huile d'olive", price: "14,00 €" },
      { name: "Basturma", desc: "Fines tranches de boeuf fumé, épices orientales", price: "12,00 €" },
    ],
  },
  {
    category: "Mezzés chauds",
    items: [
      { name: "Kebbé nayé", desc: "Tartare de boeuf libanais, boulgour, crudités", price: "14,00 €" },
      { name: "Kafta nayé", desc: "Tartare de boeuf libanais, persil, oignons, crudités", price: "14,00 €" },
      { name: "Habra", desc: "Boeuf finement pilé, crudités", price: "14,00 €" },
      { name: "Plateau nayé", desc: "Assortiment de tartares : kebbé, kafta, habra", price: "38,00 €" },
      { name: "Mouhammara", desc: "Crème de poivron rouge grillé, noix", price: "12,00 €" },
      { name: "Assiette de crudités", desc: "", price: "9,00 €" },
      { name: "Assiette de kabis et olives", desc: "", price: "4,00 €" },
      { name: "Fatayer", desc: "Chaussons aux épinards", price: "9,00 €" },
      { name: "Rakakat fromage", desc: "Feuilletés au fromage", price: "9,00 €" },
      { name: "Samboussek fromage", desc: "Chaussons au fromage", price: "9,00 €" },
      { name: "Samboussek viande", desc: "Chaussons à la viande, pignons", price: "9,00 €" },
      { name: "Sfiha", desc: "Chaussons à la viande, tomates, oignons, pignons", price: "9,00 €" },
      { name: "Kebbé", desc: "Boulgour farci à la viande hachée, pignons", price: "9,00 €" },
      { name: "Kebbé Amaly", desc: "Kebbé farci à la tomate, oignons, pignons, mélasse de grenade", price: "11,00 €" },
      { name: "Falafels", desc: "Beignets de pois chiches, crudités", price: "9,00 €" },
      { name: "Falafels Amaly", desc: "Falafels farcis à la crème de sésame, persil, cornichons", price: "11,00 €" },
      { name: "Halloumi", desc: "Fromage halloumi grillé", price: "9,00 €" },
      { name: "Makanek", desc: "Saucisses libanaises flambées au citron", price: "9,00 €" },
      { name: "Sujuk", desc: "Saucisses libanaises épicées", price: "9,00 €" },
      { name: "Sawda djej", desc: "Foie de volaille poêlé, coriandre, mélasse de grenade", price: "9,00 €" },
      { name: "Houmous chawarma", desc: "Crème de pois chiches, émincé de viande rôtie à la broche", price: "11,00 €" },
      { name: "Jawaneh", desc: "Ailes de poulet marinées, citron, ail", price: "9,00 €" },
      { name: "Ras Asfour", desc: "Veau poêlé aux épices, sauce citronnée", price: "18,00 €" },
      { name: "Kellage", desc: "Pain grillé, fromage, tomates, menthe", price: "9,00 €" },
      { name: "Batata harra", desc: "Pommes de terre sautées, ail, coriandre", price: "9,00 €" },
      { name: "Arayes", desc: "Pain grillé, farce de kafta, pignons", price: "9,00 €" },
      { name: "Houmous balila", desc: "Pois chiches entiers, ail, citron, huile d'olive", price: "11,00 €" },
      { name: "Foul moudammas", desc: "Fèves, pois chiches, ail, citron, huile d'olive", price: "11,00 €" },
      { name: "Houmous lahmé", desc: "Crème de pois chiches, veau poêlé", price: "11,00 €" },
      { name: "Houmous snoubar", desc: "Purée de pois chiches, pignons de pin toastés", price: "11,00 €" },
      { name: "Frites maison", desc: "", price: "7,00 €" },
      { name: "Riz blanc", desc: "", price: "7,00 €" },
    ],
  },
  {
    category: "Grillades",
    items: [
      { name: "Kafta grillé", desc: "Brochettes de boeuf haché, persil, oignons, houmous, taboulé", price: "23,00 €" },
      { name: "Chiche taouk", desc: "Brochettes de poulet mariné, houmous, taboulé", price: "23,00 €" },
      { name: "Grillade mixte", desc: "Brochettes de kafta, lahm méchoui, chiche taouk, taboulé, batata harra", price: "28,00 €" },
      { name: "Blanc de poulet", desc: "Filet de poulet, salade Amaly", price: "23,00 €" },
      { name: "Lahm méchoui", desc: "Brochettes de veau mariné, légumes grillés, houmous", price: "25,00 €" },
      { name: "Chawarma", desc: "Poulet, boeuf ou mixte, viande marinée rôtie à la broche, houmous, taboulé", price: "23,00 €" },
    ],
  },
  {
    category: "Poissons",
    items: [
      { name: "Dorade grillée", desc: "Dorade entière grillée, citron, herbes fraîches, salade fattouche", price: "23,00 €" },
      { name: "Gambas grillées", desc: "Citron, herbes fraîches, riz parfumé", price: "34,00 €" },
      { name: "Gambas Amaly", desc: "Tomates, oignons, citron, huile d'olive, riz parfumé", price: "34,00 €" },
    ],
  },
  {
    category: "Formules sandwichs",
    items: [
      { name: "Formule 1", desc: "Sandwich + frites ou salade ou mezzé froid + boisson", price: "14,90 €" },
      { name: "Formule 2", desc: "Sandwich + 3 beignets + boisson", price: "14,90 €" },
      { name: "Formule 3", desc: "Sandwich + 3 baklawa ou mouhallabié", price: "14,90 €" },
    ],
  },
  {
    category: "Sandwichs",
    items: [
      { name: "Chawarma boeuf", desc: "Émincé de boeuf, tomate, persil, oignons, cornichons, crème de sésame", price: "9,00 €" },
      { name: "Chawarma poulet", desc: "Émincé de poulet, salade, cornichons, crème d'ail", price: "9,00 €" },
      { name: "Chiche taouk", desc: "Brochette de poulet marinée, salade, cornichons, crème d'ail", price: "9,00 €" },
      { name: "Lahm mechoui", desc: "Brochette de veau, houmous, persil, oignons, tomates, cornichons", price: "9,00 €" },
      { name: "Kafta", desc: "Brochette de boeuf haché, houmous, persil, oignons, tomates, cornichons", price: "9,00 €" },
      { name: "Makanek", desc: "Saucisses flambées, houmous, tomates, cornichons", price: "9,00 €" },
      { name: "Sujuk", desc: "Saucisses épicées, tomates, cornichons, crème d'ail", price: "9,00 €" },
      { name: "Foie de volaille", desc: "Salade, cornichons, crème d'ail", price: "9,00 €" },
      { name: "Sandwich du chef", desc: "Création du moment", price: "Prix du jour" },
      { name: "Falafels", desc: "Beignets de pois chiches, navets, cornichons, tomates, persil, crème de sésame", price: "9,00 €" },
      { name: "Aubergine", desc: "Salade, cornichons, tomates, crème de sésame", price: "9,00 €" },
      { name: "Chou-fleur", desc: "Salade, cornichons, tomates, crème de sésame", price: "9,00 €" },
      { name: "Mixte chou-fleur & aubergine", desc: "Salade, batata hara, tomates, cornichons, crème de sésame", price: "9,00 €" },
      { name: "Batata", desc: "Frites croustillantes, coleslaw, tomates, cornichons, crème d'ail", price: "9,00 €" },
      { name: "Halloumi", desc: "Fromage grillé, tomates, menthe, filet d'huile d'olive", price: "9,00 €" },
      { name: "Labné", desc: "Fromage frais, concombres, tomates, menthe, thym", price: "9,00 €" },
    ],
  },
  {
    category: "Pâtisseries",
    items: [
      { name: "Baklawa", desc: "Feuilletés croustillants, assortiment de pistaches, noix de cajou et pignons de pin", price: "8,00 €" },
      { name: "Halawet el Jebin", desc: "Roulé de pâte au fromage, crème, fleur d'oranger", price: "8,00 €" },
      { name: "Mafrouké", desc: "Crème, pistache, fleur d'oranger", price: "6,00 €" },
      { name: "Osmalié", desc: "Cheveux d'ange croustillants, crème, pistache", price: "8,00 €" },
      { name: "Maamoul", desc: "Sablé de semoule, dattes, pistache ou noix", price: "9,00 €" },
      { name: "Mouhallabié", desc: "Crème de lait, fleur d'oranger", price: "6,00 €" },
      { name: "Riz au lait", desc: "Riz crémeux, fleur d'oranger", price: "6,00 €" },
      { name: "Knafé", desc: "Semoule fine, fromage fondant, sirop parfumé", price: "9,00 €" },
      { name: "Bourma", desc: "Cheveux d'ange, pistaches concassées", price: "9,00 €" },
    ],
  },
  {
    category: "Boissons fraîches",
    items: [
      { name: "Eau minérale", desc: "50 cl", price: "4,00 €" },
      { name: "Eau pétillante", desc: "50 cl", price: "4,00 €" },
      { name: "Soda", desc: "33 cl", price: "4,00 €" },
      { name: "Jus de fruits", desc: "33 cl", price: "4,00 €" },
      { name: "Jus de fruits pressés", desc: "33 cl", price: "7,00 €" },
      { name: "Limonade maison", desc: "33 cl", price: "7,00 €" },
    ],
  },
  {
    category: "Boissons chaudes",
    items: [
      { name: "Café", desc: "Ou décaféiné", price: "3,50 €" },
      { name: "Café crème", desc: "", price: "5,00 €" },
      { name: "Cappuccino", desc: "", price: "5,00 €" },
      { name: "Café latte", desc: "", price: "6,00 €" },
      { name: "Chocolat chaud", desc: "", price: "6,00 €" },
      { name: "Café libanais", desc: "", price: "4,00 €" },
      { name: "Café blanc", desc: "", price: "4,00 €" },
      { name: "Thés et infusions", desc: "", price: "5,00 €" },
      { name: "Thé à la menthe fraîche", desc: "2 personnes", price: "12,00 €" },
    ],
  },
  {
    category: "Vins & boissons alcoolisées",
    items: [
      { name: "Château Kefraya 2021", desc: "Rouge — bouteille", price: "46,00 €" },
      { name: "Nakad Alouette", desc: "Rouge — verre 6,5 € / bouteille", price: "28,00 €" },
      { name: "Ixsir Altitude", desc: "Rouge — verre 9 € / bouteille", price: "35,00 €" },
      { name: "Comte de M Kefraya", desc: "Rouge — bouteille", price: "85,00 €" },
      { name: "Kefraya Blanc de Blancs", desc: "Blanc — verre 7,5 € / bouteille", price: "30,00 €" },
      { name: "Grande Réserve Ixsir (blanc)", desc: "Blanc — verre 10 € / bouteille", price: "48,00 €" },
      { name: "Myst Kefraya", desc: "Rosé — verre 7,5 € / bouteille", price: "30,00 €" },
      { name: "Grande Réserve Ixsir (rosé)", desc: "Rosé — verre 10 € / bouteille", price: "48,00 €" },
      { name: "Almaza", desc: "Bière libanaise, 33 cl", price: "7,00 €" },
      { name: "Almaza Light", desc: "Bière libanaise, 33 cl", price: "7,00 €" },
      { name: "Arak Brun", desc: "70 cl — verre 9 € / bouteille", price: "80,00 €" },
      { name: "Arak Nakad", desc: "Verre", price: "7,50 €" },
    ],
  },
]; // Carte réelle et complète (source : photos du menu sur TheFork, relevées le 2026-07-03)

export const reviews = [
  {
    name: "Avis TheFork",
    text: "La nourriture était fantastique ! Nous avons partagé l'assortiment de mezze pour 3, et tout était excellent.",
    rating: 5,
  },
  {
    name: "Avis TheFork",
    text: "Un accueil merveilleux et une cuisine délicieuse.",
    rating: 5,
  },
  {
    name: "Avis TheFork",
    text: "Un excellent service et une excellente cuisine, des saveurs et des textures fines et variées.",
    rating: 5,
  },
]; // Traduits d'avis réels publiés sur TheFork (9,6/10, 38 avis / 30 jours). Remplacez par vos propres avis mis en avant.

export const galleryPlaceholders = {
  plats: 6,
  salle: 4,
};

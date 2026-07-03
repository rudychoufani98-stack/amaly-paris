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
  instagram: "https://www.instagram.com/amalyrestaurant/", // confirmé
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

export const menu = [
  {
    category: "Formules Mezze", // confirmé via TheFork
    items: [
      { name: "Assortiment 10 mezzés", desc: "Pour 2 personnes", price: "60,00 €" },
      { name: "Assortiment 14 mezzés", desc: "Pour 3 personnes", price: "90,00 €" },
      { name: "Assortiment 18 mezzés", desc: "Pour 4 personnes", price: "120,00 €" },
    ],
  },
  {
    category: "Mezze froids",
    items: [
      { name: "Houmous", desc: "Purée de pois chiches, tahiné, citron, huile d'olive", price: "7,50 €" },
      { name: "Moutabal", desc: "Caviar d'aubergine fumée, tahiné", price: "7,50 €" },
      { name: "Taboulé", desc: "Persil, tomate, boulgour fin, citron", price: "8,00 €" },
      { name: "Fattouche", desc: "Salade croquante, pain grillé, mélasse de grenade", price: "8,50 €" },
      { name: "Warak Enab", desc: "Feuilles de vigne farcies au riz et herbes", price: "8,00 €" },
    ],
  },
  {
    category: "Mezze chauds",
    items: [
      { name: "Sambousek viande", desc: "Chaussons croustillants farcis à la viande", price: "8,50 €" },
      { name: "Falafel", desc: "Boulettes de pois chiches, sauce tahiné", price: "7,50 €" },
      { name: "Kebbé frite", desc: "Boulgour, viande hachée, oignons épicés", price: "9,00 €" },
      { name: "Halloumi grillé", desc: "Fromage grillé, miel, sésame", price: "9,50 €" },
    ],
  },
  {
    category: "Grillades & Plats",
    items: [
      { name: "Chich Taouk", desc: "Brochettes de poulet mariné, ail, citron", price: "17,00 €" },
      { name: "Kafta grillée", desc: "Brochettes de boeuf haché, persil, oignon", price: "18,00 €" },
      { name: "Chawarma poulet", desc: "Poulet mariné, sauce à l'ail, pain libanais", price: "15,00 €" },
      { name: "Mixed Grill Amaly", desc: "Sélection de grillades, riz, salade", price: "24,00 €" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Baklava", desc: "Pistache, miel, pâte filo", price: "6,00 €" },
      { name: "Knefe", desc: "Fromage filant, sirop de fleur d'oranger", price: "7,50 €" },
      { name: "Mouhalabieh", desc: "Crème au lait, eau de rose, pistache", price: "6,50 €" },
    ],
  },
  {
    category: "Boissons",
    items: [
      { name: "Jus de fruits frais", desc: "Fraise, mangue, citronnade menthe", price: "5,50 €" },
      { name: "Thé à la menthe", desc: "", price: "3,50 €" },
      { name: "Café libanais", desc: "A la cardamome", price: "3,00 €" },
      { name: "Vin libanais (verre)", desc: "Sélection de la Bekaa", price: "7,00 €" },
    ],
  },
]; // Formules Mezze confirmées. Le reste des plats/prix sont des exemples [A CONFIRMER]
// — le menu détaillé n'est publié que sous forme d'image sur TheFork,
// envoyez la vraie carte (photo ou texte) pour la remplacer.

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

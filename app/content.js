// ------------------------------------------------------------------
// TOUT LE CONTENU DU SITE EST ICI. Modifiez ce fichier pour mettre
// à jour les vrais textes, prix, horaires, avis, etc. du restaurant.
// Les valeurs marquées [A CONFIRMER] sont des exemples à remplacer.
// ------------------------------------------------------------------

export const restaurant = {
  name: "Amaly",
  tagline: "Cuisine libanaise, coeur de Paris",
  phone: "01 23 45 67 89", // [A CONFIRMER]
  phoneHref: "+33123456789", // [A CONFIRMER]
  email: "contact@amaly.paris", // [A CONFIRMER]
  address: "12 Rue de la Paix, 75002 Paris", // [A CONFIRMER]
  instagram: "https://instagram.com/amaly.paris", // [A CONFIRMER]
  hours: [
    { day: "Lundi", value: "Fermé" },
    { day: "Mardi - Vendredi", value: "12h00 - 14h30 / 19h00 - 22h30" },
    { day: "Samedi - Dimanche", value: "12h00 - 15h00 / 19h00 - 23h00" },
  ], // [A CONFIRMER]
};

export const highlights = [
  {
    title: "Fait maison",
    text: "Mezze, pains et pâtisseries préparés chaque jour selon les recettes libanaises traditionnelles.",
  },
  {
    title: "Produits frais",
    text: "Herbes, légumes et viandes sélectionnés avec soin auprès de producteurs locaux.",
  },
  {
    title: "Accueil chaleureux",
    text: "L'hospitalité libanaise au coeur de Paris, pour un déjeuner comme pour un dîner entre amis.",
  },
];

export const menu = [
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
]; // [A CONFIRMER] — remplacer par la vraie carte et les vrais prix

export const reviews = [
  {
    name: "Camille D.",
    text: "Un vrai coin du Liban à Paris. Le chich taouk est incroyable et l'accueil est très chaleureux.",
    rating: 5,
  },
  {
    name: "Marc L.",
    text: "Mezze généreux et parfumés, cadre agréable. On y retourne dès qu'on peut.",
    rating: 5,
  },
  {
    name: "Sarah B.",
    text: "Le baklava maison est une tuerie. Service souriant, on se sent bien reçu.",
    rating: 5,
  },
]; // [A CONFIRMER] — remplacer par de vrais avis clients

export const galleryPlaceholders = {
  plats: 6,
  salle: 4,
};

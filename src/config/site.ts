// Edit everything about the site here: contact details, hero image, services and their photos.
// To add a photo: upload it with lovable-assets into src/assets, import the .asset.json pointer
// below and add `{ src: pointer.url, alt: "..." }` to the right list.

export type Photo = { src: string; alt: string };

export type Service = {
  id: string;
  name: string;
  price: number;
  photos: Photo[];
};

export const site = {
  brand: "MASTER NUR",
  title: "Professional Nail Artist",
  experience: "9 illik təcrübə",
  intro: "Zövqünüzə uyğun zərif və estetik dırnaq dizaynları. Gözəlliyinizə incə toxunuş.",
  address: "Sumqayıt, Sülh Plaza",
  phoneDisplay: "070-343-52-53",
  phoneHref: "tel:+994703435253",
  whatsapp: "https://wa.me/994703435253",
  instagram: "https://www.instagram.com/sumqayit_dirnaq_nur/",
  heroImage: null as Photo | null,
};

export const services: Service[] = [
  { id: "ust-forma", name: "Üst forma", price: 30, photos: [] },
  { id: "tipsi", name: "Tipsi", price: 20, photos: [] },
  { id: "arka-tipsi", name: "Arka tipsi", price: 25, photos: [] },
  { id: "gel", name: "Gel bərkitmə və ya öz dırnağa gel", price: 20, photos: [] },
  { id: "formagel", name: "Formagel", price: 25, photos: [] },
  { id: "manikur", name: "Manikür", price: 5, photos: [] },
];

// General portfolio photos; service photos are shown here too.
export const portfolioPhotos: Photo[] = [];

export const allPortfolioPhotos = (): Photo[] => [
  ...portfolioPhotos,
  ...services.flatMap((s) => s.photos),
];

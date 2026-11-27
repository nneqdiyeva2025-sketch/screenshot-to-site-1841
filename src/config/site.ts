// Edit everything about the site here: contact details, hero image, services and their photos.
// To add a photo: upload it with lovable-assets into src/assets, import the .asset.json pointer
// below and add `{ src: pointer.url, alt: "..." }` to the right list.

import tipsi1 from "@/assets/tipsi/tipsi-1.png.asset.json";
import tipsi2 from "@/assets/tipsi/tipsi-2.png.asset.json";
import tipsi3 from "@/assets/tipsi/tipsi-3.png.asset.json";
import tipsi4 from "@/assets/tipsi/tipsi-4.png.asset.json";
import tipsi5 from "@/assets/tipsi/tipsi-5.png.asset.json";
import tipsi6 from "@/assets/tipsi/tipsi-6.png.asset.json";
import ustForma1 from "@/assets/ust-forma/ust-forma-7.png.asset.json";
import ustForma2 from "@/assets/ust-forma/ust-forma-8.png.asset.json";
import ustForma3 from "@/assets/ust-forma/ust-forma-9.png.asset.json";
import ustForma4 from "@/assets/ust-forma/ust-forma-10.png.asset.json";
import ustForma5 from "@/assets/ust-forma/ust-forma-11.png.asset.json";
import ustForma6 from "@/assets/ust-forma/ust-forma-12.png.asset.json";

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
  { id: "ust-forma", name: "Üst forma", price: 30, photos: [{ src: ustForma1.url, alt: "Üst forma dırnaq dizaynı 1" }, { src: ustForma2.url, alt: "Üst forma dırnaq dizaynı 2" }, { src: ustForma3.url, alt: "Üst forma dırnaq dizaynı 3" }, { src: ustForma4.url, alt: "Üst forma dırnaq dizaynı 4" }, { src: ustForma5.url, alt: "Üst forma dırnaq dizaynı 5" }, { src: ustForma6.url, alt: "Üst forma dırnaq dizaynı 6" }] },
  { id: "tipsi", name: "Tipsi", price: 20, photos: [{ src: tipsi1.url, alt: "Tipsi dırnaq dizaynı 1" }, { src: tipsi2.url, alt: "Tipsi dırnaq dizaynı 2" }, { src: tipsi3.url, alt: "Tipsi dırnaq dizaynı 3" }, { src: tipsi4.url, alt: "Tipsi dırnaq dizaynı 4" }, { src: tipsi5.url, alt: "Tipsi dırnaq dizaynı 5" }, { src: tipsi6.url, alt: "Tipsi dırnaq dizaynı 6" }] },
  { id: "arka-tipsi", name: "Arka tipsi", price: 25, photos: [] },
  { id: "gel", name: "Gel bərkitmə və ya öz dırnağa gel", price: 20, photos: [] },
  { id: "formagel", name: "Formagel", price: 25, photos: [] },
  { id: "manikur", name: "Manikür", price: 5, photos: [] },
];

// General portfolio photos; service photos are shown here too, except services listed in exclusiveServices.
export const portfolioPhotos: Photo[] = [];

// Photos of these services appear only in their own gallery (owner request).
const exclusiveServices = ["tipsi", "ust-forma"];

export const allPortfolioPhotos = (): Photo[] => [
  ...portfolioPhotos,
  ...services.filter((s) => !exclusiveServices.includes(s.id)).flatMap((s) => s.photos),
];

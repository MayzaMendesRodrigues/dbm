export const Contact = {
  PhoneNumber: "5491173608326",
  Email: "",
}

export const SocialMediaLinks = {
  Instagram: "",
  Facebook: "",
  Whatsapp: "",
  GoogleMaps: "",
}

export const Pages = {
  Home: {
    url: "/",
    label: "INICIO",
    order: 0,
  },
  Catalog: {
    url: "/catalogo",
    label: "CATALOGO",
    order: 1,
  },
  SellMyBike: {
    url: "/vender-mi-moto",
    label: "VENDER MI MOTO",
    order: 2,
  },
  Contact: {
    url: `https://wa.me/${Contact.PhoneNumber}?text=Hola,%20quiero%20información%20sobre%20sus%20motos`,
    label: "CONTACTO",
    order: 3,
  },
}

export type Page = {
  url: string;
  label: string;
  order: number;
}

export const Brands = [
  'Honda',
  'Yamaha',
  'Motomel',
  'Corven',
  'Zanella',
  'Bajaj',
  'Benelli',
  'Suzuki',
  'Kawasaki',
  'BMW',
  'KTM',
  'Ducati',
  'TVS',
  'Gilera',
  'Keller',
  'Hero',
  'Siam',
  'Beta',
  'Husqvarna',
]

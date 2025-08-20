
export enum EventAnalytics {
  HamburguerButton = "HamburguerButton",
  SellMyBikeFormSubmission = "SellMyBikeFormSubmission",
  FooterWhatsappButton = "FooterWhatsappButton",
  FooterCallButton = "FooterCallButton",
  ModalWhatsappButton = "ModalWhatsappButton",
  FeaturedSeeMoreButton = "FeaturedSeeMoreButton",
  NavLinkSellMyBike = "SellMyBike",
  NavLinkCatalog = "NavLinkCatalog",
  NavLinkContact = "NavLinkContact",
  BikeModalOpen = "CatalogBikeModal",
  FloatingWhatsappButton = "FloatingWhatsappButton",
  HeroCatalogButton = "HeroCatalogButton",
  HeroWhatsappButton = "HeroWhatsappButton",
  FooterInstagramLink = "FooterInstagramLink",
  FooterFacebookLink = "FooterFacebookLink",
  FooterGoogleMapsLink = "FooterGoogleMapsLink",
  FooterWhatsappLink = "FooterWhatsappLink",
  FAQPaymentMethods = "FAQPaymentMethods",
  FAQInspectBike = "FAQInspectBike",
  FAQAfterSaleService = "FAQAfterSaleService",
  FAQHandover = "FAQHandover",
}

export enum EventCategory {
  Navigation = 'Navigation',
  Contact = 'Contact',
  Discovery = 'Discovery',
  Social = 'Social',
  Lead = 'Lead',
}

export enum EventType {
  // Lead
  FormSubmission = 'BikeFormSubmission',
  Whatsapp = 'Whatsapp',

  // Navigation
  MainNavigation = 'MainNavigation',
  Mobile = 'Mobile',

  // Contact
  Phone = 'Phone',
  GoogleMaps = 'GoogleMaps',

  // Discovery
  ProductView = 'ProductView',
  HomeInteraction = 'HomeInteraction',
  FAQ = 'FAQ',

  // Social
  Instagram = 'Instagram',
  Facebook = 'Facebook',
}

type EventMeta = {
  category: string;
  type: string;
  label: string;
};

const eventMap: Record<EventAnalytics, EventMeta> = {
  // Lead
  [EventAnalytics.SellMyBikeFormSubmission]: { category: EventCategory.Lead, type: EventType.FormSubmission, label: 'Envio Formulario Vender Mi Moto' },
  [EventAnalytics.NavLinkContact]: { category: EventCategory.Lead, type: EventType.Whatsapp, label: 'Nav Link Whatsapp' },
  [EventAnalytics.FooterWhatsappButton]: { category: EventCategory.Lead, type: EventType.Whatsapp, label: 'Boton Whatsapp Footer' },
  [EventAnalytics.FooterWhatsappLink]: { category: EventCategory.Lead, type: EventType.Whatsapp, label: 'Link Whatsapp Footer' },
  [EventAnalytics.HeroWhatsappButton]: { category: EventCategory.Lead, type: EventType.Whatsapp, label: 'Boton Whatsapp Hero' },
  [EventAnalytics.ModalWhatsappButton]: { category: EventCategory.Lead, type: EventType.Whatsapp, label: 'Boton Whatsapp Modal' },
  [EventAnalytics.FloatingWhatsappButton]: { category: EventCategory.Lead, type: EventType.Whatsapp, label: 'Boton Whatsapp Flotante' },

  // Navigation
  [EventAnalytics.NavLinkCatalog]: { category: EventCategory.Navigation, type: EventType.MainNavigation, label: 'Nav Link Catalogo' },
  [EventAnalytics.NavLinkSellMyBike]: { category: EventCategory.Navigation, type: EventType.MainNavigation, label: 'Nav Link Vender Mi Moto' },
  [EventAnalytics.HamburguerButton]: { category: EventCategory.Navigation, type: EventType.Mobile, label: 'Menú Móvil Abierto' },

  // Contact
  [EventAnalytics.FooterGoogleMapsLink]: { category: EventCategory.Contact, type: EventType.GoogleMaps, label: 'Link GoogleMaps Footer' },
  [EventAnalytics.FooterCallButton]: { category: EventCategory.Lead, type: EventType.Phone, label: 'Boton Llamar Footer' },

  // Discovery
  [EventAnalytics.BikeModalOpen]: { category: EventCategory.Discovery, type: EventType.ProductView, label: 'Modal Moto Abierto' },
  [EventAnalytics.FeaturedSeeMoreButton]: { category: EventCategory.Discovery, type: EventType.HomeInteraction, label: 'Boton Ver Más Inicio' },
  [EventAnalytics.HeroCatalogButton]: { category: EventCategory.Discovery, type: EventType.HomeInteraction, label: 'Boton Ver Catálogo Hero' },
  [EventAnalytics.FAQPaymentMethods]: { category: EventCategory.Discovery, type: EventType.FAQ, label: 'FAQ Metodos De Pago' },
  [EventAnalytics.FAQInspectBike]: { category: EventCategory.Discovery, type: EventType.FAQ, label: 'FAQ Revisar Moto' },
  [EventAnalytics.FAQAfterSaleService]: { category: EventCategory.Discovery, type: EventType.FAQ, label: 'FAQ Servicio Postventa' },
  [EventAnalytics.FAQHandover]: { category: EventCategory.Discovery, type: EventType.FAQ, label: 'FAQ Entregar Moto' },

  // Social
  [EventAnalytics.FooterInstagramLink]: { category: EventCategory.Social, type: EventType.Instagram, label: 'Link Instagram Footer' },
  [EventAnalytics.FooterFacebookLink]: { category: EventCategory.Social, type: EventType.Facebook, label: 'Link Facebook Footer' },
};

export function pushEvent(eventId: EventAnalytics) {
  const meta = eventMap[eventId];
  if (!meta) return;

  const path = `event/${meta.category}/${meta.type}/${meta.label}`;
  const title = `${meta.category} -> ${meta.type} -> ${meta.label}`;

  if (typeof window !== "undefined" && window.goatcounter?.count) {
    window.goatcounter.count({ path, title });
  } else {
    console.warn("GoatCounter script not loaded yet.");
  }
}

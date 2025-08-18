
export enum EventAnalytics {
  BurguerButton = "BurguerButton",
  FooterWhatsappButton = "FooterWhatsappButton",
  FooterCallButton = "FooterCallButton",
  ModalWhatsappButton = "ModalWhatsappButton",
  FeaturedSeeMoreButton = "FeaturedSeeMoreButton",
  NavLinkCatalog = "NavLinkCatalog",
  NavLinkContact = "NavLinkContact",
  BikeModalOpen = "CatalogBikeModal",
  FloatingWhatsappButton = "FloatingWhatsappButton",
  FooterInstagramLink = "FooterInstagramLink",
  FooterFacebookLink = "FooterFacebookLink",
  FooterGoogleMapsLink = "FooterGoogleMapsLink",
  FooterWhatsappLink = "FooterWhatsappLink",
}

type EventMeta = {
  category: string;
  type: string;
  label: string;
};

const eventMap: Record<EventAnalytics, EventMeta> = {
  [EventAnalytics.NavLinkCatalog]: { category: "Navegation", type: "Catalog", label: "Nav Link Catalogo" },
  [EventAnalytics.BikeModalOpen]: { category: "Discovery", type: "BikeModal", label: "Modal Moto Abierto" },
  [EventAnalytics.FeaturedSeeMoreButton]: { category: "Discovery", type: "Catalog", label: "Boton Ver Mas Inicio" },
  [EventAnalytics.BurguerButton]: { category: "Navegation", type: "BurguerButton", label: "Menu Mobile" },
  [EventAnalytics.FooterWhatsappButton]: { category: "Contacto", type: "Whatsapp", label: "Boton Whatsapp Footer" },
  [EventAnalytics.NavLinkContact]: { category: "Contacto", type: "Whatsapp", label: "Nav Link Whatsapp" },
  [EventAnalytics.FooterCallButton]: { category: "Contacto", type: "PhoneNumber", label: "Boton Llamar Footer" },
  [EventAnalytics.ModalWhatsappButton]: { category: "Contacto", type: "Whatsapp", label: "Boton Whatsapp Modal" },
  [EventAnalytics.FloatingWhatsappButton]: { category: "Contacto", type: "Whatsapp", label: "Boton Whatsapp Flotante" },
  [EventAnalytics.FooterInstagramLink]: { category: "RedSocial", type: "Instagram", label: "Link Instagram Footer" },
  [EventAnalytics.FooterFacebookLink]: { category: "RedSocial", type: "Facebook", label: "Link Facebook Footer" },
  [EventAnalytics.FooterWhatsappLink]: { category: "RedSocial", type: "Whatsapp", label: "Link Whatsapp Footer" },
  [EventAnalytics.FooterGoogleMapsLink]: { category: "Contacto", type: "GoogleMaps", label: "Link GoogleMaps Footer" },
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

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const COMPANY_INFO = {
  name: "Maximum Pixel",
  legalName: "Maximum Pixel Studio",
  tagline: "IDEAS INTO VISUALS. STORIES INTO IMPACT.",
  supportingLine: "From the first frame to the final cut.",
  shortDesc:
    "Independent video production and post-production studio in Jaipur creating visual stories for brands, businesses and creators.",
  email: "info@maximumpixel.online",
  secondaryEmail: "hello.maximumpixel@gmail.com",
  phone: "+91 78787 36798",
  whatsappNumber: "917878736798",
  location: "Jaipur, Rajasthan, India",
  cityLabel: "Jaipur, India",
  siteUrl: "https://www.maximumpixel.online",
  googleMapsUrl: "https://maps.google.com/?q=Jaipur,+Rajasthan,+India",
  whatsappUrl:
    "https://wa.me/917878736798?text=Hi%20Maximum%20Pixel%20team%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  copyrightYear: 2026,
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/maximumpixel.jaipur",
    handle: "@maximumpixel.jaipur",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@maximumpixel",
    handle: "@maximumpixel",
  },
  {
    name: "WhatsApp",
    url: COMPANY_INFO.whatsappUrl,
    handle: "+91 78787 36798",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/maximumpixel",
    handle: "maximumpixel",
  },
];

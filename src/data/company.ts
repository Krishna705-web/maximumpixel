export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  bgColor: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const COMPANY_INFO = {
  name: "MaximumPixel",
  legalName: "MaximumPixel Media Studio",
  tagline: "Jaipur-Based Video Shoot & Video Edit Production Studio",
  shortDesc: "We're a Jaipur-based studio specializing in Video Shoots, Video Edit, and Turnkey Shoot + Edit production.",
  email: "info@maximumpixel.online",
  phone: "+91 78787 36798",
  formattedPhone: "+91 78787 36798",
  whatsappNumber: "917878736798",
  location: "Jaipur, Rajasthan, India",
  googleMapsUrl: "https://maps.google.com/?q=Jaipur,+Rajasthan,+India",
  whatsappUrl: "https://wa.me/917878736798?text=Hi%20MaximumPixel%20team,%20I'd%20like%20to%20discuss%20a%20project!",
  copyrightYear: 2025,
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/our-work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/maximumpixel.jaipur",
    icon: "instagram",
    bgColor: "bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4]",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@maximumpixel",
    icon: "youtube",
    bgColor: "bg-[#FF0000]",
  },
  {
    name: "WhatsApp",
    url: COMPANY_INFO.whatsappUrl,
    icon: "whatsapp",
    bgColor: "bg-[#25D366]",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/maximumpixel",
    icon: "linkedin",
    bgColor: "bg-[#0A66C2]",
  },
];

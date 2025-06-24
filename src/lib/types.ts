import type { LucideIcon } from "lucide-react";

export interface Company {
  name: string;
  logo: string;
  alt: string;
}

export interface CompaniesLogoProps {
  className?: string;
  companies?: Company[];
}

export interface NavigationLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface FooterProps {
  className?: string;
  navigationLinks?: NavigationLink[];
  socialLinks?: SocialLink[];
  contactInfo?: ContactInfo;
  companyName?: string;
  logoSrc?: string;
  onNewsletterSubmit?: (email: string) => void;
}

export interface ServiceCardProps {
  title: string;
  bgColor: string;
  titleBgColor: string;
  textColor?: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
  arrowColor?: string;
  imgUrl: string;
  onLearnMore: () => void;
}


export interface ServiceWithHandler {
  title: string;
  bgColor: string;
  titleBgColor: string;
  textColor?: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
  arrowColor?: string;
  imgUrl: string;
  onLearnMore: () => void;
}
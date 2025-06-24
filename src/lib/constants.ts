import type { Company, ContactInfo, NavigationLink, ServiceCardProps, SocialLink } from "./types";
import { Linkedin, Facebook, Twitter } from "lucide-react";

export const DEFAULT_NAVIGATION: NavigationLink[] = [
  { label: "About us", href: "#", isActive: true },
  { label: "Services", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
];

export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const DEFAULT_CONTACT: ContactInfo = {
  email: "info@positivus.com",
  phone: "555-567-8901",
  address: {
    street: "1234 Main St",
    city: "Moonstone City",
    state: "Stardust State",
    zipCode: "12345",
  },
};


 export const DEFAULT_COMPANIES: Company[] = [
  { name: 'Amazon', logo: '/images/amazon.svg', alt: 'Amazon logo' },
  { name: 'Dribbble', logo: '/images/dribbble.svg', alt: 'Dribbble logo' },
  { name: 'HubSpot', logo: '/images/hubspot.svg', alt: 'HubSpot logo' },
  { name: 'Notion', logo: '/images/notion.svg', alt: 'Notion logo' },
  { name: 'Netflix', logo: '/images/netflix.svg', alt: 'Netflix logo' },
  { name: 'Zoom', logo: '/images/zoom.svg', alt: 'Zoom logo' },
];

export const NAV_ITEMS: NavigationLink[] = [
  { label: 'About us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Use Cases', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Blog', href: '#' },
];


export const services: Omit<ServiceCardProps, "onLearnMore">[] = [
  {
    title: "Search engine\noptimization",
    bgColor: "bg-gray-100",
    titleBgColor: "bg-[#B6F09C]",
    textColor: "text-black",
    buttonTextColor: "text-black",
    buttonBgColor: "bg-black",
    arrowColor: "text-[#B6F09C]",
    imgUrl: "/images/card1.svg",
  },
  {
    title: "Pay-per-click\nadvertising",
    bgColor: "bg-[#B6F09C]",
    titleBgColor: "bg-white",
    textColor: "text-black",
    buttonTextColor: "text-black",
    buttonBgColor: "bg-black",
    arrowColor: "text-[#B6F09C]",
    imgUrl: "/images/card2.png",
  },
  {
    title: "Social Media\nMarketing",
    bgColor: "bg-black",
    titleBgColor: "bg-white",
    textColor: "text-black",
    buttonTextColor: "text-white",
    buttonBgColor: "bg-white",
    arrowColor: "text-black",
    imgUrl: "/images/card3.svg",
  },
  {
    title: "Email\nMarketing",
    bgColor: "bg-gray-100",
    titleBgColor: "bg-[#B6F09C]",
    textColor: "text-black",
    buttonTextColor: "text-black",
    buttonBgColor: "bg-black",
    arrowColor: "text-[#B6F09C]",
    imgUrl: "/images/card4.png",
  },
  {
    title: "Content\nCreation",
    bgColor: "bg-[#B6F09C]",
    titleBgColor: "bg-white",
    textColor: "text-black",
    buttonTextColor: "text-black",
    buttonBgColor: "bg-black",
    arrowColor: "text-[#B6F09C]",
    imgUrl: "/images/card5.svg",
  },
  {
    title: "Analytics and\nTracking",
    bgColor: "bg-black",
    titleBgColor: "bg-[#B6F09C]",
    textColor: "text-black",
    buttonTextColor: "text-white",
    buttonBgColor: "bg-white",
    arrowColor: "text-black",
    imgUrl: "/images/card6.svg",
  },
];
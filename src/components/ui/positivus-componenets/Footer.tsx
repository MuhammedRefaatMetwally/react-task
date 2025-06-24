import React from "react";
import type { NavigationLink, SocialLink, ContactInfo, FooterProps } from "@/lib/types";
import { DEFAULT_NAVIGATION , DEFAULT_SOCIAL_LINKS ,DEFAULT_CONTACT } from "@/lib/constants";
import Logo from "./Logo";
import NavigationFooterItem from "./NavigationFooterItem";
import SocialIcons from "./SocialIcons";
import ContactSection from "./ContactSection";
import NewsletterSection from "./NewsLetterSection";


const Footer: React.FC<FooterProps> = ({
  className = "",
  navigationLinks = DEFAULT_NAVIGATION,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  contactInfo = DEFAULT_CONTACT,
  companyName = "Positivus",
  logoSrc = "/images/logo.svg",
  onNewsletterSubmit,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={` ${className}`}>
      <footer className="footer-style">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center mb-8 lg:mb-12">
            <Logo companyName={companyName} logoSrc={logoSrc} />
            <NavigationFooterItem links={navigationLinks} />
            <SocialIcons links={socialLinks} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
            <ContactSection contactInfo={contactInfo} />
            <NewsletterSection onSubmit={onNewsletterSubmit} />
          </div>

          <div className="border-t border-gray-600 pt-6 sm:pt-8">
            <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 text-gray-400 text-xs sm:text-sm lg:text-base">
              <p className="text-center md:text-left">
                © {currentYear} {companyName}. All Rights Reserved.
              </p>
              <a
                href="#"
                className="hover:text-white transition-colors underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
export type { FooterProps, NavigationLink, SocialLink, ContactInfo };

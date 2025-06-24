import React, { useState } from "react";
import type { NavigationLink, SocialLink, ContactInfo, FooterProps } from "@/lib/types";
import { DEFAULT_NAVIGATION , DEFAULT_SOCIAL_LINKS ,DEFAULT_CONTACT } from "@/lib/constants";



const Logo: React.FC<{ companyName: string; logoSrc: string }> = ({
  companyName,
  logoSrc,
}) => (
  <div className="flex items-center space-x-2 justify-center sm:justify-start">
    <img
      className="logo-style"
      src={logoSrc}
      alt={`${companyName} logo`}
      loading="lazy"
    />
    <span className="text-xl sm:text-2xl font-medium">{companyName}</span>
  </div>
);

const Navigation: React.FC<{ links: NavigationLink[] }> = ({ links }) => (
  <div className="flex flex-wrap justify-center sm:justify-start lg:justify-center gap-4 sm:gap-6 lg:gap-8">
    {links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className={link.isActive ?"nav-link-active-style" : "nav-link-style"}
        aria-current={link.isActive ? "page" : undefined}
      >
        {link.label}
      </a>
    ))}
  </div>
);

const SocialIcons: React.FC<{ links: SocialLink[] }> = ({ links }) => (
  <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start lg:justify-end">
    {links.map((social) => {
      const Icon = social.icon;
      return (
        <a
          key={social.label}
          href={social.href}
          className="social-icon-style"
          aria-label={social.label}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        </a>
      );
    })}
  </div>
);

const ContactSection: React.FC<{ contactInfo: ContactInfo }> = ({
  contactInfo,
}) => (
  <div className="text-center sm:text-left">
    <div className="contact-badge-style">Contact us:</div>
    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
      <p>
        Email:{" "}
        <a
          href={`mailto:${contactInfo.email}`}
          className="hover:text-[#B6F09C] transition-colors"
        >
          {contactInfo.email}
        </a>
      </p>
      <p>
        Phone:{" "}
        <a
          href={`tel:${contactInfo.phone}`}
          className="hover:text-[#B6F09C] transition-colors"
        >
          {contactInfo.phone}
        </a>
      </p>
      <p>
        Address: {contactInfo.address.street}
        <br />
        {contactInfo.address.city}, {contactInfo.address.state}{" "}
        {contactInfo.address.zipCode}
      </p>
    </div>
  </div>
);

const NewsletterSection: React.FC<{ onSubmit?: (email: string) => void }> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      await onSubmit?.(email);
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="newsletter-container-style">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input-style"
              required
              disabled={isLoading}
              aria-label="Email address for newsletter"
            />
          </div>
          <button
            type="submit"
            className="subscribe-button-style"
            disabled={isLoading || !email.trim()}
          >
            {isLoading ? "Subscribing..." : "Subscribe to news"}
          </button>
        </form>
      </div>
    </div>
  );
};

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
    <div className={`contain-style ${className}`}>
      <footer className="footer-style">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Logo and Navigation */}
          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center mb-8 lg:mb-12">
            <Logo companyName={companyName} logoSrc={logoSrc} />
            <Navigation links={navigationLinks} />
            <SocialIcons links={socialLinks} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
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

import type { SocialLink } from "./Footer";

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


export default SocialIcons;
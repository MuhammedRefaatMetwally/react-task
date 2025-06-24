import type { NavigationLink } from "./Footer";

const NavigationFooterItem: React.FC<{ links: NavigationLink[] }> = ({ links }) => (
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

export default NavigationFooterItem;
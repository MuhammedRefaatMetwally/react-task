import { memo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full px-6 py-6 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="h-6 w-auto" src="/images/logo.svg" alt="Positivus logo" loading="lazy" />
          <span className="text-2xl font-semibold text-black">Positivus</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="hidden md:block border-2 border-black text-black hover:bg-black hover:text-white transition-colors rounded-xl px-6 py-2.5 text-sm font-medium"
        >
          Request a quote
        </button>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="flex flex-col px-6 py-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              className="border-2 border-black text-black hover:bg-black hover:text-white transition-colors rounded-xl px-6 py-2.5 text-sm font-medium self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a quote
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default memo(Navbar);
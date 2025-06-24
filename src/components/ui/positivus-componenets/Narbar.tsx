import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-6 py-6 bg-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className='h-6' src="/images/logo.svg" alt="logo" />
          <span className="text-2xl font-semibold text-black">Positivus</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-sm">
            About us
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-sm">
            Services
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-sm">
            Use Cases
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-sm">
            Pricing
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors font-medium text-sm">
            Blog
          </a>
        </nav>
        
        <button className="hidden md:block bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl px-6 py-2.5 font-medium text-sm">
          Request a quote
        </button>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a 
              href="#" 
              className="text-black hover:text-gray-600 transition-colors font-medium text-sm py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a 
              href="#" 
              className="text-black hover:text-gray-600 transition-colors font-medium text-sm py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#" 
              className="text-black hover:text-gray-600 transition-colors font-medium text-sm py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#" 
              className="text-black hover:text-gray-600 transition-colors font-medium text-sm py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="text-black hover:text-gray-600 transition-colors font-medium text-sm py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <button 
              className="bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl px-6 py-2.5 font-medium text-sm mt-4 self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-light tracking-[0.3em] text-white">
          LPG NAIROBI
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-amber-400 transition-colors">
            Home
          </a>
          <a href="#shop" className="text-white hover:text-amber-400 transition-colors">
            Shop
          </a>
          <a href="#create" className="text-white hover:text-amber-400 transition-colors">
            Create Your Scent
          </a>
          <a href="#about" className="text-white hover:text-amber-400 transition-colors">
            About
          </a>
          <a href="#contact" className="text-white hover:text-amber-400 transition-colors">
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-amber-400/20">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-amber-400 transition-colors">
              Home
            </a>
            <a href="#shop" className="text-white hover:text-amber-400 transition-colors">
              Shop
            </a>
            <a href="#create" className="text-white hover:text-amber-400 transition-colors">
              Create Your Scent
            </a>
            <a href="#about" className="text-white hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

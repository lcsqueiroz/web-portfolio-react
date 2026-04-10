import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal } from '../../../constants/personal';
import { navLinks } from '../../../constants/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Zona esquerda — Logo */}
        <span className="font-bold text-lg text-gray-900">{personal.name}</span>

        {/* Zona central — Links de navegação (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona direita — Redes sociais + hamburguer */}
        <div className="flex items-center gap-4">
          {/* Ícones sociais (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* Botão hamburguer (mobile) */}
          <button
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            className="md:hidden p-2 rounded text-gray-500 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMenuClose}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ícones sociais (mobile) */}
          <div className="flex items-center gap-6 pt-2 border-t border-gray-100">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

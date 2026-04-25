import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage, languages } from '../i18n/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { href: '#skills', label: t('nav.skills') },
    { href: '#languages', label: t('nav.languages') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#links', label: t('nav.links') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const currentLang = languages.find(l => l.code === language);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">🌌</span>
          <span>RG</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__language-selector">
          <button
            className="navbar__language-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{currentLang?.flag}</span>
            <span>{currentLang?.code.toUpperCase()}</span>
          </button>

          {isDropdownOpen && (
            <div className="navbar__language-dropdown">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`navbar__language-option ${language === lang.code ? 'active' : ''}`}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsDropdownOpen(false);
                  }}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#languages', label: 'Languages' },
    { href: '#projects', label: 'Projects' },
    { href: '#links', label: 'Links' },
    { href: '#contact', label: 'Contact' },
  ];

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
      </div>
    </motion.nav>
  );
};

export default Navbar;
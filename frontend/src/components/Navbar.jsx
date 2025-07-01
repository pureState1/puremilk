import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo_darkerbg.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="logo">
          <img src={logo} alt="PureState Logo" className="logo-img" />
        </div>

        {/* Center: Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/milk" onClick={closeMenu}>Milk Products</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li className="mobile-only">
            <a
              href="https://wa.me/919511112263"
              target="_blank"
              rel="noopener noreferrer"
              className="btn whatsapp-btn mobile"
              onClick={closeMenu}
            >
              Order via WhatsApp
            </a>
          </li>
        </ul>

        {/* Right: Action (desktop only) */}
        <div className="navbar-actions">
          <a
            href="https://wa.me/919511112263"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp-btn"
          >
            Order via WhatsApp
          </a>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

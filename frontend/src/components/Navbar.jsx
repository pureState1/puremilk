import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="logo">
            Pure<span>State</span>
        </div>

        {/* Center: Nav Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/milk">Milk Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Right: Actions */}
        <div className="navbar-actions">
          {/* <button className="btn login-btn">Login</button> */}
          <a
            href="https://wa.me/919999999999" // Replace with your number
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp-btn"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import '../styles/Footer.css';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo_darkerbg.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Tagline */}
        <div className="footer-brand">
        <img src={logo} alt="PureState Logo" className="footer-logo-img" />

          <p>Pure • Fresh • Nutritious — straight from our farms.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/milk">Our Milk</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📞 +91 9511112263</p>
          <p>✉️ purestatefarms@gmail.com</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61577960488871"><FaFacebookF /></a>
            <a href="https://www.instagram.com/purestateonline"><FaInstagram /></a>
            <a href="https://wa.me/919511112263" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PureState. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

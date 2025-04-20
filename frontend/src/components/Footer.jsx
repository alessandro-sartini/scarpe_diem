import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <span className="logo">ScarpeDiem</span>
      </div>
      <div className="footer-section links-section">
        <ul className="footer-links">
          <li>
            <a href="/about">Chi siamo</a>
          </li>
          <li>
            <a href="/contact">Contattaci</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="footer-section social-section">
        <a
          href="https://github.com/alessandro-sartini"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer-section contact-section">
        <p>
          Contattaci:{" "}
          <a href="mailto:info@scarpediem.com">info@scarpediem.com</a>
        </p>
        <p>Telefono: +39 123 456 7890</p>
      </div>
      <div className="footer-section copyright-section">
        <span>© 2025 ScarpeDiem. Tutti i diritti riservati.</span>
      </div>
    </footer>
  );
}

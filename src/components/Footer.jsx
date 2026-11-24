import Logo from './Logo.jsx'
import { navLinks, contact, footer, brand } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="glow-footer">
      <span className="glow-footer__glow" aria-hidden="true" />

      <div className="container">
        <div className="row g-4 footer-grid">
          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <Logo />
            <p className="footer-about">{footer.description}</p>
            <div className="footer-socials">
              {footer.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                >
                  <i className={`bi ${social.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="footer-title">{footer.quickLinksTitle}</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="footer-title">{footer.servicesTitle}</h4>
            <ul className="footer-links">
              {footer.servicesLinks.map((item) => (
                <li key={item}>
                  <a href="#services">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h4 className="footer-title">{footer.contactTitle}</h4>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-geo-alt" aria-hidden="true" />
                <span>{contact.info[0].value}</span>
              </li>
              <li>
                <i className="bi bi-telephone" aria-hidden="true" />
                <a href={`tel:${contact.info[1].value.replace(/\s/g, '')}`}>
                  {contact.info[1].value}
                </a>
              </li>
              <li>
                <i className="bi bi-envelope" aria-hidden="true" />
                <a href={`mailto:${contact.info[2].value}`}>{contact.info[2].value}</a>
              </li>
              <li>
                <i className="bi bi-clock" aria-hidden="true" />
                <span>Sat – Thu · 9:00 – 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="mb-0">
            © {year} {brand.name} {brand.suffix}. All rights reserved.
          </p>
          <div className="footer-bottom__links">
            {footer.legalLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
            <span className="footer-bottom__credit">
              Built with React &amp; Bootstrap
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

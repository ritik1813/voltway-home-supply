import { useEffect, useState } from 'react';
import { LogoMark, WhatsAppIcon } from './icons';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="site"
      style={{ boxShadow: scrolled ? '0 4px 20px rgba(11,27,43,0.08)' : 'none' }}
    >
      <nav className="main">
        <a href="#top" className="logo">
          <LogoMark />
          <span>
            JP Pro Supply<span className="sub">Electrical, Plumbing &amp; Automation Supply</span>
          </span>
        </a>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Specialisations</a>
          <a href="#estimator" onClick={() => setMenuOpen(false)}>Estimator</a>
          <a href="#packages" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </div>
        <div className="nav-cta">
          <a href="#quote" className="btn btn-ghost btn-sm">Get a Quote</a>
          <a href="https://wa.me/919999999999" className="btn btn-primary btn-sm">
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </div>
        <button
          className="burger"
          aria-label="menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

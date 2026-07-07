import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './icons';

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
          <img src="/brands/jp-logo.png" alt="JP Pro Supply logo" className="logo-img" />
          <span className="brand-text">
            <span className="brand-name">
              <span className="bn-blue">JP</span>{' '}
              <span className="bn-orange">PRO</span>{' '}
              <span className="bn-blue">SUPPLY</span>
            </span>
            <span className="brand-cats">
              ELECTRICAL <span className="sep">|</span> PLUMBING <span className="sep">|</span> HOME AUTOMATION
            </span>
          </span>
        </a>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#packages" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </div>
        <div className="nav-cta">
          <a href="#quote" className="btn btn-ghost btn-sm">Get a Quote</a>
          <a href="https://wa.me/917982827516" className="btn btn-primary btn-sm nav-wa-btn">
            <WhatsAppIcon />
            <span className="nav-wa-label">WhatsApp Us</span>
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

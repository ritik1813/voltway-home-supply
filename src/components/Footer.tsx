export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span className="footer-logo-chip">
                <img src="/brands/jp-logo.png" alt="JP Pro Supply logo" />
              </span>
              <span className="brand-name brand-name-light">
                <span className="bn-light">JP</span>{' '}
                <span className="bn-orange">PRO</span>{' '}
                <span className="bn-light">SUPPLY</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, maxWidth: '280px', color: 'rgba(247,244,236,0.6)' }}>
              Electrical, plumbing and home automation material supply for flat owners,
              contractors and builders across Gurgaon &amp; NCR.
            </p>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#packages">Solutions</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="/blog/">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Categories</h5>
            <ul>
              <li><a href="#products">Electrical Supply</a></li>
              <li><a href="#products">Plumbing Supply</a></li>
              <li><a href="#products">Home Automation Supply</a></li>
              <li><a href="#packages">Site Material Supply</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Get in touch</h5>
            <ul>
              <li>+91 93107 65871</li>
              <li>contact@jpprosupply.com</li>
              <li>Gurgaon &amp; NCR</li>
              <li>Mon–Sat, 9:30am–7:30pm</li>
            </ul>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/144014607" target="_blank" rel="noopener" aria-label="JP Pro Supply on LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61595050932583" target="_blank" rel="noopener" aria-label="JP Pro Supply on Facebook" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JP Pro Supply. All rights reserved.</span>
          <span>GSTIN: 06CJAPS4363K1ZX</span>
        </div>
      </div>
    </footer>
  );
}

import { LogoMark } from './icons';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <LogoMark size={32} bgFill="#142B45" />
              JP Pro Supply
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, maxWidth: '280px', color: 'rgba(247,244,236,0.6)' }}>
              Electrical, plumbing and home automation material supply for flat owners,
              contractors and builders across Gurgaon &amp; NCR.
            </p>
            <div className="footer-social" style={{ marginTop: '20px' }}>
              <a href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.31-1.39a9.9 9.9 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2" />
                </svg>
              </a>
              <a href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6zm9.65 1.5a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </a>
              <a href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 001.81-2.27 8.2 8.2 0 01-2.6 1A4.1 4.1 0 0012.4 9.1a11.65 11.65 0 01-8.45-4.29 4.1 4.1 0 001.27 5.47A4.07 4.07 0 013.4 9.7v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 18.4a11.6 11.6 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.3 8.3 0 0022 5.92z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#capabilities">Specialisations</a></li>
              <li><a href="#estimator">Material Estimator</a></li>
              <li><a href="#packages">Solutions</a></li>
              <li><a href="#why">Why Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Categories</h5>
            <ul>
              <li><a href="#capabilities">Electrical Supply</a></li>
              <li><a href="#capabilities">Plumbing Supply</a></li>
              <li><a href="#capabilities">Home Automation Supply</a></li>
              <li><a href="#packages">Site Material Supply</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Get in touch</h5>
            <ul>
              <li>+91 99999 99999</li>
              <li>hello@jpprosupply.in</li>
              <li>Gurgaon &amp; NCR</li>
              <li>Mon–Sat, 9:30am–7:30pm</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JP Pro Supply. All rights reserved.</span>
          <span>GSTIN: XXAAAAA0000A1Z5</span>
        </div>
      </div>
    </footer>
  );
}

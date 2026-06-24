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

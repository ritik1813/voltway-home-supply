export function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Core Specialisations</span>
          <h2>Top-tier materials, sourced directly.</h2>
          <p>
            We supply an exhaustive range of electrical infrastructure, sanitary networks, and smart technologies—all consolidated to match your exact floor plan or bill of quantities.
          </p>
        </div>

        <div className="cap-grid">
          <div className="cap-card electrical">
            <div className="icon-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L4.5 13.5H11L10 22L19 9.5H12.5L13 2Z" />
              </svg>
            </div>
            <h3>Electrical Infrastructure</h3>
            <p>
              Authorised cables, switchgears, distribution systems, and conduit piping for high-performance residential power distribution.
            </p>
            <div className="cap-tags">
              <span>Polycab &amp; Havells Wires</span>
              <span>Legrand MCBs</span>
              <span>L&amp;T Switchgears</span>
              <span>Conduits &amp; Fittings</span>
            </div>
          </div>

          <div className="cap-card plumbing">
            <div className="icon-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 3h6v4l4 4v4a4 4 0 01-4 4H9a4 4 0 01-4-4v-4l4-4V3z" />
              </svg>
            </div>
            <h3>Plumbing &amp; Sanitary</h3>
            <p>
              Lead-free CPVC/PVC water lines, high-density drainage networks, sanitaryware, and premium brass fittings sourced from direct trade partners.
            </p>
            <div className="cap-tags">
              <span>Astral CPVC/PVC</span>
              <span>Supreme Drainage</span>
              <span>Jaquar Fittings</span>
              <span>Hindware Sanitary</span>
            </div>
          </div>

          <div className="cap-card smart">
            <div className="icon-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
              </svg>
            </div>
            <h3>Smart Home Automation</h3>
            <p>
              App-controlled modular WiFi switches, smart lighting systems, security cameras, smart locks, and sensors for modern intelligent living.
            </p>
            <div className="cap-tags">
              <span>Smart Touch Plates</span>
              <span>Wipro Smart lighting</span>
              <span>Yale Smart Locks</span>
              <span>IoT Gateways</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

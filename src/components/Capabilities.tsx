export function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">What we deal in</span>
          <h2>Electrical, plumbing and home automation material.</h2>
          <p>
            Send us your material list or BOQ and we quote against current rates from our dealer
            network — for one flat or a full project.
          </p>
        </div>

        <div className="cap-grid">
          <div className="cap-card electrical">
            <div className="icon-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L4.5 13.5H11L10 22L19 9.5H12.5L13 2Z" />
              </svg>
            </div>
            <h3>Electrical Supply</h3>
            <p>
              Wires, MCBs, distribution boards, switchgear and fittings, supplied against your
              material list.
            </p>
            <div className="cap-tags">
              <span>Wires &amp; Cables</span>
              <span>MCBs &amp; DBs</span>
              <span>Switches</span>
              <span>Lights &amp; Fans</span>
              <span>Panels</span>
            </div>
          </div>

          <div className="cap-card plumbing">
            <div className="icon-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 3h6v4l4 4v4a4 4 0 01-4 4H9a4 4 0 01-4-4v-4l4-4V3z" />
              </svg>
            </div>
            <h3>Plumbing Supply</h3>
            <p>
              CPVC/PVC piping, bathroom and kitchen fittings, sanitaryware and tanks, sourced from
              authorised distributors.
            </p>
            <div className="cap-tags">
              <span>CPVC/PVC Pipes</span>
              <span>Taps &amp; Mixers</span>
              <span>Sanitaryware</span>
              <span>Tanks</span>
              <span>Fittings</span>
            </div>
          </div>

          <div className="cap-card smart">
            <div className="icon-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
              </svg>
            </div>
            <h3>Home Automation Supply</h3>
            <p>
              WiFi switches, smart lighting, video door units, sensors and cameras, supplied
              alongside your electrical material.
            </p>
            <div className="cap-tags">
              <span>WiFi Switches</span>
              <span>Smart Lighting</span>
              <span>Cameras</span>
              <span>Smart Locks</span>
              <span>Sensors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">What we deal in</span>
          <h2>Three categories, one reliable supplier.</h2>
          <p>
            We don't run a catalogue store. Tell us your flat size or material list, and we'll
            quote real current prices from our dealer network — not fixed online rates that go
            stale.
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
              Complete house wiring material to fittings — everything an electrician or new flat
              needs, in one order.
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
              Pipes, fittings and sanitaryware sourced from trusted brands — for bathrooms,
              kitchens and full builds.
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
            <div className="cap-badge">TRENDING</div>
            <div className="icon-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
              </svg>
            </div>
            <h3>Smart Home &amp; Automation</h3>
            <p>
              WiFi switches, smart lighting, video door phones, sensors and cameras — designed in
              at the wiring stage.
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

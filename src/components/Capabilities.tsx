export function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">What we deal in</span>
          <h2>Two trades, stocked and supplied at scale.</h2>
          <p>
            Send us your BOQ or site material list and we quote against current trade rates from
            our dealer network — not fixed catalogue prices that go stale before you order.
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
              Wires, MCBs, distribution boards, switchgear and fittings — supplied against your
              site material list, not bought piecemeal across multiple counters.
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
              CPVC/PVC piping, bathroom and kitchen fittings, sanitaryware and tanks — sourced
              from authorised distributors and dispatched to site in bulk.
            </p>
            <div className="cap-tags">
              <span>CPVC/PVC Pipes</span>
              <span>Taps &amp; Mixers</span>
              <span>Sanitaryware</span>
              <span>Tanks</span>
              <span>Fittings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

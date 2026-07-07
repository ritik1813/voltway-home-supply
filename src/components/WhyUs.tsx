export function WhyUs() {
  return (
    <section className="why-section" id="why">
      <div className="wrap">
        <div className="section-head center" style={{ maxWidth: '780px', marginBottom: '48px' }}>
          <span className="kicker">Why JP Pro Supply</span>
          <h2>A few reasons site owners &amp; builders partner with us.</h2>
          <p>
            We align our supply logistics with your execution schedule, ensuring authentic materials
            reach your site at unbeatable commercial rates.
          </p>
        </div>

        <div className="why-card-grid">
          {/* Card 1: Best Market Rates */}
          <div className="why-card">
            <div className="ico-box orange">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <circle cx="7" cy="7" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h4>Best Market Rates</h4>
            <p>Direct trade pricing that consistently beats retail quotes — compare us line-by-line, and rates are locked before dispatch.</p>
          </div>

          {/* Card 2: 100% Genuine */}
          <div className="why-card">
            <div className="ico-box green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <h4>100% Genuine Materials</h4>
            <p>Only genuine, ISI-marked materials with intact brand warranty &amp; proper GST invoices. Strict zero grey-market policy.</p>
          </div>

          {/* Card 3: Site Delivery */}
          <div className="why-card">
            <div className="ico-box blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h4>On-Time Site Delivery</h4>
            <p>Coordinated dispatch with your project phase schedule so your labour is never idle waiting for conduits or cables.</p>
          </div>

          {/* Card 4: 24 Hr Turnaround (Stat) */}
          <div className="why-card stat-card-new">
            <div className="stat-val">24 hr<span className="accent-dot">.</span></div>
            <div className="stat-label">Quote Turnaround</div>
            <p>Submit your architectural BOQ or hand-written list, and we'll deliver an itemised trade quote within 24 hours.</p>
          </div>

          {/* Card 5: 3-in-1 Integration (Stat) */}
          <div className="why-card stat-card-new">
            <div className="stat-val">3-in-1<span className="accent-dot">.</span></div>
            <div className="stat-label">Unified Supply</div>
            <p>Manage your entire site's Electrical, Plumbing, and Home Automation under a single trade account &amp; logistics channel.</p>
          </div>

          {/* Card 6: PAN India (Stat) */}
          <div className="why-card stat-card-new">
            <div className="stat-val">PAN India<span className="accent-dot">.</span></div>
            <div className="stat-label">Shipping Coverage</div>
            <p>Gurgaon-based with same-day local dispatch, shipping bulk material consignments safely to any site across India.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

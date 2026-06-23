const WHY_ITEMS = [
  {
    title: '100% Certified Sourcing',
    desc: 'Every length of wire, pipe, or smart module is pulled directly from authorised brand distributors. We enforce a strict zero grey-market policy.',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    title: 'Transparent BOQ Matching',
    desc: 'We verify and quote against your exact bill of quantities. Rates are locked prior to dispatch so there are never invoice surprises.',
    path: 'M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Single-Vendor Convenience',
    desc: 'Consolidate electrical, plumbing, and home automation materials under one trade account to streamline your billing and logistics.',
    path: 'M3 3v18h18M7 14l4-4 3 3 5-6',
  },
  {
    title: 'Phase-Wise Account Standing',
    desc: 'Reorder for upcoming construction phases or additional units instantly. Keep your site moving without repeating the quoting cycle.',
    path: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
  },
];

const STATS = [
  { n: 'Direct', l: 'Sourcing from authorised dealers' },
  { n: '3', l: 'Electrical, plumbing & home automation' },
  { n: 'Gurgaon', l: 'Based here, deliver across NCR' },
  { n: 'Any size', l: 'From a single flat to a full project' },
];

export function WhyUs() {
  return (
    <section className="why-section" id="why">
      <div className="wrap">
        <div className="why-grid">
          <div>
            <span className="kicker">Why JP Pro Supply</span>
            <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', marginBottom: '30px' }}>
              A few reasons people order from us.
            </h2>
            <div className="why-list">
              {WHY_ITEMS.map((item) => (
                <div className="why-item" key={item.title}>
                  <div className="ico">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={item.path} />
                    </svg>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-grid">
              {STATS.map((stat) => (
                <div className="stat" key={stat.n}>
                  <div className="n">{stat.n}</div>
                  <div className="l">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

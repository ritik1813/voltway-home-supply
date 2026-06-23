const WHY_ITEMS = [
  {
    title: 'Genuine products, always',
    desc: 'Sourced directly from authorised brand distributors — never grey market.',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    title: 'Quoted against your BOQ',
    desc: "We confirm material and rates upfront, so dispatch matches what's actually on your list.",
    path: 'M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'One dealer, full scope',
    desc: 'Stop coordinating separate electrical and plumbing vendors — order both on one account, one delivery schedule.',
    path: 'M3 3v18h18M7 14l4-4 3 3 5-6',
  },
  {
    title: 'Built for repeat, multi-site orders',
    desc: 'Standing accounts for builders running multiple towers or phases — reorder without requoting from scratch.',
    path: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
  },
];

const STATS = [
  { n: 'Direct', l: 'Sourcing from authorised dealers' },
  { n: '2 Trades', l: 'Electrical & plumbing, one account' },
  { n: 'Gurgaon', l: 'Based here, deliver across NCR' },
  { n: 'Bulk', l: 'Order capacity for active project sites' },
];

export function WhyUs() {
  return (
    <section className="why-section" id="why">
      <div className="wrap">
        <div className="why-grid">
          <div>
            <span className="kicker">Why JP Pro Supply</span>
            <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', marginBottom: '30px' }}>
              Built for people who can't afford to get this wrong.
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

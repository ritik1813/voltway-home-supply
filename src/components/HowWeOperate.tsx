const POINTS = [
  {
    iconBg: 'rgba(200,119,46,0.08)',
    iconColor: 'var(--copper)',
    path: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11',
    title: 'BOQ-Aligned Rates',
    body: 'We supply materials matching your architect’s BOQ at transparent trade rates, regardless of order volume.',
  },
  {
    iconBg: 'rgba(43,183,166,0.08)',
    iconColor: 'var(--cyan)',
    path: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
    title: 'Consolidated Accounts',
    body: 'Enjoy simplified site logistics and bookkeeping. We handle unified orders across every construction phase.',
  },
  {
    iconBg: 'rgba(16,38,61,0.06)',
    iconColor: 'var(--navy)',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'Direct Brand Dispatch',
    body: 'Every order is fulfilled from authorised distributor networks for brands like Havells, Polycab, Legrand, and Jaquar.',
  },
];

export function HowWeOperate() {
  return (
    <section id="how-we-operate" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">How we operate</span>
          <h2>A transparent relationship model.</h2>
          <p>No arbitrary pricing markups, no grey-market goods—just straightforward procurement against your specifications.</p>
        </div>
        <div className="operate-grid">
          {POINTS.map((point) => (
            <div className="operate-card" key={point.title}>
              <div
                className="icon-wrap"
                style={{
                  background: point.iconBg,
                  color: point.iconColor,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={point.path} />
                </svg>
              </div>
              <h4>{point.title}</h4>
              <p>{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

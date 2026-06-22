const POINTS = [
  {
    iconBg: 'rgba(200,119,46,0.12)',
    iconColor: 'var(--copper)',
    path: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11',
    title: 'We quote what we can actually deliver.',
    body: 'No padded promises. If a brand or item is out of stock or delayed at the dealer end, we tell you upfront before you commit.',
  },
  {
    iconBg: 'rgba(43,183,166,0.12)',
    iconColor: 'var(--cyan)',
    path: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
    title: 'Every order gets a GST invoice.',
    body: 'For your own records, your builder, or your interior designer — no cash-only, no off-book pricing.',
  },
  {
    iconBg: 'rgba(11,27,43,0.08)',
    iconColor: 'var(--navy)',
    path: 'M3 3v18h18M7 14l4-4 3 3 5-6',
    title: 'First few orders, founder-handled.',
    body: "Right now, you'll speak directly with us — not a call centre. We're building this on getting early orders right.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">New business, straight terms</span>
          <h2>We're starting out — here's exactly how we work.</h2>
          <p>We'd rather tell you plainly than fake a track record. This is what you can expect, every time.</p>
        </div>
        <div className="testi-grid">
          {POINTS.map((point) => (
            <div className="testi-card" key={point.title}>
              <div
                className="icon-box"
                style={{
                  background: point.iconBg,
                  color: point.iconColor,
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={point.path} />
                </svg>
              </div>
              <p className="quote" style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}>
                {point.title}
              </p>
              <p className="quote">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

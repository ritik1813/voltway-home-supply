const POINTS = [
  {
    iconBg: 'rgba(200,119,46,0.12)',
    iconColor: 'var(--copper)',
    path: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11',
    title: 'Quoted against your BOQ, not a catalogue.',
    body: 'Pricing is matched to your actual material list and current trade rates — not marked-up listed prices.',
  },
  {
    iconBg: 'rgba(43,183,166,0.12)',
    iconColor: 'var(--cyan)',
    path: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
    title: 'One account across every phase.',
    body: 'Builders running multi-tower or multi-phase projects get a single standing account instead of requoting each time.',
  },
  {
    iconBg: 'rgba(11,27,43,0.08)',
    iconColor: 'var(--navy)',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'Sourced only from authorised distributors.',
    body: 'Every order is pulled from our authorised dealer network for Havells, Polycab, Jaquar and other listed brands — never grey market.',
  },
];

export function HowWeOperate() {
  return (
    <section id="how-we-operate">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">How we operate</span>
          <h2>What builders and contractors get, every order.</h2>
          <p>No padded promises, no fixed catalogue pricing — just material quoted against your actual requirement.</p>
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

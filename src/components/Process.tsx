const STEPS = [
  { num: '01', title: 'Tell us your need', desc: 'Share your flat size, floor plan or project scope over WhatsApp or the quote form.' },
  { num: '02', title: 'Get a clear quote', desc: 'We prepare a room-wise material list with genuine brand options and pricing.' },
  { num: '03', title: 'We source & deliver', desc: 'Material is sourced from authorised dealers and delivered to your site in Gurgaon/NCR.' },
  { num: '04', title: 'Install & support', desc: 'We coordinate with your electrician/plumber and support smart device setup post-install.' },
];

export function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How it works</span>
          <h2>From inquiry to handover, in four steps.</h2>
        </div>
        <div className="process-wrap">
          <div className="process-line"></div>
          <div className="process-grid">
            {STEPS.map((step) => (
              <div className="step" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

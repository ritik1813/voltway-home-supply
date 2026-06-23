const STEPS = [
  { num: '01', title: 'Share your BOQ or site list', desc: 'Send your bill of quantities, floor plan or material list over WhatsApp or the quote form — single site or full project.' },
  { num: '02', title: 'Get a trade-rate quote', desc: 'We quote current trade rates against your list, brand-wise, with no inflated catalogue pricing.' },
  { num: '03', title: 'We source & dispatch', desc: 'Material is pulled from our authorised dealer network and dispatched to your site across Gurgaon/NCR.' },
  { num: '04', title: 'Reorder for the next phase', desc: 'Reorder against your existing account for the next tower or phase — no requoting from scratch.' },
];

export function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How it works</span>
          <h2>From BOQ to site dispatch, in four steps.</h2>
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

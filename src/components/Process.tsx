const STEPS = [
  { num: '01', title: 'Share your material list', desc: 'Send your BOQ, floor plan or material list over WhatsApp or the quote form — for one flat or a full project.' },
  { num: '02', title: 'Get a quote', desc: 'We quote against your list at current rates, brand-wise, usually within a day.' },
  { num: '03', title: 'We source and deliver', desc: 'Material is sourced from our authorised dealer network and delivered to your site or flat across Gurgaon and NCR.' },
  { num: '04', title: 'Reorder anytime', desc: 'Need more later, for the next room, phase or tower — reorder against the same list.' },
];

export function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How it works</span>
          <h2>How an order works, start to finish.</h2>
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

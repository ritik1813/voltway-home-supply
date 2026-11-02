const STEPS = [
  { num: '01', title: 'Tell us about your project', desc: 'A flat, a builder floor or a multi-tower site. Share whatever you have: a list, a BOQ, a floor plan or just a description, over WhatsApp or the form.' },
  { num: '02', title: 'We plan and price it with you', desc: 'We check the list across electrical, plumbing and automation, fill the gaps, suggest brands for your budget and price it brand-wise at trade rates.' },
  { num: '03', title: 'We source and deliver', desc: 'Genuine material from authorised brand channels, delivered in stages to your flat or site across Gurgaon and NCR, with one GST invoice.' },
  { num: '04', title: 'One partner for the whole project', desc: 'Top-ups, the next phase, the next tower: same account, same rates, same person to call.' },
];

export function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How it works</span>
          <h2>Working with us, start to finish.</h2>
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

import { WhatsAppIcon } from './icons';

export function CtaBand() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-band">
          <div>
            <h3>Need electrical, plumbing or automation material?</h3>
            <p>Send your material list or BOQ on WhatsApp — get a quote within 24 hours, for one flat or a full project.</p>
          </div>
          <div className="actions">
            <a href="https://wa.me/919999999999" className="btn btn-light">
              <WhatsAppIcon />
              WhatsApp Now
            </a>
            <a href="#quote" className="btn" style={{ background: 'var(--navy)', color: '#fff' }}>
              Fill Quote Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

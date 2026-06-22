import { WhatsAppIcon } from './icons';

export function CtaBand() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-band">
          <div>
            <h3>Moving into a new flat soon?</h3>
            <p>Send us your floor plan or flat size on WhatsApp — get a material quote within 24 hours.</p>
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

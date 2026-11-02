import { WhatsAppIcon } from './icons';

export function CtaBand() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-band">
          <div>
            <h3>One supplier for your whole project, from the first wire to the last tap.</h3>
            <p>Flat, builder floor or multi-tower site: tell us what you are building and we take care of the complete electrical, plumbing and automation supply at the best trade rates.</p>
          </div>
          <div className="actions">
            <a href="https://wa.me/919310765871" className="btn btn-light">
              <WhatsAppIcon />
              Talk to Us on WhatsApp
            </a>
            <a href="#quote" className="btn" style={{ background: 'var(--navy)', color: '#fff' }}>
              Tell Us About Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

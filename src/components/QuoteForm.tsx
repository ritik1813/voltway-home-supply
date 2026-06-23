import { useState, type FormEvent } from 'react';

const ROLES = ['Flat Owner', 'Contractor / MEP Team', 'Builder / Developer', 'Architect / Designer'];

export function QuoteForm() {
  const [role, setRole] = useState(ROLES[0]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thanks! This is a demo form — connect it to WhatsApp API, Google Sheets, or your CRM to start receiving real leads.');
  };

  return (
    <section className="quote-section" id="quote">
      <div className="wrap">
        <div className="quote-grid">
          <div className="quote-info">
            <span className="kicker">Procurement Request</span>
            <h2 style={{ fontSize: 'clamp(26px,3vw,32px)', marginBottom: '14px' }}>
              Request a trade quotation.
            </h2>
            <p>
              Submit your architectural bill of quantities (BOQ) or material list. Our procurement team will verify your requirements and deliver a transparent, itemised quote at direct trade rates.
            </p>

            <div style={{ marginTop: '30px' }}>
              <div className="info-row">
                <div className="ico">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong>Call or WhatsApp</strong>
                  <span>+91 99999 99999</span>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4V4zM4 8h16M9 4v16" />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>hello@jpprosupply.in</span>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong>Service area</strong>
                  <span>Gurgaon, Sohna Road, DLF, New Gurugram &amp; NCR</span>
                </div>
              </div>
            </div>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91" required />
              </div>
            </div>
            <div className="form-row">
              <div className="field full">
                <label>I am a...</label>
                <div className="chip-select">
                  {ROLES.map((option) => (
                    <span
                      key={option}
                      className={`chip${role === option ? ' active' : ''}`}
                      onClick={() => setRole(option)}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Project Scope / Quantity</label>
                <input type="text" placeholder="e.g. 3BHK flat, or 40-flat tower Phase 2" />
              </div>
              <div className="field">
                <label>Site Locality</label>
                <input type="text" placeholder="e.g. Sector 82, Gurgaon" />
              </div>
            </div>
            <div className="form-row">
              <div className="field full">
                <label>What do you need?</label>
                <textarea placeholder="e.g. Complete electrical + plumbing material for a 3BHK flat, or BOQ for 3 towers"></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Requirement
            </button>
            <p className="form-note">We respond within 24 hours on business days — usually much faster.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

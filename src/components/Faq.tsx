import { useState } from 'react';
import { PlusIcon } from './icons';

const FAQS = [
  {
    q: 'Is there a minimum order size for trade pricing?',
    a: "There's no fixed minimum, but trade rates apply from site or multi-unit orders — typically a flat's full electrical or plumbing BOQ and above. Share your scope and we'll confirm the rate that applies.",
  },
  {
    q: 'Can you supply across multiple towers or phases under one account?',
    a: 'Yes — most builder accounts run as a single standing account across phases, with scheduled dispatch and one consolidated billing cycle instead of requoting for every order.',
  },
  {
    q: "How is pricing decided without a fixed catalogue?",
    a: 'Trade rates move with brand, quantity and current market rates. We quote against your actual BOQ or material list, usually within a day.',
  },
  {
    q: 'Do you deliver outside Gurgaon?',
    a: 'Our standard dispatch covers Gurgaon and NCR. For larger project orders we also ship select material further — confirm with us at the quoting stage.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Common questions</span>
          <h2>Good to know before you reach out.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={faq.q}>
                <div
                  className="faq-q"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.q} <PlusIcon />
                </div>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

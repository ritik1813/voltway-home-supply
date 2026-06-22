import { useState } from 'react';
import { PlusIcon } from './icons';

const FAQS = [
  {
    q: 'Do you have a shop I can visit?',
    a: 'We operate as a supply company without a retail walk-in shop — this keeps our prices competitive. We work entirely through WhatsApp, calls and site visits when needed for larger projects.',
  },
  {
    q: "How is pricing decided if there's no listed catalogue?",
    a: 'Material pricing changes often and depends on brand, quantity and current rates. We give you an accurate, itemised quote, usually within a day of understanding your requirement — no inflated catalogue prices.',
  },
  {
    q: 'Can you handle installation too?',
    a: 'We focus on genuine material supply and coordinate closely with your electrician or plumber. For smart home devices, we also support setup and app configuration on handover.',
  },
  {
    q: 'Do you supply outside Gurgaon?',
    a: 'Our fastest delivery is across Gurgaon and NCR. For bulk project orders, we can also ship select items further — ask us when you reach out.',
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

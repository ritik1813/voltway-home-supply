import { ArrowRightIcon, CheckIcon } from './icons';

const PACKAGES = [
  {
    tag: 'NEW FLAT OWNERS',
    title: 'Complete Flat Supply',
    desc: 'Full electrical + plumbing material for a new or under-construction flat, planned against your floor plan.',
    items: ['Room-wise material list & quote', 'Single delivery, single invoice', 'Electrician/plumber coordination'],
    featured: false,
  },
  {
    tag: 'MOST REQUESTED',
    title: 'Smart Home Setup',
    desc: 'Make your new flat automation-ready — switches, lighting and security planned before wiring closes.',
    items: ['WiFi switch & smart lighting layout', 'Video door phone & camera points', 'App setup & demo on handover'],
    featured: true,
  },
  {
    tag: 'BUILDERS & CONTRACTORS',
    title: 'Bulk Project Supply',
    desc: 'Ongoing material supply for multiple flats or sites, with trade pricing and flexible billing cycles.',
    items: ['Volume / trade pricing', 'Scheduled site deliveries', 'Dedicated account contact'],
    featured: false,
  },
];

export function Packages() {
  return (
    <section className="pkg-section" id="packages">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Solutions, not just supply</span>
          <h2>Built around how people actually buy.</h2>
          <p>
            Whether you're moving into a new flat, renovating, or managing a builder project —
            pick the path that fits.
          </p>
        </div>

        <div className="pkg-grid">
          {PACKAGES.map((pkg) => (
            <div className={`pkg-card${pkg.featured ? ' featured' : ''}`} key={pkg.title}>
              <span
                className="pkg-tag"
                style={pkg.featured ? { background: 'var(--cyan)', color: '#06372F' } : undefined}
              >
                {pkg.tag}
              </span>
              <h3>{pkg.title}</h3>
              <p className="desc">{pkg.desc}</p>
              <ul className="pkg-list">
                {pkg.items.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#quote" className="pkg-cta">
                Get this quote <ArrowRightIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

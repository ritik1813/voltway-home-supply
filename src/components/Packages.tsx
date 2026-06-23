import { ArrowRightIcon, CheckIcon } from './icons';

const PACKAGES = [
  {
    tag: 'FLAT OWNERS & DESIGNERS',
    title: 'Individual Flat Supply',
    desc: 'Bespoke material packages for single apartment renovations or fit-outs. We match your designer specifications with direct-from-distributor pricing.',
    items: ['Precision matching to your floor plan', 'Authentic brands & finish support', 'Direct trade rates, no retail markups'],
    featured: false,
  },
  {
    tag: 'CONTRACTORS & MEP TEAMS',
    title: 'Contractor Site Supply',
    desc: 'On-demand electrical and plumbing materials matched to your site BOQ. We keep your project on schedule with coordinated dispatch.',
    items: ['Precise BOQ alignment & verification', 'Flexible mid-project top-up orders', 'Dedicated logistics coordinator for site delivery'],
    featured: false,
  },
  {
    tag: 'BUILDERS & DEVELOPERS',
    title: 'Bulk Project Partnerships',
    desc: 'Consolidated, phase-wise supply agreements for large residential developments. Maximise your margins with wholesale pricing tiers.',
    items: ['Wholesale volume discount structures', 'Scheduled, phase-aligned site deliveries', 'Single commercial account & billing history'],
    featured: true,
  },
];

export function Packages() {
  return (
    <section className="pkg-section" id="packages">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">How we supply</span>
          <h2>Pick what matches your project.</h2>
          <p>
            From a single flat's material list to ongoing multi-tower supply — quoted against
            what you actually need.
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

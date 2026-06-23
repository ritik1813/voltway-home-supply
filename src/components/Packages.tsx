import { ArrowRightIcon, CheckIcon } from './icons';

const PACKAGES = [
  {
    tag: 'FLAT OWNERS & DESIGNERS',
    title: 'Single Flat & Fit-Out Supply',
    desc: 'Material and fittings for one flat or a design specification — the same sourcing and pricing approach we use for larger orders.',
    items: ['Matched to your floor plan or spec', 'Brand and finish selection support', 'Same authorised sourcing as larger orders'],
    featured: false,
  },
  {
    tag: 'CONTRACTORS & MEP TEAMS',
    title: 'Site Material Supply',
    desc: 'Electrical, plumbing and automation material matched to your BOQ for an active site — ordered once, delivered as work progresses.',
    items: ['BOQ-matched material list', 'Mid-project top-up orders', 'Direct coordination with your site engineer'],
    featured: false,
  },
  {
    tag: 'BUILDERS & DEVELOPERS',
    title: 'Bulk Project Supply',
    desc: 'Standing or phase-wise material supply for ongoing flat construction — trade pricing, scheduled site dispatch, one account across every tower.',
    items: ['Trade pricing on volume orders', 'Phase-wise or scheduled site delivery', 'One consolidated account & billing cycle'],
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

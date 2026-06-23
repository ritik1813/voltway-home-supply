import { ArrowRightIcon, CheckIcon } from './icons';

const PACKAGES = [
  {
    tag: 'BUILDERS & DEVELOPERS',
    title: 'Bulk Project Supply',
    desc: 'Standing or phase-wise material supply for ongoing flat construction — trade pricing, scheduled site dispatch, one account across every tower.',
    items: ['Trade pricing on volume orders', 'Phase-wise / scheduled site delivery', 'Single consolidated account & billing cycle'],
    featured: true,
  },
  {
    tag: 'CONTRACTORS & MEP TEAMS',
    title: 'Site Material Supply',
    desc: 'Electrical and plumbing material matched to your BOQ for an active site — ordered once, delivered as work progresses.',
    items: ['BOQ-matched material list', 'Mid-project top-up orders', 'Direct coordination with your site engineer'],
    featured: false,
  },
  {
    tag: 'ARCHITECTS & DESIGNERS',
    title: 'Spec & Fit-Out Supply',
    desc: 'Switch, sanitaryware and fitting selections sourced to match your design specification, from a single unit to a full project.',
    items: ['Brand & finish matching to spec', 'Sample/selection support before bulk order', 'Supply across single units to full projects'],
    featured: false,
  },
];

export function Packages() {
  return (
    <section className="pkg-section" id="packages">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Bulk supply structures</span>
          <h2>Built for how bulk buyers actually order.</h2>
          <p>
            Builders, contractors and design teams each order differently. Pick the structure
            that matches how your project runs.
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

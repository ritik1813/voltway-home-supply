import { ArrowRightIcon, CheckIcon } from './icons';

const PACKAGES = [
  {
    tag: 'FLAT OWNERS & DESIGNERS',
    title: 'Individual Flat Supply',
    desc: 'Complete material for a renovation or new-flat fit-out from one trusted supplier: wiring to taps to smart switches, matched to your designer\u2019s specification at direct trade rates.',
    items: ['Every category from one place, one delivery', 'Genuine brands & finish support', 'Direct trade rates, no retail markups'],
    featured: false,
  },
  {
    tag: 'CONTRACTORS & MEP TEAMS',
    title: 'Contractor Site Supply',
    desc: 'A reliable supply partner for running sites: electrical, plumbing and automation on one account, dispatched to your schedule so labour never waits for material.',
    items: ['Rates held for the order, no surprises', 'Mid-project top-ups, same account, same rates', 'Dedicated coordinator for site delivery'],
    featured: false,
  },
  {
    tag: 'BUILDERS & DEVELOPERS',
    title: 'Bulk Project Partnerships',
    desc: 'Long-term, phase-wise supply partnerships for large residential developments: all three categories, wholesale pricing tiers and one commercial account across towers.',
    items: ['Wholesale volume pricing', 'Scheduled, phase-aligned site deliveries', 'Single commercial account across towers'],
    featured: true,
  },
];

interface PackagesProps {
  onSelectPackage?: (role: string, categories: string[], ctaText: string) => void;
}

export function Packages({ onSelectPackage }: PackagesProps) {
  return (
    <section className="pkg-section" id="packages">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">How we supply</span>
          <h2>One trusted supplier, whatever the size of your project.</h2>
          <p>
            From a single flat to multi-tower developments, we supply the complete list, electrical,
            plumbing and home automation, from one account at rates that hold.
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
              <a
                href="#quote"
                className="pkg-cta"
                onClick={() => {
                  let role = 'Flat Owner';
                  let cats = ['Electrical', 'Plumbing'];
                  let ctaText = 'Start My Flat Supply';
                  if (pkg.title.includes('Contractor')) {
                    role = 'Contractor / MEP Team';
                    ctaText = 'Set Up My Site Supply';
                  } else if (pkg.title.includes('Bulk')) {
                    role = 'Builder / Developer';
                    cats = ['Electrical', 'Plumbing', 'Home Automation'];
                    ctaText = 'Discuss a Project Partnership';
                  }
                  onSelectPackage?.(role, cats, ctaText);
                }}
              >
                Start with this <ArrowRightIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

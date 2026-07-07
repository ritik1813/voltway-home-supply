import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, WhatsAppIcon } from './icons';

const WA_NUMBER = '917982827516';

type Category = {
  id: string;
  accent: 'electrical' | 'plumbing' | 'smart';
  image: string;
  imageAlt: string;
  title: string;
  blurb: string;
  brands: string;
  groups: { title: string; items: string[] }[];
};

const CATEGORIES: Category[] = [
  {
    id: 'electrical',
    accent: 'electrical',
    image: '/categories/electrical.jpg',
    imageAlt: 'Electrician installing wiring and switchboard',
    title: 'Electrical Materials',
    blurb:
      'Everything a home needs from the meter to the last light point — wires, switches, MCBs, lighting and fans, all from authorised brand channels.',
    brands: 'Polycab · Havells · Finolex · Legrand · Schneider · Anchor · GM Modular · Wipro',
    groups: [
      {
        title: 'Wires & Cables',
        items: [
          'FR / FRLS house wire (0.75–6 sq mm)',
          'Multi-strand flexible wire',
          'Submain & armoured cable',
          'CAT-6 / LAN cable',
          'Coaxial TV cable',
          'CCTV & speaker wire',
          'Telephone wire',
        ],
      },
      {
        title: 'Switches & Sockets',
        items: [
          'Modular switches',
          '6A / 16A sockets',
          'Switch plates & support frames',
          'Dimmers & fan regulators',
          'USB charging sockets',
          'Bell push & door chimes',
          'TV / data / telephone points',
        ],
      },
      {
        title: 'MCBs, DBs & Protection',
        items: [
          'MCBs (6A–63A)',
          'RCCB / ELCB',
          'Isolators & changeover switches',
          'SPN / TPN distribution boards',
          'MCB enclosures',
          'Surge protection devices',
          'Busbars & DB accessories',
        ],
      },
      {
        title: 'Lighting',
        items: [
          'LED panel lights',
          'COB & recessed downlights',
          'LED strip & profile lighting',
          'Spotlights & track lights',
          'Wall & mirror lights',
          'LED battens & bulbs',
          'Outdoor, gate & garden lights',
          'LED drivers',
        ],
      },
      {
        title: 'Fans & Ventilation',
        items: [
          'Ceiling fans (standard & BLDC)',
          'Exhaust fans',
          'Wall & pedestal fans',
          'Fresh-air ventilation fans',
        ],
      },
      {
        title: 'Conduits & Accessories',
        items: [
          'ISI PVC conduit pipes',
          'Bends, couplers & tees',
          'Concealed metal / PVC boxes',
          'Fan boxes & hooks',
          'Casing-capping',
          'Insulation tape, cable ties & clips',
        ],
      },
    ],
  },
  {
    id: 'plumbing',
    accent: 'plumbing',
    image: '/categories/plumbing.jpg',
    imageAlt: 'Chrome bath mixer and shower fittings',
    title: 'Plumbing & Sanitary',
    blurb:
      'Complete water supply, bathroom and drainage material — from CPVC lines inside the wall to the CP fittings and sanitaryware you see every day.',
    brands: 'Jaquar · Astral · Supreme · Ashirvad · Hindware · Cera · Kohler · Grohe',
    groups: [
      {
        title: 'Water Supply Pipes & Fittings',
        items: [
          'CPVC pipes & fittings',
          'UPVC pipes & fittings',
          'Composite / multilayer pipes',
          'Brass transition fittings',
          'Solvent cement, teflon & sealants',
        ],
      },
      {
        title: 'Valves',
        items: [
          'Ball valves',
          'Angle valves',
          'Concealed & stop valves',
          'Non-return valves',
          'Pressure reducing valves',
        ],
      },
      {
        title: 'Taps, Showers & CP Fittings',
        items: [
          'Basin taps & mixers',
          'Wall mixers & diverters',
          'Overhead rain showers',
          'Hand showers',
          'Health faucets & jet sprays',
          'Bib cocks & sink cocks',
          'Towel rails, hooks & bath accessories',
        ],
      },
      {
        title: 'Sanitaryware',
        items: [
          'Wall-hung & floor-mounted WCs',
          'Wash basins & counter basins',
          'Concealed cisterns & flush plates',
          'Soft-close seat covers',
          'Kitchen sinks',
          'Urinals & partitions',
        ],
      },
      {
        title: 'Drainage & SWR',
        items: [
          'SWR pipes & fittings',
          'Nahani / floor traps',
          'Gully & P-traps',
          'SS & brass floor drains / jalis',
          'Rainwater pipes',
        ],
      },
      {
        title: 'Storage & Hot Water',
        items: [
          'Overhead water tanks',
          'Storage & instant geysers',
          'Pressure boosting pumps',
        ],
      },
    ],
  },
  {
    id: 'automation',
    accent: 'smart',
    image: '/categories/automation.jpg',
    imageAlt: 'Smart door lock controlled from a phone app',
    title: 'Home Automation',
    blurb:
      'App-controlled switches, smart locks, cameras and sensors that work on your existing wiring — supplied as a complete, compatible kit for your home.',
    brands: 'Yale · Godrej · Wipro Smart · Philips WiZ · Schneider Wiser · TP-Link Tapo',
    groups: [
      {
        title: 'Smart Switches & Panels',
        items: [
          'WiFi touch switch panels',
          'Retrofit smart modules (fit behind existing switches)',
          'Smart dimmers & fan controllers',
          'Scene & mood controllers',
        ],
      },
      {
        title: 'Smart Lighting',
        items: [
          'Smart LED bulbs (RGB + tunable white)',
          'Smart LED strips',
          'Motion-sensor lights',
          'Automated balcony & facade lighting',
        ],
      },
      {
        title: 'Security & Access',
        items: [
          'Smart door locks',
          'Video door phones',
          'WiFi cameras (indoor & outdoor)',
          'Video doorbells',
        ],
      },
      {
        title: 'Sensors & Safety',
        items: [
          'Motion / occupancy sensors',
          'Door & window sensors',
          'Gas leak detectors',
          'Smoke detectors',
          'Water leak sensors',
        ],
      },
      {
        title: 'Comfort & Control',
        items: [
          'Smart curtain & blind motors',
          'IR blasters for AC / TV control',
          'Smart plugs & power strips',
          'Hubs & gateways',
          'Alexa / Google Home integration',
        ],
      },
    ],
  },
];

function waLink(categoryTitle: string) {
  const msg = `Hi JP Pro Supply, I need a quote for ${categoryTitle} for my home/site in Gurgaon. Please share rates.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

interface ProductsProps {
  onSelectCategory?: (categoryTitle: string, ctaText: string) => void;
}

export function Products({ onSelectCategory }: ProductsProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openId) {
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [openId]);

  const openCategory = CATEGORIES.find((c) => c.id === openId);

  return (
    <section id="products">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Product Categories</span>
          <h2>Every material your home needs, in one place.</h2>
          <p>
            Browse the full range we supply against your list or BOQ. Open a category to see
            every item — then send us the list for a brand-wise trade quote.
          </p>
        </div>

        <div className="prod-grid">
          {CATEGORIES.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <div
                className={`prod-card ${cat.accent}${isOpen ? ' active' : ''}`}
                key={cat.id}
                onClick={() => setOpenId(isOpen ? null : cat.id)}
              >
                <div className="prod-img">
                  <img src={cat.image} alt={cat.imageAlt} loading="lazy" />
                  <span className="prod-count">{cat.groups.reduce((n, g) => n + g.items.length, 0)}+ item types</span>
                </div>
                <div className="prod-body">
                  <h3>{cat.title}</h3>
                  <p>{cat.blurb}</p>
                  <button type="button" className="prod-toggle">
                    {isOpen ? 'Hide item list' : 'View full item list'} <ArrowRightIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {openCategory && (
          <div className="prod-panel" ref={panelRef}>
            <div className="prod-panel-head">
              <div>
                <h3>{openCategory.title} — full item list</h3>
                <p className="prod-brands">Brands we source: {openCategory.brands}</p>
              </div>
              <div className="prod-panel-cta">
                <a href={waLink(openCategory.title)} className="btn btn-primary btn-sm">
                  <WhatsAppIcon />
                  Get quote for this list
                </a>
                <a
                  href="#quote"
                  className="btn btn-ghost btn-sm"
                  onClick={() => {
                    const ctaText = `Request ${openCategory.title} Quote`;
                    onSelectCategory?.(openCategory.title, ctaText);
                  }}
                >
                  Use quote form
                </a>
              </div>
            </div>
            <div className="prod-groups">
              {openCategory.groups.map((group) => (
                <div className="prod-group" key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="prod-note">
              Don't see an item? We source it. Send your complete list — we quote everything
              in one consolidated quotation.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Single source of truth for business facts used in SEO markup and generated pages.
// The React components still hard-code these for display; keep both in sync.
export const business = {
  name: 'JP Pro Supply',
  legalName: 'JP Pro Supply',
  alternateNames: ['jpprosupply', 'JPProSupply', 'JP Pro Supply Gurgaon'],
  siteUrl: 'https://www.jpprosupply.com',
  logo: 'https://www.jpprosupply.com/brands/jp-logo.png',
  ogImage: 'https://www.jpprosupply.com/og-image.png',
  phoneDisplay: '+91 93107 65871',
  phoneE164: '+919310765871',
  whatsappNumber: '919310765871',
  email: 'contact@jpprosupply.com',
  gstin: '06CJAPS4363K1ZX',
  address: {
    streetAddress: 'Sector 52',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122003',
    addressCountry: 'IN',
  },
  geo: { latitude: 28.4425, longitude: 77.0745 },
  hours: 'Mon-Sat, 9:30am-7:30pm',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:30',
    },
  ],
  description:
    'JP Pro Supply is a one-stop electrical, plumbing and home automation material dealer based in Sector 52, Gurugram, supplying flat owners, contractors, MEP teams and builders across Gurgaon, Delhi NCR, Noida, Faridabad and Ghaziabad. Customers send one BOQ or material list and get one brand-wise quote at current trade rates and one delivery to site, instead of collecting quotes from separate electrical and sanitary shops.',
  shortDescription:
    'One-stop electrical, plumbing and home automation material supplier in Gurgaon and NCR. One BOQ, one quote at trade rates, one delivery.',
  usp:
    'Everything for a flat or site from one supplier: electrical, plumbing and sanitary, and home automation on a single quote, a single delivery and a single invoice. Customers come to us because they no longer have to visit or chase an electrical shop, a sanitary shop and an automation vendor separately.',
  areaServed: [
    'Gurugram',
    'Gurgaon',
    'New Gurugram',
    'Manesar',
    'Sohna',
    'Delhi',
    'South Delhi',
    'Dwarka',
    'Noida',
    'Greater Noida',
    'Faridabad',
    'Ghaziabad',
    'Delhi NCR',
  ],
  brands: [
    'Polycab', 'Havells', 'Finolex', 'Legrand', 'Schneider Electric', 'Anchor by Panasonic',
    'GM Modular', 'Wipro', 'Jaquar', 'Astral', 'Supreme', 'Ashirvad', 'Hindware', 'Cera',
    'Kohler', 'Grohe',
  ],
  sameAs: [
    'https://www.linkedin.com/company/144014607',
    'https://www.facebook.com/profile.php?id=61595050932583',
  ],
  social: { linkedin: 'https://www.linkedin.com/company/144014607', facebook: 'https://www.facebook.com/profile.php?id=61595050932583' },
};

export const faqs = [
  {
    q: 'Is there a minimum order size?',
    a: 'No. We supply for a single flat as well as full projects. Pricing is quoted against your actual material list either way.',
  },
  {
    q: 'Can you supply across multiple towers or phases under one account?',
    a: 'Yes. Most builder accounts run as a single standing account across phases, with scheduled dispatch and one consolidated billing cycle instead of requoting for every order.',
  },
  {
    q: 'How is pricing decided without a fixed catalogue?',
    a: 'Trade rates move with brand, quantity and current market rates. We quote against your actual BOQ or material list, usually within a day.',
  },
  {
    q: 'Do you deliver outside Gurgaon?',
    a: 'Our standard dispatch covers Gurgaon and NCR, including Delhi, Noida, Faridabad and Ghaziabad. For larger project orders we also ship select material further. Confirm with us at the quoting stage.',
  },
];

export function waLink(text) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

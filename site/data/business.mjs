// Single source of truth for business facts used in SEO markup and generated pages.
// The React components still hard-code these for display; keep both in sync.
export const business = {
  name: 'JP Pro Supply',
  legalName: 'JP Pro Supply',
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
    'JP Pro Supply is an electrical, plumbing and home automation material dealer based in Sector 52, Gurugram, supplying flat owners, contractors, MEP teams and builders across Gurgaon, Delhi NCR, Noida, Faridabad and Ghaziabad. Material is quoted brand-wise against your BOQ or material list at current trade rates and delivered to site.',
  shortDescription:
    'Electrical, plumbing and home automation material supplier in Gurgaon and NCR. BOQ-matched quotes at trade rates, authorised brands, site delivery.',
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
  sameAs: [],
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

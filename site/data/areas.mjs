// Service-area pages. Each gets its own URL under /service-areas/<slug>/. `body` is markdown.
export const areasIntro = {
  lede: 'JP Pro Supply operates from Sector 52, Gurugram, and dispatches electrical, plumbing and home automation material to flats, builder floors and construction sites across Gurgaon and the wider Delhi NCR.',
  description: 'Electrical, plumbing and home automation material delivery across Gurgaon (DLF, Golf Course Road, Sohna Road, New Gurugram, Dwarka Expressway, Manesar, Sohna), Delhi, Noida, Greater Noida, Faridabad and Ghaziabad from JP Pro Supply, Sector 52 Gurugram.',
  body: `
Stocked items usually leave the next working day after confirmation for any Gurgaon address, and within one to two working days for Delhi, Noida, Faridabad and Ghaziabad. Project orders are scheduled phase-wise to the site programme. Every dispatch carries a GST invoice and material is sourced through authorised brand channels, so the manufacturer warranty applies wherever the site is.

Pick your area below for local notes, or send your material list straight away on WhatsApp at +91 93107 65871.
`,
};

const gurgaonFaq = (name) => [
  { q: `How quickly can you deliver material to ${name}?`, a: `Stocked electrical and plumbing items usually reach ${name} the next working day after you confirm the quote. Project orders are dispatched phase-wise to your schedule.` },
  { q: `Is there a minimum order for delivery to ${name}?`, a: 'No. A single bathroom or one room’s wiring is quoted and delivered the same way as a full site BOQ.' },
  { q: `Can I visit or do I send the list on WhatsApp?`, a: 'Most customers send the list on WhatsApp, email or the quote form and receive a brand-wise quote within a day. You are welcome to coordinate a visit to our Sector 52 base as well.' },
];
const ncrFaq = (name) => [
  { q: `Do you really deliver to ${name} from Gurgaon?`, a: `Yes. ${name} is within our standard NCR dispatch area. Stocked items usually arrive within one to two working days of confirmation; larger project orders are scheduled to your programme.` },
  { q: `Is there a delivery charge for ${name}?`, a: 'Delivery terms depend on order size and are stated on the quote. For full-flat lists and site orders delivery is typically included.' },
  { q: `Can a contractor in ${name} open a running account?`, a: 'Yes. Contractors and builders anywhere in NCR can run a single account with phase-wise dispatch and consolidated billing.' },
];

export const areas = [
  {
    slug: 'sector-52-gurgaon',
    name: 'Sector 52, Gurgaon',
    region: 'Gurgaon',
    lede: 'Our home base. Same-day and next-day dispatch for flats and builder floors in Sector 52 and the surrounding sectors along Golf Course Road and the Wazirabad side.',
    description: 'Electrical, plumbing and home automation material supplier based in Sector 52 Gurgaon. Fastest dispatch for Sector 52, 53, 54, 55, 56, 57, Ardee City, Wazirabad, Sushant Lok 2 and 3 and Mayfield Garden. Trade rates, authorised brands, GST invoice.',
    localities: ['Sector 52', 'Ardee City', 'Wazirabad', 'Sector 53', 'Sector 54', 'Sector 55', 'Sector 56', 'Sector 57', 'Sushant Lok 2', 'Sushant Lok 3', 'Mayfield Garden', 'Sector 45', 'Sector 46'],
    related: ['electrical-material-list-3bhk-flat-gurgaon', 'bathroom-renovation-plumbing-material-checklist'],
    body: `
JP Pro Supply operates from Sector 52, so this is where turnaround is quickest. Flat renovations in Ardee City, builder floors coming up in Sector 52, 55, 56 and 57, and apartment fit-outs in the societies along Golf Course Road and the Wazirabad stretch are the most common orders from this pocket. Small top-ups, a missing coil of 2.5 sq mm wire or a concealed stop cock the plumber forgot, can usually be arranged the same day.

The housing stock here is mixed: older independent houses being rebuilt as four-floor builder floors, 2000s-era societies redoing bathrooms and switchboards, and new high-rise units being finished by owners. Each needs a slightly different list, and we see all three every week.
`,
    faqs: gurgaonFaq('Sector 52'),
  },
  {
    slug: 'golf-course-road-gurgaon',
    name: 'Golf Course Road & DLF Phase 5, Gurgaon',
    region: 'Gurgaon',
    lede: 'Premium apartment fit-outs and designer-led renovations along Golf Course Road, DLF Phase 5, Sector 42, 43, 53 and 54.',
    description: 'Electrical, plumbing and home automation material for apartments and designer renovations on Golf Course Road, DLF Phase 5, Sector 42, 43, 53, 54 Gurgaon. Legrand, Schneider, Jaquar, Kohler, Grohe series matched exactly. Delivered from Sector 52.',
    localities: ['Golf Course Road', 'DLF Phase 5', 'DLF Magnolias', 'DLF Aralias', 'DLF Camellias', 'DLF Park Place', 'Belaire', 'Sector 42', 'Sector 43', 'Sector 53', 'Sector 54', 'Suncity', 'Ireo Grand Arch'],
    related: ['home-automation-starter-kit-gurgaon-flat', 'bathroom-renovation-plumbing-material-checklist'],
    body: `
Golf Course Road work is usually designer-led. The order arrives as a fitting schedule rather than a plumber's slip: a named switch series and plate finish, a specific Kohler or Grohe range per bathroom, profile lighting with driver specifications, and often a touch-panel automation layout. We quote the exact series and finish, flag anything with a long lead time, and do not substitute without asking, because on these projects the finish has to match the boards.

Deliveries into the large gated societies here are coordinated with the society gate and the site supervisor, with material packed per apartment so nothing is mixed between units when a designer is running two or three flats in the same tower.
`,
    faqs: gurgaonFaq('Golf Course Road'),
  },
  {
    slug: 'golf-course-extension-road-gurgaon',
    name: 'Golf Course Extension Road, Gurgaon',
    region: 'Gurgaon',
    lede: 'New apartment handovers and interior fit-outs across Sectors 58 to 67 on Golf Course Extension Road.',
    description: 'Electrical, plumbing and home automation material for new flats and fit-outs on Golf Course Extension Road, Sectors 58 to 67 Gurgaon, including Nirvana Country side. Full-flat material lists quoted brand-wise at trade rates, delivered from Sector 52.',
    localities: ['Sector 58', 'Sector 59', 'Sector 60', 'Sector 61', 'Sector 62', 'Sector 63', 'Sector 65', 'Sector 66', 'Sector 67', 'Emaar Emerald Hills', 'M3M Golf Estate', 'Ireo Skyon', 'Tata Primanti'],
    related: ['electrical-material-list-3bhk-flat-gurgaon', 'home-automation-starter-kit-gurgaon-flat'],
    body: `
Golf Course Extension is where a large share of Gurgaon's new apartment handovers have happened in the last few years, so the typical order here is a complete fit-out list for a bare-shell or semi-finished flat: full wiring from the DB, modular switches throughout, downlights and profile lighting, fans, all bathroom CP fittings and often a smart-home layer. Owners usually want one quote for the whole flat and two or three deliveries timed to the contractor's stages.

Sectors 58 to 67 are ten to twenty minutes from our Sector 52 base, so next-day dispatch is the norm and same-day top-ups are usually possible.
`,
    faqs: gurgaonFaq('Golf Course Extension Road'),
  },
  {
    slug: 'sohna-road-gurgaon',
    name: 'Sohna Road & South City 2, Gurgaon',
    region: 'Gurgaon',
    lede: 'Contractor sites, builder floors and society renovations along Sohna Road, from Subhash Chowk to Badshahpur.',
    description: 'Electrical and plumbing material supply for contractors and flat owners on Sohna Road Gurgaon: Sector 47, 48, 49, 50, South City 2, Nirvana Country, Vatika City, Badshahpur and Sectors 69 to 72. BOQ quotes, phase-wise site delivery, running accounts.',
    localities: ['Sohna Road', 'Sector 47', 'Sector 48', 'Sector 49', 'Sector 50', 'South City 2', 'Nirvana Country', 'Vatika City', 'Uppal Southend', 'Badshahpur', 'Sector 69', 'Sector 70', 'Sector 71', 'Sector 72', 'Subhash Chowk'],
    related: ['how-to-get-boq-quote-electrical-plumbing-supplier', 'polycab-vs-havells-vs-finolex-house-wire'],
    body: `
Sohna Road has a strong contractor base. Many of our running accounts are electrical and plumbing contractors working builder floors in Sector 47 to 50 and Badshahpur, plus society renovation work in South City 2, Nirvana Country and Vatika City. Orders here tend to be BOQ-driven with repeat top-ups: another drum of 4 sq mm, more 25 mm conduit, a second lot of CPVC when the next floor starts.

Material moves from Sector 52 down Sohna Road in under half an hour outside peak traffic, which is why same-day top-ups on stocked items are usually workable for this stretch.
`,
    faqs: gurgaonFaq('Sohna Road'),
  },
  {
    slug: 'dlf-phase-1-4-gurgaon',
    name: 'DLF Phase 1 to 4 & Cyber City, Gurgaon',
    region: 'Gurgaon',
    lede: 'Independent house rebuilds, builder floors and office fit-outs across DLF Phases 1 to 4, Sushant Lok 1 and the Cyber City belt.',
    description: 'Electrical, plumbing and home automation material for house rebuilds, builder floors and office fit-outs in DLF Phase 1, 2, 3, 4, Sushant Lok 1 and Cyber City Gurgaon. Delivered from Sector 52 with GST invoice at trade rates.',
    localities: ['DLF Phase 1', 'DLF Phase 2', 'DLF Phase 3', 'DLF Phase 4', 'Sushant Lok 1', 'Cyber City', 'Sector 24', 'Sector 25', 'Sector 26', 'Sector 27', 'Sector 28', 'MG Road', 'Sikanderpur', 'Nathupur', 'Chakkarpur'],
    related: ['mcb-rccb-distribution-board-sizing-flat', 'boq-material-supply-contractors-builders-ncr'],
    body: `
The DLF phases are Gurgaon's older plotted colonies, and most work here is a full rebuild of a 1990s house into a stilt-plus-four builder floor. That means complete fresh electrical for four or five units at once (separate DBs per floor, submain cable from the meter room, fire-rated wire, conduit in the slab) and complete plumbing stacks from the overhead tank down. These are classic BOQ orders delivered in stages over four to six months.

Cyber City and the MG Road belt add office and retail fit-outs, where the list is heavier on LED panels, track lighting, raceways, data cable and TPN distribution boards. We handle both from the same account.
`,
    faqs: gurgaonFaq('DLF Phase 1 to 4'),
  },
  {
    slug: 'new-gurugram-sector-76-95',
    name: 'New Gurugram (Sectors 76 to 95)',
    region: 'Gurgaon',
    lede: 'High-rise apartment finishing, tower projects and builder sites across New Gurugram, from Southern Peripheral Road to the Sector 81 to 95 belt.',
    description: 'Electrical, plumbing and home automation material supply for apartment finishing and tower projects in New Gurugram: Sectors 76 to 95, SPR, Sector 82, 83, 84, 85, 86, 88, 89, 90, 92, 93, 95. Phase-wise site delivery and running accounts for builders and MEP contractors.',
    localities: ['Southern Peripheral Road', 'Sector 76', 'Sector 77', 'Sector 78', 'Sector 79', 'Sector 80', 'Sector 81', 'Sector 82', 'Sector 83', 'Sector 84', 'Sector 85', 'Sector 86', 'Sector 88', 'Sector 89', 'Sector 90', 'Sector 91', 'Sector 92', 'Sector 93', 'Sector 95', 'Vatika India Next', 'Emaar Palm Hills'],
    related: ['builders-guide-choosing-material-supplier-ncr', 'electrical-material-list-3bhk-flat-gurgaon'],
    body: `
New Gurugram is the largest concentration of active residential construction in the district, and the mix of work reflects that: developers and MEP contractors buying for towers under construction, plus thousands of individual owners finishing flats in recently handed-over societies. For builders we run a single account with phase-wise dispatch per tower and consolidated billing. For owners we quote the full flat list and deliver in two or three stages.

Sectors 76 to 95 are a 30 to 45 minute run from Sector 52 via SPR or NH-48. Next-day dispatch is standard; for sites on a weekly draw we schedule a fixed delivery day.
`,
    faqs: gurgaonFaq('New Gurugram'),
  },
  {
    slug: 'dwarka-expressway-gurgaon',
    name: 'Dwarka Expressway, Gurgaon',
    region: 'Gurgaon',
    lede: 'New apartment handovers and tower construction along the Dwarka Expressway corridor, Sectors 99 to 115 and 36A, 37C, 37D.',
    description: 'Electrical, plumbing and home automation material for new flats and tower projects along Dwarka Expressway Gurgaon, Sectors 99 to 115, 36A, 37C, 37D, 102, 103, 104, 106, 109, 110, 111, 113. BOQ quotes, trade rates, scheduled delivery from Sector 52.',
    localities: ['Sector 99', 'Sector 102', 'Sector 103', 'Sector 104', 'Sector 106', 'Sector 108', 'Sector 109', 'Sector 110', 'Sector 111', 'Sector 112', 'Sector 113', 'Sector 36A', 'Sector 37C', 'Sector 37D', 'Basai', 'New Palam Vihar'],
    related: ['electrical-material-list-3bhk-flat-gurgaon', 'cpvc-vs-upvc-vs-composite-pipes-gurgaon-flats'],
    body: `
With the expressway open, the Sector 99 to 113 belt has moved from under-construction to handover and finishing, and that is what the orders look like: owners taking possession and finishing full flats, interior contractors running several units in one society, and developers still buying for later phases. Automation requests are common in this corridor because most of the stock is new and the wiring can be planned for it from the start.

We dispatch from Sector 52 via Dwarka Expressway or Pataudi Road depending on the sector; allow next-day delivery for stocked items and scheduled days for project draws.
`,
    faqs: gurgaonFaq('Dwarka Expressway'),
  },
  {
    slug: 'old-gurgaon-palam-vihar',
    name: 'Old Gurgaon & Palam Vihar',
    region: 'Gurgaon',
    lede: 'House construction, floor additions and shop fit-outs across Old Gurgaon, Palam Vihar, Sectors 4 to 23 and the Civil Lines side.',
    description: 'Electrical and plumbing material supply for house construction, floor additions and renovations in Old Gurgaon, Palam Vihar, Sector 4, 5, 7, 9, 10, 12, 14, 15, 17, 21, 22, 23, Civil Lines, Rajendra Park and Ashok Vihar. Trade rates, GST invoice, delivered from Sector 52.',
    localities: ['Palam Vihar', 'Sector 4', 'Sector 5', 'Sector 7', 'Sector 9', 'Sector 10', 'Sector 12', 'Sector 14', 'Sector 15', 'Sector 17', 'Sector 21', 'Sector 22', 'Sector 23', 'Civil Lines', 'Rajendra Park', 'Ashok Vihar', 'Sadar Bazar', 'Jacobpura', 'New Colony'],
    related: ['polycab-vs-havells-vs-finolex-house-wire', 'mcb-rccb-distribution-board-sizing-flat'],
    body: `
Old Gurgaon is owner-built territory: plotted houses getting a new floor, full rebuilds on 100 to 300 square yard plots, and ground-floor shops being fitted out. Owners here usually buy through their own electrician and plumber, so the list arrives as a handwritten slip and the questions are practical ones: which wire, which MCB rating, which CPVC brand, and what it all costs together. We quote brand-wise and explain the choices where it helps.

Many customers in this belt have historically bought from counters in Sadar Bazar or Bhagirath Palace in Delhi. A dealer quote against the full list, with a GST invoice and delivery to the plot, is usually the cheaper and simpler route.
`,
    faqs: gurgaonFaq('Old Gurgaon'),
  },
  {
    slug: 'manesar',
    name: 'Manesar & IMT Manesar',
    region: 'Gurgaon',
    lede: 'Factory, warehouse and residential project supply for Manesar, IMT Manesar and the Pataudi Road and NH-48 industrial belt.',
    description: 'Electrical and plumbing material for factories, warehouses, labour housing and residential projects in Manesar, IMT Manesar, Sector 1 to 8 Manesar, Pataudi Road and the NH-48 industrial belt. Armoured cable, TPN DBs, industrial sockets, SWR and tanks delivered from Gurgaon.',
    localities: ['IMT Manesar', 'Manesar Sector 1', 'Manesar Sector 2', 'Manesar Sector 7', 'Manesar Sector 8', 'Pataudi Road', 'Kherki Daula', 'Naurangpur', 'Bilaspur Chowk', 'Pachgaon', 'Sector 36', 'Sector 37', 'Sector 38'],
    related: ['boq-material-supply-contractors-builders-ncr', 'how-to-get-boq-quote-electrical-plumbing-supplier'],
    body: `
Manesar orders are different from the rest of Gurgaon: the electrical list leans towards armoured cable, TPN distribution boards, industrial plugs and sockets, high-bay and batten lighting and heavy-duty exhaust, while plumbing is more about SWR, large overhead tanks, bulk valves and UPVC for utility lines. We quote these the same way, line by line against the BOQ, and dispatch by transport to the site or unit.

Residential and labour-housing projects along Pataudi Road and the new sectors (36, 37, 38) are also served from the same account, with standard household electrical and plumbing material.
`,
    faqs: gurgaonFaq('Manesar'),
  },
  {
    slug: 'sohna',
    name: 'Sohna & South of Gurugram',
    region: 'Gurgaon',
    lede: 'Township, villa and society projects in Sohna and the South of Gurugram sectors along the Gurgaon-Alwar highway.',
    description: 'Electrical, plumbing and home automation material for villa, township and apartment projects in Sohna and South of Gurugram (Sohna Sectors 2 to 36), including Central Park Flower Valley, Godrej, Ashiana and Eldeco projects. Scheduled site delivery from Gurgaon.',
    localities: ['Sohna', 'South of Gurugram', 'Sohna Sector 2', 'Sohna Sector 5', 'Sohna Sector 11', 'Sohna Sector 14', 'Sohna Sector 25', 'Sohna Sector 33', 'Sohna Sector 35', 'Sohna Sector 36', 'Gurgaon-Alwar Highway', 'Bhondsi', 'Ghamroj'],
    related: ['builders-guide-choosing-material-supplier-ncr', 'cpvc-vs-upvc-vs-composite-pipes-gurgaon-flats'],
    body: `
Sohna's growth has been township-led: large plotted and villa developments and mid-rise societies along the Gurgaon-Alwar highway and the Sohna elevated road. For developers and their contractors we run phase-wise supply on a single account; for individual villa owners finishing a unit we quote the full house list, which is usually larger than a flat (more lighting circuits, garden and gate lights, bigger tanks, more bathrooms).

Sohna is a 45 to 60 minute run from Sector 52 on the elevated road. We schedule deliveries rather than promise same-day, and consolidate top-ups into the next scheduled run where possible.
`,
    faqs: gurgaonFaq('Sohna'),
  },
  {
    slug: 'south-delhi',
    name: 'South Delhi',
    region: 'Delhi',
    lede: 'Builder floors, farmhouse projects and apartment renovations across South Delhi, from Vasant Kunj and Chhatarpur to Saket and Greater Kailash.',
    description: 'Electrical, plumbing and home automation material supply to South Delhi: Vasant Kunj, Vasant Vihar, Chhatarpur, Mehrauli, Saket, Malviya Nagar, Greater Kailash, Hauz Khas, Mahipalpur. Trade rates and GST invoice from a Gurgaon dealer, delivered to your site.',
    localities: ['Vasant Kunj', 'Vasant Vihar', 'Chhatarpur', 'Mehrauli', 'Saket', 'Malviya Nagar', 'Greater Kailash', 'Hauz Khas', 'Mahipalpur', 'Rangpuri', 'Sultanpur', 'Ghitorni', 'Safdarjung Enclave', 'Panchsheel', 'Defence Colony'],
    related: ['bathroom-renovation-plumbing-material-checklist', 'home-automation-starter-kit-gurgaon-flat'],
    body: `
South Delhi is the closest part of Delhi to our Sector 52 base, 30 to 50 minutes via MG Road or NH-48 depending on the colony. The work mirrors Gurgaon's: builder-floor rebuilds in the colonies, farmhouse and villa projects on the Chhatarpur and Mehrauli side, and high-specification apartment renovations where designers want exact series matched.

Customers here often compare us against Bhagirath Palace and Chawri Bazar counters. The difference is a single brand-wise quote for the whole list, delivery to the site, and a GST invoice from an authorised channel, rather than assembling the list across several counters and arranging transport.
`,
    faqs: ncrFaq('South Delhi'),
  },
  {
    slug: 'dwarka-delhi',
    name: 'Dwarka & West Delhi',
    region: 'Delhi',
    lede: 'Society renovations, builder floors and house construction across Dwarka sub-city, Palam, Janakpuri and the Najafgarh Road side.',
    description: 'Electrical, plumbing and home automation material supply to Dwarka Delhi (Sectors 1 to 29), Palam, Janakpuri, Uttam Nagar, Najafgarh, Dwarka Mor and West Delhi. Quoted brand-wise against your list, delivered from Gurgaon via Dwarka Expressway.',
    localities: ['Dwarka Sector 1 to 29', 'Dwarka Mor', 'Palam', 'Janakpuri', 'Uttam Nagar', 'Najafgarh', 'Vikaspuri', 'Bijwasan', 'Kapashera', 'Mahavir Enclave', 'Sagarpur'],
    related: ['electrical-material-list-3bhk-flat-gurgaon', 'mcb-rccb-distribution-board-sizing-flat'],
    body: `
Dwarka is now a direct run from Gurgaon over the Dwarka Expressway, which has made it one of our quicker NCR destinations. The housing here is dominated by cooperative group housing societies from the 2000s, so the typical order is a full-flat renovation: switchboards and wiring replaced, bathrooms redone, lighting changed to LED, and increasingly a smart layer added. Builder-floor work in Palam, Janakpuri and Uttam Nagar adds complete new-build lists.

Stocked items usually reach Dwarka within one working day of confirmation; larger lists are delivered in stages to match the contractor's sequence.
`,
    faqs: ncrFaq('Dwarka'),
  },
  {
    slug: 'noida',
    name: 'Noida',
    region: 'Noida & Greater Noida',
    lede: 'Apartment finishing, builder floors and office fit-outs across Noida, from the older sectors to the Expressway societies.',
    description: 'Electrical, plumbing and home automation material supply to Noida: Sectors 1 to 168, Noida Expressway, Sector 50, 62, 75, 76, 77, 78, 100, 107, 110, 120, 128, 137, 150. Full-flat lists and project BOQs quoted at trade rates, delivered from Gurgaon.',
    localities: ['Noida Expressway', 'Sector 44', 'Sector 50', 'Sector 62', 'Sector 74', 'Sector 75', 'Sector 76', 'Sector 77', 'Sector 78', 'Sector 93', 'Sector 100', 'Sector 107', 'Sector 110', 'Sector 120', 'Sector 128', 'Sector 137', 'Sector 143', 'Sector 150', 'Sector 168'],
    related: ['electrical-material-list-3bhk-flat-gurgaon', 'home-automation-starter-kit-gurgaon-flat'],
    body: `
Noida has a very large stock of recently handed-over apartments along the Expressway and in the Sector 74 to 79 and 100 to 150 belts, and finishing those flats is the bulk of what we deliver there: complete wiring and switch lists, bathroom CP and sanitaryware schedules, lighting and fans, and automation kits. Office fit-outs in Sector 62 and the Expressway commercial towers add LED panel, track light and data cable orders.

Noida is 60 to 90 minutes from Sector 52 via the expressways, so we work on a one to two working day dispatch for stocked items and fixed delivery days for sites drawing weekly.
`,
    faqs: ncrFaq('Noida'),
  },
  {
    slug: 'greater-noida',
    name: 'Greater Noida & Noida Extension',
    region: 'Noida & Greater Noida',
    lede: 'Tower projects and apartment finishing in Greater Noida West (Noida Extension), Pari Chowk and the Yamuna Expressway sectors.',
    description: 'Electrical, plumbing and home automation material supply to Greater Noida West (Noida Extension), Gaur City, Tech Zone 4, Pari Chowk, Alpha, Beta, Gamma, Omicron, Zeta, Knowledge Park and the Yamuna Expressway sectors. BOQ quotes and scheduled site delivery from Gurgaon.',
    localities: ['Greater Noida West', 'Noida Extension', 'Gaur City', 'Tech Zone 4', 'Sector 1', 'Sector 4', 'Sector 16', 'Pari Chowk', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Omicron', 'Zeta', 'Knowledge Park', 'Yamuna Expressway', 'Jaypee Greens'],
    related: ['builders-guide-choosing-material-supplier-ncr', 'cpvc-vs-upvc-vs-composite-pipes-gurgaon-flats'],
    body: `
Greater Noida West has some of the densest apartment handover activity in NCR, and the orders are mostly full-flat finishing lists from owners and interior contractors handling several units in a society. On the Pari Chowk and Yamuna Expressway side, developer and institutional projects dominate, with phase-wise BOQ supply on a running account.

Because of the distance from Gurgaon we schedule Greater Noida deliveries rather than run ad hoc, usually a fixed day each week for active sites, with stocked flat lists dispatched within two working days of confirmation.
`,
    faqs: ncrFaq('Greater Noida'),
  },
  {
    slug: 'faridabad',
    name: 'Faridabad & Greater Faridabad',
    region: 'Faridabad',
    lede: 'House construction, society renovations and new-sector apartment finishing across Faridabad, Neharpar and Ballabgarh.',
    description: 'Electrical, plumbing and home automation material supply to Faridabad: Sectors 1 to 89, Greater Faridabad (Neharpar) Sectors 75 to 89, Ballabgarh, Old Faridabad, NIT, Surajkund and Charmwood. Trade rates, GST invoice, delivered from Gurgaon via the Gurgaon-Faridabad road.',
    localities: ['Sector 14', 'Sector 15', 'Sector 16', 'Sector 21', 'Sector 28', 'Sector 29', 'Sector 31', 'Sector 37', 'Sector 46', 'Neharpar', 'Sector 75', 'Sector 78', 'Sector 79', 'Sector 81', 'Sector 82', 'Sector 84', 'Sector 85', 'Sector 86', 'Sector 88', 'Sector 89', 'Ballabgarh', 'Old Faridabad', 'NIT', 'Surajkund', 'Charmwood Village'],
    related: ['polycab-vs-havells-vs-finolex-house-wire', 'bathroom-renovation-plumbing-material-checklist'],
    body: `
Faridabad is a direct 40 to 60 minute run from Sector 52 over the Gurgaon-Faridabad road, which makes it one of our more regular NCR destinations. The older sectors and NIT are plotted-house territory with rebuilds and floor additions; Greater Faridabad (Neharpar, Sectors 75 to 89) is apartment handover and finishing; Surajkund and Charmwood add villa and premium renovation work.

Owners here often have an electrician and plumber who buy locally in small lots. A single dealer quote for the full list, delivered to the plot with a GST invoice, usually lands lower and avoids the repeated trips.
`,
    faqs: ncrFaq('Faridabad'),
  },
  {
    slug: 'ghaziabad',
    name: 'Ghaziabad, Indirapuram & Vaishali',
    region: 'Ghaziabad',
    lede: 'Society renovations and apartment finishing in Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension and Crossings Republik.',
    description: 'Electrical, plumbing and home automation material supply to Ghaziabad: Indirapuram, Vaishali, Vasundhara, Kaushambi, Raj Nagar Extension, Crossings Republik, NH-24 societies and Wave City. Full-flat lists and BOQs quoted at trade rates, delivered from Gurgaon.',
    localities: ['Indirapuram', 'Vaishali', 'Vasundhara', 'Kaushambi', 'Raj Nagar Extension', 'Crossings Republik', 'Wave City', 'NH-24', 'Siddharth Vihar', 'Govindpuram', 'Kavi Nagar', 'Mohan Nagar'],
    related: ['electrical-material-list-3bhk-flat-gurgaon', 'mcb-rccb-distribution-board-sizing-flat'],
    body: `
Ghaziabad is the far end of our NCR dispatch, so most orders are complete lists rather than top-ups: a full-flat renovation in an Indirapuram or Vaishali society, a new apartment being finished in Raj Nagar Extension or Crossings Republik, or a contractor's BOQ for a builder-floor project. We consolidate everything into one or two deliveries scheduled with the site.

Allow two working days from confirmation for stocked items. For contractors with ongoing work in Ghaziabad we set a fixed delivery day so top-ups ride the same run.
`,
    faqs: ncrFaq('Ghaziabad'),
  },
];

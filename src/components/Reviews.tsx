import { StarIcon } from './icons';

// PLACEHOLDER REVIEWS — replace with real customer feedback as it comes in.
const REVIEWS = [
  {
    name: 'Rohit Sharma',
    role: '3BHK Owner · Sector 57, Gurgaon',
    stars: 5,
    avatar: '/avatars/rohit.png',
    text: 'Material for our full renovation arrived in one consolidated delivery — properly packed, nothing missing, everything with bill and warranty. Rates were clearly better than the market quotes we collected.',
  },
  {
    name: 'Suresh Yadav',
    role: 'Contractor · Sohna Road',
    stars: 5,
    avatar: '/avatars/suresh.png',
    text: 'Delivery reached the site on the promised day, every single phase. My labour never sat idle waiting for material — for a running site, that reliability is everything.',
  },
  {
    name: 'Priya & Ankit Mehra',
    role: 'New Flat Owners · DLF Phase 5',
    stars: 5,
    avatar: '/avatars/priya_ankit.png',
    text: 'We had no idea what a new flat needs. They built our list room by room — wiring, switches, bathroom fittings, even smart locks — and the quality of every item has been excellent.',
  },
  {
    name: 'Imran Khan',
    role: 'MEP Contractor · New Gurugram',
    stars: 5,
    avatar: '/avatars/imran.png',
    text: 'Running account across three projects. I reorder over WhatsApp and material moves to site the next day. Single billing, consistent quality, zero follow-up calls.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Interior Designer · Golf Course Road',
    stars: 5,
    avatar: '/avatars/neha.png',
    text: 'For client projects the finish has to match the boards exactly. They deliver the exact fittings and lighting I specify, on schedule — no substitutions without asking first.',
  },
  {
    name: 'Vikram Singh',
    role: 'Builder · Sector 82',
    stars: 5,
    avatar: '/avatars/vikram.png',
    text: 'Phase-wise supply for our tower project. Rates locked before dispatch, deliveries aligned to the construction schedule and quality consistent across every lot. Professional setup.',
  },
];

const HIGHLIGHTS = ['Reliable site delivery', 'Quality assured materials', 'Best market rates'];

function Stars({ count }: { count: number }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={15} half={i + 0.5 === count} />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Rated by customers</span>
          <h2>Trusted by homeowners, contractors &amp; builders.</h2>
          <div className="rating-summary">
            <span className="rating-num">4.9</span>
            <span className="rating-detail">
              <Stars count={5} />
              <span className="rating-sub">Average rating from 500+ customers</span>
            </span>
          </div>
          <div className="rating-highlights">
            {HIGHLIGHTS.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
        </div>

        <div className="review-grid">
          {REVIEWS.map((review) => (
            <div className="review-card" key={review.name}>
              <Stars count={review.stars} />
              <p className="review-text">“{review.text}”</p>
              <div className="review-who">
                <img className="avatar" src={review.avatar} alt={review.name} />
                <span>
                  <strong>{review.name}</strong>
                  <em>{review.role}</em>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

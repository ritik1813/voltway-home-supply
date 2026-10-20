import { StarIcon } from './icons';

// PLACEHOLDER REVIEWS — replace with real customer feedback as it comes in.
// `avatar` is optional; reviewers without a photo get an initials badge.
const REVIEWS: { name: string; role: string; stars: number; avatar?: string; text: string }[] = [
  {
    name: 'Rohit Sharma',
    role: '3BHK Owner · Sector 57, Gurgaon',
    stars: 5,
    avatar: '/avatars/rohit.jpg',
    text: 'Poore renovation ka material ek hi delivery mein aa gaya — wiring, switches, bathroom fittings, sab kuch. Bill aur warranty card saath mein. Market se jo quotes liye the, unse rate clearly kam tha.',
  },
  {
    name: 'Suresh Yadav',
    role: 'Contractor · Sohna Road',
    stars: 5,
    text: 'साइट पर माल बोले हुए दिन पर ही पहुँचा, हर फेज़ में। मेरी लेबर कभी मटेरियल के इंतज़ार में खाली नहीं बैठी। चलती साइट के लिए यही सबसे बड़ी बात है।',
  },
  {
    name: 'Priya & Ankit Mehra',
    role: 'New Flat Owners · DLF Phase 5',
    stars: 5,
    avatar: '/avatars/priya_ankit.jpg',
    text: 'We had no idea what a new flat needs. They built our list room by room — wiring, switches, bathroom fittings, even smart locks — and the quality of every item has been excellent.',
  },
  {
    name: 'Imran Khan',
    role: 'MEP Contractor · New Gurugram',
    stars: 5,
    text: 'Teen project ek hi account pe chal rahe hain. WhatsApp pe order karta hoon, agle din material site pe. Ek billing, same quality, follow-up ka koi jhanjhat nahi.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Interior Designer · Golf Course Road',
    stars: 5,
    avatar: '/avatars/neha.jpg',
    text: 'Client projects mein finish board se exactly match hona chahiye. Jo fittings aur lighting main specify karti hoon wahi aati hai, time pe — bina pooche koi substitution nahi.',
  },
  {
    name: 'Vikram Singh',
    role: 'Builder · Sector 82',
    stars: 5,
    text: 'Tower project ke liye phase-wise supply. Dispatch se pehle rate lock, delivery construction schedule ke hisaab se, aur har lot mein quality same. Professional setup hai.',
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
                {review.avatar ? (
                  <img className="avatar" src={review.avatar} alt={review.name} width="42" height="42" loading="lazy" />
                ) : (
                  <span className="avatar avatar-initials" aria-hidden="true">
                    {review.name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2)}
                  </span>
                )}
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

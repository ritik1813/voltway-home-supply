import { StarIcon } from './icons';

const STATS = [
  { n: '500+', l: 'Customers Served' },
  { n: '800+', l: 'Projects Delivered' },
  { n: '20+', l: 'Top Brands Stocked' },
];

export function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat-cell stat-rating">
            <span className="stat-n">
              4.9
              <span className="stat-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} size={14} />
                ))}
              </span>
            </span>
            <span className="stat-l">Rated by Customers</span>
          </div>
          {STATS.map((stat) => (
            <div className="stat-cell" key={stat.l}>
              <span className="stat-n">{stat.n}</span>
              <span className="stat-l">{stat.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { CircleCheckIcon, WhatsAppIcon } from './icons';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse"></span> AUTHORISED DEALER · BULK SUPPLY · GURGAON NCR
          </div>
          <h1>
            Builders lose time chasing three vendors for one flat.{' '}
            <span className="accent">We supply electrical and plumbing material as one bulk order.</span>
          </h1>
          <p className="lead">
            JP Pro Supply sources electrical and plumbing material from authorised distributors
            across Delhi NCR and delivers it straight to your project site — at trade pricing,
            against your BOQ, on one consolidated account for every flat or phase you're building.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary">Get a Bulk Quote</a>
            <a href="https://wa.me/919999999999" className="btn btn-light">
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>
          <div className="hero-trust">
            <div className="item">
              <CircleCheckIcon />
              Trade pricing on bulk &amp; project orders
            </div>
            <div className="item">
              <CircleCheckIcon />
              BOQ-based quoting, not inflated catalogue rates
            </div>
            <div className="item">
              <CircleCheckIcon />
              Authorised dealer sourcing, not grey market
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="panel">
            <div className="panel-head">
              <span className="mono">SUPPLY NETWORK</span>
              <span className="live">
                <span className="d"></span>LIVE
              </span>
            </div>
            <svg className="trace-svg" viewBox="0 0 420 230" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fontFamily="JetBrains Mono" fontSize="10.5" fill="rgba(247,244,236,0.55)">
                <text x="22" y="78">ELECTRICAL</text>
                <text x="22" y="158">PLUMBING</text>
                <text x="338" y="118" textAnchor="end">PROJECT SITE</text>
              </g>
              <circle cx="60" cy="88" r="5" fill="#C8772E" />
              <circle cx="60" cy="168" r="5" fill="#2BB7A6" />
              <circle cx="360" cy="128" r="7" fill="none" stroke="#fff" strokeWidth="1.5" />
              <circle cx="360" cy="128" r="3" fill="#fff" />

              <path d="M60 88 C 180 88, 220 128, 360 128" stroke="#C8772E" strokeWidth="1.6" strokeDasharray="4 5" opacity="0.85" />
              <path d="M60 168 C 180 168, 220 128, 360 128" stroke="#2BB7A6" strokeWidth="1.6" strokeDasharray="4 5" opacity="0.85" />

              <circle r="3" fill="#fff">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M60 88 C 180 88, 220 128, 360 128" />
              </circle>
              <circle r="3" fill="#fff">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M60 168 C 180 168, 220 128, 360 128" />
              </circle>
            </svg>
            <div className="panel-foot">
              <div className="cell">
                <div className="num">2</div>
                <div className="lbl">Categories</div>
              </div>
              <div className="cell">
                <div className="num">NCR</div>
                <div className="lbl">Delivery Zone</div>
              </div>
              <div className="cell">
                <div className="num">Trade</div>
                <div className="lbl">Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

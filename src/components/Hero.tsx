import { CircleCheckIcon, WhatsAppIcon } from './icons';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse"></span> ELECTRICAL · PLUMBING · SMART HOME — ONE SUPPLIER
          </div>
          <h1>
            Getting your new flat wired and fitted is a hassle.{' '}
            <span className="accent">We make the material side simple.</span>
          </h1>
          <p className="lead">
            Voltway sources genuine electrical, plumbing and smart home material from authorised
            dealers in Delhi NCR and delivers it to your flat or site — so you're not running
            between three different shops with three different bills.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary">Get a Material Quote</a>
            <a href="https://wa.me/919999999999" className="btn btn-light">
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>
          <div className="hero-trust">
            <div className="item">
              <CircleCheckIcon />
              Sourced from authorised dealers, not grey market
            </div>
            <div className="item">
              <CircleCheckIcon />
              GST invoice on every order
            </div>
            <div className="item">
              <CircleCheckIcon />
              Based in Gurgaon, deliver across NCR
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
                <text x="22" y="38">ELECTRICAL</text>
                <text x="22" y="118">PLUMBING</text>
                <text x="22" y="198">AUTOMATION</text>
                <text x="338" y="118" textAnchor="end">YOUR FLAT</text>
              </g>
              <circle cx="60" cy="48" r="5" fill="#C8772E" />
              <circle cx="60" cy="128" r="5" fill="#6FD9C9" />
              <circle cx="60" cy="208" r="5" fill="#2BB7A6" />
              <circle cx="360" cy="128" r="7" fill="none" stroke="#fff" strokeWidth="1.5" />
              <circle cx="360" cy="128" r="3" fill="#fff" />

              <path d="M60 48 C 180 48, 220 128, 360 128" stroke="#C8772E" strokeWidth="1.6" strokeDasharray="4 5" opacity="0.85" />
              <path d="M60 128 L 360 128" stroke="#6FD9C9" strokeWidth="1.6" strokeDasharray="4 5" opacity="0.85" />
              <path d="M60 208 C 180 208, 220 128, 360 128" stroke="#2BB7A6" strokeWidth="1.6" strokeDasharray="4 5" opacity="0.85" />

              <circle r="3" fill="#fff">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M60 48 C 180 48, 220 128, 360 128" />
              </circle>
              <circle r="3" fill="#fff">
                <animateMotion dur="2.6s" repeatCount="indefinite" path="M60 128 L 360 128" />
              </circle>
              <circle r="3" fill="#fff">
                <animateMotion dur="3.6s" repeatCount="indefinite" path="M60 208 C 180 208, 220 128, 360 128" />
              </circle>
            </svg>
            <div className="panel-foot">
              <div className="cell">
                <div className="num">3</div>
                <div className="lbl">Categories</div>
              </div>
              <div className="cell">
                <div className="num">NCR</div>
                <div className="lbl">Delivery Zone</div>
              </div>
              <div className="cell">
                <div className="num">GST</div>
                <div className="lbl">Billed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

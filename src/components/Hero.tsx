import { useEffect, useRef } from 'react';
import { CircleCheckIcon, WhatsAppIcon } from './icons';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <section className="hero hero--video" id="top">
      <video
        ref={videoRef}
        className="hero-video"
        src="/hero-supply.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-video-overlay"></div>
      <div className="hero-inner hero-inner--video">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse"></span> GURGAON &amp; NCR • ELECTRICAL • PLUMBING • HOME AUTOMATION
          </div>
          <h1>
            Supplying Electrical, Plumbing &amp; Home Automation Materials{' '}
            <span className="accent">Across Gurgaon &amp; NCR.</span>
          </h1>
          <p className="lead">
            For homeowners, contractors, builders, and construction projects of every scale.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary">Request a BOQ Quote</a>
            <a href="https://wa.me/919999999999" className="btn btn-light">
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>
          <div className="hero-trust">
            <div className="item">
              <CircleCheckIcon />
              BOQ-Matched Quoting
            </div>
            <div className="item">
              <CircleCheckIcon />
              100% Authorised Sourcing
            </div>
            <div className="item">
              <CircleCheckIcon />
              NCR Delivery Network
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

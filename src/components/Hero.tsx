import { useEffect, useRef } from 'react';
import { CircleCheckIcon, WhatsAppIcon } from './icons';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Skip the video entirely for users who prefer reduced motion, have data saver on,
    // or are on a slow connection: the poster image stays as the hero background.
    // Phones get the poster image only: the video's first frame would otherwise become the
    // Largest Contentful Paint and arrive seconds after the rest of the hero.
    const smallScreen = window.matchMedia('(max-width: 900px)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const slow = connection?.saveData || /(^|-)2g$|^3g$/.test(connection?.effectiveType ?? '');
    if (smallScreen || reducedMotion || slow) return;
    // Load the video only after the page has painted so it never competes with the first render.
    const start = () => {
      video.src = '/hero-supply.mp4';
      video.play().catch(() => {});
    };
    if (document.readyState === 'complete') {
      const id = window.setTimeout(start, 300);
      return () => window.clearTimeout(id);
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);

  return (
    <section className="hero hero--video" id="top">
      <img
        className="hero-poster"
        src="/hero-poster.jpg"
        srcSet="/hero-poster-640.jpg 640w, /hero-poster-1024.jpg 1024w, /hero-poster.jpg 1280w"
        sizes="100vw"
        width="1280"
        height="720"
        alt=""
        fetchPriority="high"
        decoding="async"
      />
      <video
        ref={videoRef}
        className="hero-video"
        preload="none"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-video-overlay"></div>
      <div className="hero-inner hero-inner--video">
        <div className="hero-copy">
          <h1>
            Supplying Electrical, Plumbing &amp; Home Automation Materials{' '}
            <span className="accent">Across Gurgaon &amp; NCR.</span>
          </h1>
          <p className="lead">
            For homeowners, contractors, builders, and construction projects of every scale.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary">Request a BOQ Quote</a>
            <a href="https://wa.me/919310765871" className="btn btn-light">
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

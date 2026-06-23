import { useState } from 'react';
import { WhatsAppIcon } from './icons';

interface EstimateResult {
  category: string;
  items: { name: string; value: string; sub: string }[];
}

export function MaterialEstimator() {
  const [bhk, setBhk] = useState<number>(3); // 1, 2, 3, 4
  const [tier, setTier] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // Dynamic calculations based on flat size and brand tier
  const calculateEstimate = (): EstimateResult[] => {
    const multiplier = bhk;
    
    const wireCoils = multiplier * 12;
    const switchPoints = multiplier * 30;
    const pipeFeet = multiplier * 150;
    const automationNodes = tier === 'standard' ? 0 : tier === 'premium' ? multiplier * 2 : multiplier * 4;

    const brandSpec = {
      standard: {
        electrical: 'Havells / Polycab (Utility FR Wires)',
        switches: 'Anchor Penta / Goldmedal (Standard Modular)',
        plumbing: 'Astral CPVC SDR 11 / Supreme PVC',
        automation: 'Basic WiFi Plugs / Single App nodes',
      },
      premium: {
        electrical: 'Polycab Maxima / Finolex (FR-LSH Low Smoke)',
        switches: 'Legrand Lyncus / Schneider Opale (Matte / Chrome)',
        plumbing: 'Astral Lead-Free / Supreme Heavy Duty',
        automation: 'Wipro Smart / Tata Power (Touch Switches & App Control)',
      },
      luxury: {
        electrical: 'Havells Halar / RR Kabel (ZHFR Zero Halogen)',
        switches: 'Legrand Arteor / Schneider AvatarOn (Glass / Wood finish)',
        plumbing: 'Astral Silencio (Soundproof) & Premium CPVC',
        automation: 'Crestron / Lutron / Smart Locks & Voice Integration',
      },
    }[tier];

    return [
      {
        category: 'Electrical Material',
        items: [
          { name: 'House Wires & Cables', value: `${wireCoils} Coils (Assorted)`, sub: brandSpec.electrical },
          { name: 'Conduits & Junction Boxes', value: `${multiplier * 80} Running Meters`, sub: 'Heavy Duty PVC (Concealed)' },
          { name: 'Distribution Boards & MCBs', value: `1 DB + ${multiplier * 8} MCBs`, sub: 'Double Door DB, Class C MCBs' },
        ],
      },
      {
        category: 'Plumbing & Drainage',
        items: [
          { name: 'CPVC Pipes & Fittings', value: `${pipeFeet} Running Feet`, sub: brandSpec.plumbing },
          { name: 'PVC Drainage Pipes', value: `${multiplier * 100} Running Feet`, sub: 'SWR Ringfit / Rubber-seal joints' },
          { name: 'Valves, Fittings & Accessories', value: `${multiplier * 4} Ball Valves + Fittings`, sub: 'Authorised brand brass-thread fittings' },
        ],
      },
      {
        category: 'Switches & Automation',
        items: [
          { name: 'Modular Switches & Sockets', value: `${switchPoints} Modules`, sub: brandSpec.switches },
          { name: 'Plates & Grid Frames', value: `${multiplier * 12} Frames`, sub: 'Matched to selection' },
          { 
            name: 'Smart Home Automation', 
            value: automationNodes > 0 ? `${automationNodes} Nodes + Hub` : 'Not Included', 
            sub: automationNodes > 0 ? brandSpec.automation : 'Upgrade to Premium/Luxury to add smart capabilities' 
          },
        ],
      },
    ];
  };

  const estimates = calculateEstimate();

  const getWhatsAppLink = () => {
    const text = `Hi JP Pro Supply, I ran an estimate on your website for a ${bhk} BHK flat (${tier.toUpperCase()} specifications). Here is what I need:
- Wires/Cables: ${bhk * 12} Coils
- Switches: ${bhk * 30} Modules
- CPVC Pipes: ${bhk * 150} Ft
- Smart Automation: ${tier === 'standard' ? 'None' : `${bhk * (tier === 'premium' ? 2 : 4)} Nodes`}

Can you share a trade-pricing quote against these requirements?`;
    return `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="estimator-section" id="estimator">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Interactive Tool</span>
          <h2>Estimate Your Material in Seconds.</h2>
          <p>
            Choose your project scale and material standard to get an instant calculation of your key electrical, plumbing, and home automation needs.
          </p>
        </div>

        <div className="estimator-card">
          <div className="estimator-tabs">
            {[1, 2, 3, 4].map((size) => (
              <button
                key={size}
                className={`estimator-tab${bhk === size ? ' active' : ''}`}
                onClick={() => setBhk(size)}
              >
                {size} BHK Flat / Site
              </button>
            ))}
          </div>

          <div className="estimator-grid">
            <div className="estimator-inputs">
              <div className="estimator-group">
                <label>Adjust Project Area (Approx. Sq. Ft.)</label>
                <div className="range-container">
                  <input
                    type="range"
                    min={bhk * 400}
                    max={bhk * 800}
                    value={bhk * 600}
                    className="range-input"
                    disabled
                  />
                  <span className="range-val">{bhk * 600} sq ft</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--slate)', marginTop: '-4px' }}>
                  Auto-calculated average size for a {bhk} BHK.
                </span>
              </div>

              <div className="estimator-group">
                <label>Select Material Specification Standard</label>
                <div className="spec-selector">
                  <div
                    className={`spec-option${tier === 'standard' ? ' active' : ''}`}
                    onClick={() => setTier('standard')}
                  >
                    <span className="spec-title">Standard</span>
                    <span className="spec-desc">Reliable, functional, budget-friendly brands</span>
                  </div>
                  <div
                    className={`spec-option${tier === 'premium' ? ' active' : ''}`}
                    onClick={() => setTier('premium')}
                  >
                    <span className="spec-title">Premium</span>
                    <span className="spec-desc">High safety FR-LSH wiring & designer switches</span>
                  </div>
                  <div
                    className={`spec-option${tier === 'luxury' ? ' active' : ''}`}
                    onClick={() => setTier('luxury')}
                  >
                    <span className="spec-title">Luxury</span>
                    <span className="spec-desc">Eco Zero-Halogen wires & premium automation</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 'auto', padding: '24px', background: 'var(--paper)', borderRadius: '12px', border: '1px solid var(--line)' }}>
                <h4 style={{ fontSize: '16px', marginBottom: '8px', color: 'var(--navy)' }}>Have a custom BOQ or List?</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--slate)', marginBottom: '16px' }}>
                  Don't rely on averages if you already have a detailed bill of quantities from your architect. Upload it directly using our quote form.
                </p>
                <a href="#quote" className="btn btn-ghost btn-sm" style={{ width: '100%' }}>
                  Go to Quote Form
                </a>
              </div>
            </div>

            <div className="estimator-results">
              <div className="results-header">
                <h3>Estimated Quantities</h3>
                <p>Calculated for {bhk} BHK • {tier.charAt(0).toUpperCase() + tier.slice(1)} Tier</p>
              </div>

              <div className="results-list">
                {estimates.map((cat) => (
                  <div key={cat.category}>
                    <h4 style={{ fontSize: '12px', color: 'var(--copper)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'JetBrains Mono' }}>
                      {cat.category}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {cat.items.map((item) => (
                        <div className="result-item" key={item.name}>
                          <div className="label-group">
                            <span className="name">{item.name}</span>
                            <span className="subtext">{item.sub}</span>
                          </div>
                          <span className="value">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="results-footer">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ width: '100%' }}>
                  <WhatsAppIcon />
                  Get Trade pricing for this list
                </a>
                <p className="estimator-cta-text">
                  Estimates are directional. Actual site layout, wall chasing, and design variations can alter quantities by 10-15%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BRANDS = ['Havells', 'Polycab', 'Legrand', 'Jaquar', 'Hindware', 'Astral', 'Wipro Smart', 'Anchor'];

function BrandRow() {
  return (
    <>
      {BRANDS.map((brand) => (
        <span className="brand-logo" key={brand}>
          <span className="mark"></span>
          {brand}
        </span>
      ))}
    </>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="wrap">
        <span className="label">Authorised dealer network for</span>
        <div className="brand-marquee">
          <div className="brand-track">
            <BrandRow />
            <BrandRow />
          </div>
        </div>
      </div>
    </div>
  );
}

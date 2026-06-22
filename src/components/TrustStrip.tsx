const BRANDS = ['Havells', 'Polycab', 'Legrand', 'Jaquar', 'Hindware', 'Astral', 'Wipro Smart', 'Anchor'];

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="wrap">
        <span className="label">Brands we deal in</span>
        <div className="brand-row">
          {BRANDS.map((brand) => (
            <span className="b" key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

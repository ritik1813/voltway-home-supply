const BRANDS = [
  { name: 'Havells', logo: '/brands/havells.svg' },
  { name: 'Polycab', logo: '/brands/polycab.png' },
  { name: 'Legrand', logo: '/brands/legrand.svg' },
  { name: 'Jaquar', logo: '/brands/jaquar.png' },
  { name: 'Wipro', logo: '/brands/wipro.svg' },
  { name: 'Finolex', logo: '/brands/finolex.svg' },
  { name: 'Cera', logo: '/brands/cera.png' },
  { name: 'Schneider Electric', logo: '/brands/schneider.svg' },
];

function BrandRow() {
  return (
    <>
      {BRANDS.map((brand) => (
        <span className="brand-logo" key={brand.name}>
          <img src={brand.logo} alt={brand.name} />
        </span>
      ))}
    </>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <span className="label wrap">Authorised dealer network for</span>
      <div className="brand-marquee">
        <div className="brand-track">
          <BrandRow />
          <BrandRow />
        </div>
      </div>
    </div>
  );
}

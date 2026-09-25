const line = "SKULL MULTIMARCAS • STREETWEAR • SNEAKERS • ORIGINALIDADE • ESTILO • ATITUDE • ";

export function StreetMarquee() {
  return (
    <section className="street-marquee" aria-label="Skull Multimarcas, streetwear e atitude">
      <div className="marquee-line"><div>{line.repeat(4)}</div></div>
      <div className="marquee-line outline"><div>{line.repeat(4)}</div></div>
    </section>
  );
}

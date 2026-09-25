import Image from "next/image";
import { assetPath } from "@/lib/site";
import { Reveal } from "./Reveal";

const brands = [
  { name: "Hocks", src: assetPath("/images/logo-hocks.png") },
  { name: "Trip Side", src: assetPath("/images/logo-trip-side.jpg") },
  { name: "Chronic", src: assetPath("/images/logo-chronic.png") },
  { name: "Cool Cat", src: assetPath("/images/logo-cool-cat.jpg") },
  { name: "Compton", src: assetPath("/images/logo-compton.png") },
];

export function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section className="brands section" id="marcas">
      <div className="section-heading container">
        <Reveal><span className="eyebrow"><i /> Curadoria Skull</span></Reveal>
        <Reveal delay={0.08}><h2>Marcas que<br /><em>representam o corre.</em></h2></Reveal>
        <Reveal delay={0.14}><p>Selecionamos marcas que carregam atitude, identidade e cultura urbana.</p></Reveal>
      </div>
      <Reveal className="brand-rail-wrap" delay={0.2}>
        <div className="brand-rail">
          {loop.map((brand, index) => (
            <article className="brand-card interactive" key={`${brand.name}-${index}`}>
              <span className="brand-number">0{(index % brands.length) + 1}</span>
              <Image src={brand.src} alt={`Logo ${brand.name}`} width={240} height={160} sizes="(max-width: 768px) 190px, 240px" />
              <strong>{brand.name}</strong>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

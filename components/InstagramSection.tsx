import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./icons";
import { Reveal } from "./Reveal";

const tiles = [
  { label: "Drops", className: "insta-one" },
  { label: "Detalhes", className: "insta-two" },
  { label: "Street", className: "insta-three" },
  { label: "Sneakers", className: "insta-four" },
  { label: "Lifestyle", className: "insta-five" },
  { label: "Novidades", className: "insta-six" },
];

export function InstagramSection() {
  return (
    <section className="instagram section">
      <div className="container">
        <div className="instagram-head">
          <Reveal><span className="eyebrow"><i /> Acompanhe de perto</span><h2>Skull no<br /><em>Instagram.</em></h2></Reveal>
          <Reveal className="instagram-info" delay={0.1}>
            <InstagramIcon />
            <div><strong>@skullmultimarcas_</strong><p>Novidades, lançamentos e drops você acompanha primeiro por lá.</p></div>
            <a href="https://www.instagram.com/skullmultimarcas_/" target="_blank" rel="noreferrer" aria-label="Seguir a Skull no Instagram"><ArrowUpRight /></a>
          </Reveal>
        </div>
        <div className="instagram-grid">
          {tiles.map((tile, index) => (
            <Reveal className={`instagram-tile interactive ${tile.className}`} key={tile.label} delay={index * 0.04}>
              <span>Conteúdo em breve</span><strong>{tile.label}</strong>
              <div className="insta-hover"><Heart /><MessageCircle /></div>
            </Reveal>
          ))}
        </div>
        <Reveal className="instagram-mobile-cta"><a className="button button-outline" href="https://www.instagram.com/skullmultimarcas_/" target="_blank" rel="noreferrer"><InstagramIcon /> Seguir no Instagram</a></Reveal>
      </div>
    </section>
  );
}

import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const mapsUrl = "https://google.com/maps/place/Skull+multimarcas/@-16.1115667,-47.9336967,17z/data=!3m1!4b1!4m6!3m5!1s0x93598500520f93db:0x8761d063a9f59a7e!8m2!3d-16.1115667!4d-47.9336967!16s%2Fg%2F11yv7kfczc?hl=pt-BR";

export function StoreLocation() {
  return (
    <section className="location section" id="localizacao">
      <div className="location-lines" aria-hidden="true" />
      <div className="container location-grid">
        <Reveal className="location-copy">
          <span className="eyebrow light"><i /> Loja física</span>
          <h2>Vem<br />conhecer<br /><em>a Skull.</em></h2>
          <p>Seu próximo outfit pode estar te esperando aqui.</p>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="button button-dark">Como chegar <ArrowUpRight /></a>
        </Reveal>
        <Reveal className="location-card" delay={0.15}>
          <div className="map-visual">
            <div className="map-road road-a" /><div className="map-road road-b" /><div className="map-road road-c" />
            <span className="map-pin"><MapPin /><i /></span>
            <span className="map-label">Você chegou.</span>
          </div>
          <div className="location-card-bottom">
            <div><span>Skull Multimarcas</span><strong>Cidade Ocidental — GO</strong></div>
            <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowUpRight /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

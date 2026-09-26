import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { assetPath } from "@/lib/site";
import { whatsappUrl } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./icons";

const mapsUrl = "https://google.com/maps/place/Skull+multimarcas/@-16.1115667,-47.9336967,17z/data=!3m1!4b1!4m6!3m5!1s0x93598500520f93db:0x8761d063a9f59a7e!8m2!3d-16.1115667!4d-47.9336967!16s%2Fg%2F11yv7kfczc?hl=pt-BR";

export function StoreLocation() {
  return (
    <section className="location section" id="localizacao">
      <div className="location-lines" aria-hidden="true" />
      <div className="container location-grid">
        <Reveal className="location-copy">
          <span className="eyebrow light"><i /> 05 / Loja física</span>
          <h2>Vem<br />conhecer<br /><em>a Skull.</em></h2>
          <p>Seu ponto de streetwear em Cidade Ocidental.</p>
          <strong className="location-city">Cidade Ocidental — GO</strong>
          <div className="location-actions">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="button button-dark">Ver rota <ArrowUpRight /></a>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="button location-whatsapp"><WhatsAppIcon /> Chamar no WhatsApp</a>
          </div>
          <div className="route-line" aria-hidden="true"><span>Cidade Ocidental</span><i /><b /><i /><span>Skull</span></div>
        </Reveal>
        <Reveal className="location-card location-photo-card" delay={0.15}>
          <Image src={assetPath("/images/foto-loja-skull.webp")} alt="Interior da loja Skull Multimarcas em Cidade Ocidental" fill sizes="(max-width: 820px) 100vw, 58vw" />
          <div className="location-photo-shade" />
          <div className="store-badge">
            <MapPin />
            <div><span>Skull</span><strong>Cidade Ocidental</strong></div>
          </div>
          <a className="store-map-link" href={mapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowUpRight /></a>
        </Reveal>
      </div>
    </section>
  );
}

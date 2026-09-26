import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/site";
import { whatsappUrl } from "@/lib/contact";
import { Reveal } from "./Reveal";

const categories = [
  { title: "Tênis", code: "01", blurb: "Explore Hocks", image: assetPath("/images/foto-loja-skull.webp"), position: "center 72%", className: "collection-featured" },
  { title: "Camisetas", code: "02", blurb: "Novos drops", image: assetPath("/images/foto-vitrine-skull.webp"), position: "center 34%", className: "collection-tall" },
  { title: "Conjuntos", code: "03", blurb: "Monte seu visual", image: assetPath("/images/foto-vitrine-skull.webp"), position: "center 72%", className: "" },
  { title: "Acessórios", code: "04", blurb: "Complete o corre", image: assetPath("/images/foto-loja-skull.webp"), position: "center 62%", className: "" },
  { title: "Lançamentos", code: "05", blurb: "Veja as novidades", image: assetPath("/images/juncao-marcas-skull.webp"), position: "center", className: "" },
];

export function Collections() {
  return (
    <section className="collections section" id="colecoes">
      <div className="container">
        <div className="section-heading row-heading">
          <Reveal><span className="eyebrow"><i /> 02 / Estilo pra todo corre</span><h2>Escolha<br /><em>seu estilo.</em></h2></Reveal>
          <Reveal delay={0.1}><p>Uma curadoria feita para vestir sua identidade — dos detalhes do look aos drops que movimentam a rua.</p></Reveal>
        </div>
        <div className="collection-grid editorial-grid">
          {categories.map((item, index) => (
            <Reveal key={item.title} className={`collection-card editorial-card interactive ${item.className}`} delay={index * 0.05}>
              <Image className="collection-photo" src={item.image} alt={`${item.title} na curadoria Skull Multimarcas`} fill sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 40vw" style={{ objectPosition: item.position }} />
              <div className="collection-overlay" aria-hidden="true" />
              <div className="collection-copy">
                <span>{item.code} / Categoria</span>
                <h3>{item.title}</h3>
                <div className="collection-meta">
                  <p>{item.blurb}</p>
                  <a href={whatsappUrl(`Olá! Quero conhecer os modelos disponíveis na categoria ${item.title} da Skull Multimarcas.`)} target="_blank" rel="noreferrer" aria-label={`Consultar ${item.title} no WhatsApp`}><ArrowUpRight /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

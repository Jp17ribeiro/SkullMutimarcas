import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const categories = [
  { title: "Tênis", code: "01", className: "collection-sneakers", blurb: "Pisadas que falam por você." },
  { title: "Camisetas", code: "02", className: "collection-shirts", blurb: "A base de todo corre." },
  { title: "Conjuntos", code: "03", className: "collection-sets", blurb: "Combinação sem esforço." },
  { title: "Acessórios", code: "04", className: "collection-accessories", blurb: "O detalhe muda tudo." },
  { title: "Lançamentos", code: "05", className: "collection-drops", blurb: "Chegou. Piscou, perdeu." },
];

export function Collections() {
  return (
    <section className="collections section" id="colecoes">
      <div className="container">
        <div className="section-heading row-heading">
          <Reveal><span className="eyebrow"><i /> Vista sua identidade</span><h2>Escolha<br /><em>seu estilo.</em></h2></Reveal>
          <Reveal delay={0.1}><p>Peças selecionadas para quem não passa despercebido. Consulte os modelos disponíveis com a nossa equipe.</p></Reveal>
        </div>
        <div className="collection-grid">
          {categories.map((item, index) => (
            <Reveal key={item.title} className={`collection-card interactive ${item.className}`} delay={index * 0.05}>
              <div className="collection-art" aria-hidden="true"><span>{item.code}</span><i /><b /></div>
              <div className="collection-copy">
                <span>{item.code} / Categoria</span>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
                <a href="https://wa.me/5561991370893" target="_blank" rel="noreferrer">Ver coleção <ArrowUpRight /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

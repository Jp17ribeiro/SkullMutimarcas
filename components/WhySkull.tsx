import { Gem, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { n: "01", title: "Marcas selecionadas", text: "Streetwear escolhido para quem procura estilo e personalidade.", icon: Gem },
  { n: "02", title: "Estilo autêntico", text: "Peças que acompanham a cultura urbana e as tendências das ruas.", icon: Sparkles },
  { n: "03", title: "Atendimento direto", text: "Fale com nossa equipe rapidamente pelo WhatsApp.", icon: MessageCircle },
  { n: "04", title: "Loja física", text: "Experimente, conheça as peças e encontre seu próximo estilo.", icon: MapPin },
];

export function WhySkull() {
  return (
    <section className="why section">
      <div className="container">
        <div className="section-heading row-heading compact">
          <Reveal><span className="eyebrow"><i /> Muito além do look</span><h2>Por que<br /><em>Skull?</em></h2></Reveal>
          <Reveal delay={0.1}><p>Do primeiro contato à escolha da peça: experiência, autenticidade e curadoria em cada detalhe.</p></Reveal>
        </div>
        <div className="why-grid">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.n} className="why-card interactive" delay={index * 0.07}>
                <div className="why-top"><span>{item.n}</span><Icon /></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

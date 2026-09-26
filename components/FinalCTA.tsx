import Image from "next/image";
import { assetPath } from "@/lib/site";
import { whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="final-cta section">
      <div className="final-cta-bg" aria-hidden="true"><Image src={assetPath("/images/grafite-skull.webp")} alt="" fill sizes="100vw" /></div>
      <div className="final-overlay" />
      <div className="container final-content">
        <Reveal><span className="eyebrow light"><i /> 06 / Fale com a Skull</span></Reveal>
        <Reveal delay={0.08}><h2>Achou<br />seu<br /><em>estilo?</em></h2></Reveal>
        <Reveal delay={0.14}><p>Então cola com a Skull.</p></Reveal>
        <Reveal delay={0.2}>
          <a className="button button-orange button-xl final-whatsapp" href={whatsappUrl("Olá! Vim pelo site da Skull Multimarcas e quero encontrar meu próximo estilo.")} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> <span>Chamar a Skull<br />no WhatsApp</span><b>→</b>
          </a>
        </Reveal>
        <Reveal delay={0.25}><small>Atendimento direto pelo WhatsApp.</small></Reveal>
      </div>
    </section>
  );
}

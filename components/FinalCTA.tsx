import Image from "next/image";
import { assetPath } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="final-cta section">
      <div className="final-cta-bg" aria-hidden="true"><Image src={assetPath("/images/grafite-skull.png")} alt="" fill sizes="100vw" /></div>
      <div className="final-overlay" />
      <div className="container final-content">
        <Reveal><span className="eyebrow light"><i /> O próximo passo é seu</span></Reveal>
        <Reveal delay={0.08}><h2>Achou seu<br /><em>estilo?</em></h2></Reveal>
        <Reveal delay={0.14}><p>Fala com a Skull e descubra os modelos disponíveis.</p></Reveal>
        <Reveal delay={0.2}><a className="button button-orange button-xl" href="https://wa.me/5561991370893" target="_blank" rel="noreferrer"><WhatsAppIcon /> Chamar no WhatsApp</a></Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { assetPath } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const nav = [
  ["Início", "#inicio"], ["Marcas", "#marcas"], ["Coleções", "#colecoes"],
  ["Sobre", "#sobre"], ["Localização", "#localizacao"],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Image src={assetPath("/images/logo-skull-nova-transparente.png")} alt="Skull Multimarcas" width={1254} height={1254} />
          <p>Streetwear <i /> Sneakers <i /> Lifestyle</p>
        </div>
        <div className="footer-col"><span>Navegue</span>{nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
        <div className="footer-col"><span>Conecte</span><a href="https://www.instagram.com/skullmultimarcas_/" target="_blank" rel="noreferrer"><InstagramIcon /> @skullmultimarcas_</a><a href="https://wa.me/5561991370893" target="_blank" rel="noreferrer"><WhatsAppIcon /> (61) 99137-0893</a></div>
        <a href="#inicio" className="back-top" aria-label="Voltar ao início"><ArrowUp /></a>
      </div>
      <div className="container footer-bottom"><p>© 2026 Skull Multimarcas. Todos os direitos reservados.</p></div>
      <div className="container footer-credit">
        <span>Site produzido por</span>
        <a href="https://www.instagram.com/asuapublicidade/" target="_blank" rel="noreferrer" aria-label="Site produzido por A Sua Publicidade — abrir Instagram">
          <i className="agency-mark" aria-hidden="true"><b>▲</b></i>
          <strong>A SUA PUBLICIDADE<span>.</span></strong>
        </a>
      </div>
    </footer>
  );
}

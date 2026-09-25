import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href="https://wa.me/5561991370893" target="_blank" rel="noreferrer" aria-label="Fale com a Skull pelo WhatsApp">
      <span>Fale com a Skull</span><WhatsAppIcon />
    </a>
  );
}

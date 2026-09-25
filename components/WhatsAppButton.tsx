import { WhatsAppIcon } from "./icons";
import { whatsappUrl } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Fale com a Skull pelo WhatsApp">
      <span>Fale com a Skull</span><WhatsAppIcon />
    </a>
  );
}

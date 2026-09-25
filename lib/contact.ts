export const WHATSAPP_NUMBER = "5561991370893";
export const WHATSAPP_DISPLAY = "(61) 99137-0893";

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

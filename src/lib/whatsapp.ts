/** Brasil +55 (84) 99454-1561 — apenas dígitos para wa.me */
export const WHATSAPP_PHONE_E164 = "5584994541561";

export const whatsAppPrefill = {
  solicitarProjeto:
    "Olá! Vim pelo seu portfólio e gostaria de solicitar um projeto.",
  vamosConversar:
    "Olá! Vim pelo seu portfólio e gostaria de conversar com você.",
  solicitarOrcamento:
    "Olá! Vim pelo seu portfólio e gostaria de solicitar um orçamento.",
} as const;

export function whatsAppHref(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(message)}`;
}

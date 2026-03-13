import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/905510010289?text=Hi!%20I%20want%20to%20order%20followers";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-[0_4px_20px_hsl(var(--whatsapp)/0.5)] hover:scale-110 transition-transform animate-float"
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppFloat;

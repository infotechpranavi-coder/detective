import { PhoneCall } from "lucide-react";

const PHONE_NUMBER = "+919930403115";
const WHATSAPP_LINK = "https://wa.me/919930403115";
const CALL_LINK = `tel:${PHONE_NUMBER}`;

/** Pure markup + CSS (no Framer Motion) so the browser is not running layout reads every frame. */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.6 14.92L2 22l5.23-1.37A9.94 9.94 0 0 0 12 22h.01A10 10 0 0 0 22 12a9.9 9.9 0 0 0-2.95-7.06ZM12.01 20.3A8.3 8.3 0 0 1 7.78 19.14l-.3-.18-3.1.81.83-3.02-.2-.31A8.3 8.3 0 1 1 20.3 12a8.3 8.3 0 0 1-8.29 8.3Zm4.55-6.21c-.25-.13-1.47-.73-1.7-.82-.23-.08-.4-.12-.57.13-.17.26-.66.82-.8 1-.15.17-.3.2-.55.07-.26-.13-1.08-.4-2.06-1.28-.76-.68-1.28-1.52-1.43-1.78-.15-.25-.02-.39.11-.52.12-.12.26-.3.38-.44.13-.15.17-.25.26-.42.08-.17.04-.31-.02-.44-.07-.13-.57-1.36-.78-1.87-.2-.48-.41-.41-.57-.42h-.48c-.17 0-.44.06-.68.31-.23.26-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.76 2.69 4.27 3.77.6.26 1.07.42 1.43.53.6.19 1.15.16 1.59.1.49-.07 1.47-.6 1.68-1.17.21-.57.21-1.06.15-1.17-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export default function FloatingContactButtons() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-4 z-90 px-4 lg:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <a
            href={CALL_LINK}
            aria-label="Call +91 99304 03115"
            className="floating-cta group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(135deg,#ff5a5a,#d62828)] text-white shadow-[0_14px_34px_rgba(220,38,38,0.35)] transition-transform duration-200 active:scale-95"
          >
            <span className="absolute inset-1 rounded-full bg-white/12 blur-[2px]" aria-hidden />
            <PhoneCall size={20} className="relative z-10 h-6 w-6" />
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="floating-cta group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(135deg,#34d97b,#1fa855)] text-white shadow-[0_14px_34px_rgba(37,211,102,0.38)] transition-transform duration-200 active:scale-95"
          >
            <span className="absolute inset-1 rounded-full bg-white/12 blur-[2px]" aria-hidden />
            <WhatsAppIcon className="relative z-10 h-[26px] w-[26px]" />
          </a>
        </div>
      </div>

      <div className="fixed bottom-6 right-4 z-80 hidden flex-col gap-3 lg:flex">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="floating-cta group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(135deg,#34d97b,#1fa855)] text-white shadow-[0_14px_34px_rgba(37,211,102,0.38)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        >
          <span
            className="absolute inset-1 rounded-full bg-white/12 blur-[2px] opacity-40 transition-opacity duration-300 group-hover:opacity-70"
            aria-hidden
          />
          <WhatsAppIcon className="relative z-10 h-[26px] w-[26px]" />
        </a>

        <a
          href={CALL_LINK}
          aria-label="Call +91 99304 03115"
          className="floating-cta group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(135deg,#ff5a5a,#d62828)] text-white shadow-[0_14px_34px_rgba(220,38,38,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        >
          <span
            className="absolute inset-1 rounded-full bg-white/12 blur-[2px] opacity-35 transition-opacity duration-300 group-hover:opacity-65"
            aria-hidden
          />
          <PhoneCall size={20} className="relative z-10 h-6 w-6" />
        </a>
      </div>
    </>
  );
}

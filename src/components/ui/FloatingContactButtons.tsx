"use client";

import { MessageCircle, PhoneCall } from "lucide-react";

const PHONE_NUMBER = "+919930403115";
const WHATSAPP_LINK = "https://wa.aisensy.com/+919152531394";
const CALL_LINK = `tel:${PHONE_NUMBER}`;

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-[80] flex flex-col gap-3 md:bottom-8 md:right-6">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle size={26} />
      </a>

      <a
        href={CALL_LINK}
        aria-label="Call +91 99304 03115"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-red-600 text-white shadow-[0_12px_30px_rgba(220,38,38,0.35)] transition-transform duration-300 hover:scale-105"
      >
        <PhoneCall size={24} />
      </a>
    </div>
  );
}

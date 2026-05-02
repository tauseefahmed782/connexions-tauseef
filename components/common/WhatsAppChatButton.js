"use client";

const WHATSAPP_NUMBER = "918149882686";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

function WhatsAppIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.18 6.41 2.18 11.85c0 1.74.45 3.45 1.31 4.95L2 22l5.36-1.41a9.8 9.8 0 0 0 4.67 1.19h.01c5.43 0 9.85-4.42 9.85-9.85 0-2.63-1.03-5.11-2.84-7.02Zm-7.02 15.21h-.01a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-3.18.84.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.37c0-4.48 3.65-8.13 8.14-8.13a8.08 8.08 0 0 1 5.77 2.39 8.07 8.07 0 0 1 2.37 5.75c0 4.49-3.65 8.15-8.05 8.15Zm4.46-6.09c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.61.77-.75.92-.14.16-.28.18-.52.06a6.6 6.6 0 0 1-1.94-1.2 7.31 7.31 0 0 1-1.34-1.67c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.61.57.25 1.01.39 1.36.5.57.18 1.09.15 1.5.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function WhatsAppChatButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50  flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon />
    </a>
  );
}

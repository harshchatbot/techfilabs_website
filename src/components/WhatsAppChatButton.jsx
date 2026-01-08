import React from "react";

const WHATSAPP_NUMBER = "917976111087"; // your number with country code (India = 91)
const DEFAULT_TEXT = "Hi! I’m interested in your services.";

export default function WhatsAppChatButton({
  phone = WHATSAPP_NUMBER,
  text = DEFAULT_TEXT,
}) {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-[#25D366] shadow-lg
        flex items-center justify-center
        hover:scale-105 active:scale-95
        transition-transform
      "
      title="Chat on WhatsApp"
    >
      {/* WhatsApp icon (white) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7"
        fill="white"
      >
        <path d="M19.11 17.44c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.66.14-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.14-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51l-.56-.01c-.19 0-.51.07-.78.36-.27.29-1.02.99-1.02 2.42 0 1.43 1.05 2.82 1.2 3.01.14.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.54-.34z" />
        <path d="M16.02 3C9.39 3 4 8.39 4 15.02c0 2.12.55 4.16 1.6 5.97L4 29l8.2-1.56a11.95 11.95 0 0 0 3.82.62C22.61 28.06 28 22.67 28 16.04 28 9.4 22.61 3 16.02 3zm0 22.2c-1.22 0-2.42-.23-3.55-.68l-.85-.33-4.87.93.95-4.75-.36-.87a9.22 9.22 0 0 1-1.01-4.23c0-5.11 4.17-9.28 9.29-9.28 5.11 0 9.28 4.17 9.28 9.28 0 5.12-4.17 9.29-9.28 9.29z" />
      </svg>
    </a>
  );
}

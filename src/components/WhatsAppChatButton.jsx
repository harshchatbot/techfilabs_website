import React from "react";

const WHATSAPP_NUMBER = "917976111087"; // your number with country code
const DEFAULT_TEXT = "Hi! I’m interested in your services.";

export default function WhatsAppChatButton({
  phone = WHATSAPP_NUMBER,
  text = DEFAULT_TEXT,
}) {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-30 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6">
      <span
        className="
          absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 rounded-lg
          bg-gray-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg
          transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100
          pointer-events-none whitespace-nowrap lg:block
        "
      >
        Chat with an Expert
      </span>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group pointer-events-auto relative flex h-12 w-12 items-center justify-center focus:outline-none sm:h-14 sm:w-14"
        title="Chat on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-70 animate-ping"></span>

        <span
          className="
            relative inline-flex items-center justify-center 
            h-12 w-12 rounded-full 
            bg-[#25D366] shadow-xl 
            transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a]
            sm:h-14 sm:w-14
            transition-all duration-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="h-7 w-7 text-white sm:h-8 sm:w-8"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </span>
      </a>
    </div>
  );
}

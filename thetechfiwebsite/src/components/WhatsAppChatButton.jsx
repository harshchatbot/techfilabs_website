import React from "react"
import { MessageCircle } from "lucide-react"

const WhatsAppChatButton = () => {
  const phoneNumber = "917976111087" // replace if needed
  const message = "Hi! I am interested in your services."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-[#25D366]
        flex items-center justify-center
        shadow-lg
        hover:scale-110
        transition-transform duration-200
      "
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  )
}

export default WhatsAppChatButton

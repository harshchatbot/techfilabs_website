export function buildWhatsAppUrl({
    phone,          // e.g. "917976111087" (country code + number, no +)
    message = "",   // optional prefilled text
  }) {
    const base = "https://wa.me/";
    const cleanPhone = String(phone).replace(/[^\d]/g, "");
    const text = encodeURIComponent(message);
    return message ? `${base}${cleanPhone}?text=${text}` : `${base}${cleanPhone}`;
  }
  
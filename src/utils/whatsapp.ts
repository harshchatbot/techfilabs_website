export function buildWhatsAppUrl({
  phone,
  message = "",
}: {
  phone: string | number;
  message?: string;
}) {
    const base = "https://wa.me/";
    const cleanPhone = String(phone).replace(/[^\d]/g, "");
    const text = encodeURIComponent(message);
    return message ? `${base}${cleanPhone}?text=${text}` : `${base}${cleanPhone}`;
  }
  
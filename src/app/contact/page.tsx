"use client";

import Contact from "@/components/sections/Contact";
import { CONTACT_INFO, PRODUCTS_DATA } from "@/constants/data";

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Contact
        contactInfo={CONTACT_INFO}
        products={PRODUCTS_DATA}
      />
    </div>
  );
}

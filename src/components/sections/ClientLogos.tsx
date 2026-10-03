"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import InfiniteSlider from "../ui/InfiniteSlider";

const CLIENTS = [
  { name: "Annavaram Craft Studio", file: "annavaram_logo.webp" },
  { name: "Credit Karma", file: "creditkarma_logo.png" },
  { name: "HCL Tech", file: "HCLTech_logo.png" },
  { name: "ICICI Bank", file: "ICICI_Bank_logo.png" },
  { name: "Thermo Fisher Scientific", file: "Thermo_Fisher_Scientific_logo.png" },
  { name: "Veeva Systems", file: "Veeva_Systemslogo.png" },
  { name: "Wipro", file: "Wipro_logo.png" },
];

export default function ClientLogos() {
  return (
    <section className="overflow-hidden border-t border-emerald-900/10 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-2xl font-semibold text-gray-900 md:text-3xl">
            Built from real enterprise delivery experience
          </h2>
          <p className="text-sm text-gray-500">
            Experience across CRM, healthcare, banking, consulting, and enterprise technology environments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-emerald-900/10 bg-gradient-to-b from-white via-emerald-50/40 to-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8"
        >
          <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <InfiniteSlider gap={40} reverse speed={72} speedOnHover={28} className="py-2">
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className={`group flex h-24 min-w-[220px] items-center justify-center rounded-2xl border px-8 shadow-[0_16px_34px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 ${
                    client.name === "Wipro"
                      ? "border-slate-200 bg-slate-100"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={`/client-logos/${client.file}`}
                      alt={client.name}
                      width={160}
                      height={44}
                      className="pointer-events-none h-10 w-auto select-none object-contain opacity-95 transition-all duration-300 md:h-11"
                    />
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
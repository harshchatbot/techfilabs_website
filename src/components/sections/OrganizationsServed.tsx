"use client";

import { motion } from "framer-motion";
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

interface OrganizationsServedProps {
  organizations?: any[];
}

export default function OrganizationsServed({ organizations }: OrganizationsServedProps = {}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fefa_100%)] pb-6 pt-1 md:pb-8 md:pt-2">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(6,95,70,0.04),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          viewport={{ once: true }}
          className="rounded-[1.75rem] border border-emerald-900/10 bg-[#f7fefa]/95 p-4 shadow-[0_16px_40px_rgba(6,95,70,0.05)] md:p-5"
        >
          <div className="mb-4 flex flex-col gap-1.5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-green-600">Organizations served</p>
              <h2 className="mt-1.5 text-xl font-semibold text-gray-900 md:text-[1.4rem]">
                Selected teams and environments we have supported.
              </h2>
            </div>
            <p className="max-w-lg text-xs leading-relaxed text-slate-500 md:text-sm">
              Representative exposure across consulting, healthcare, life sciences, financial services, and enterprise operations.
            </p>
          </div>

          <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <InfiniteSlider gap={22} reverse speed={72} speedOnHover={26} className="py-1">
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className={`flex h-14 min-w-[156px] items-center justify-center rounded-[1.1rem] border px-5 shadow-[0_10px_22px_rgba(6,95,70,0.04)] md:h-16 md:min-w-[172px] ${
                    client.name === "Wipro"
                      ? "border-slate-700/20 bg-slate-900/95"
                      : "border-emerald-900/10 bg-[#f7fefa]"
                  }`}
                >
                  <img
                    src={`/client-logos/${client.file}`}
                    alt={client.name}
                    className={`pointer-events-none h-7 w-auto select-none object-contain md:h-8 ${
                      client.name === "Wipro" ? "opacity-100" : "opacity-95"
                    }`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

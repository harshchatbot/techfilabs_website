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

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            A trusted partner in customer success
          </h2>
          <p className="text-gray-500 text-sm">Some of the customers we have served</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-gray-100 bg-gradient-to-b from-white via-gray-50/80 to-white p-6 md:p-8 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
        >
          <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <InfiniteSlider gap={40} reverse speed={72} speedOnHover={28} className="py-2">
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="group flex h-24 min-w-[220px] items-center justify-center rounded-2xl border border-gray-100 bg-white px-8 shadow-[0_16px_34px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={`/client-logos/${client.file}`}
                      alt={client.name}
                      className="pointer-events-none h-10 w-auto select-none object-contain opacity-95 transition-all duration-300 md:h-11"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
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

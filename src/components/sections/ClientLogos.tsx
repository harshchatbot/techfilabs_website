import Image from "next/image";

const EXPERIENCE_LOGOS = [
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
    <section aria-labelledby="experience-title" className="border-t border-[#24231F]/10 bg-[#FAF9F5] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 id="experience-title" className="font-serif text-2xl font-normal tracking-[-0.035em] text-[#24231F] sm:text-3xl">
          Experience shaped by enterprise work.
        </h2>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 border-y border-[#24231F]/10 py-8 sm:grid-cols-4 lg:grid-cols-7">
          {EXPERIENCE_LOGOS.map((item) => (
            <div key={item.name} className="flex min-h-14 items-center justify-center px-2">
              <Image
                src={`/client-logos/${item.file}`}
                alt={item.name}
                width={140}
                height={48}
                className="max-h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-[#77726A]">
          Logos represent professional experience across these organizations or environments, not necessarily TechFi Labs clients or endorsements.
        </p>
      </div>
    </section>
  );
}

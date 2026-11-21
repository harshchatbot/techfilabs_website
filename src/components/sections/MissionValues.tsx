"use client";

import Image from "next/image";

interface MissionValuesProps {
  mission?: string;
  whoWeAre?: string;
  values?: { title: string; description: string }[];
  commitment?: string;
}

export default function MissionValues({
  mission = "",
  whoWeAre = "",
  values = [],
  commitment = "",
}: MissionValuesProps) {
  return (
    <section className="border-t border-[#24231F]/10 bg-white py-16 text-[#24231F] sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#9B482E]">Our purpose</p>
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.045em] sm:text-4xl">Clear thinking. Dependable delivery.</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#625F59]">{mission}</p>
          <div className="relative mt-8 aspect-[5/3] overflow-hidden rounded-[1.25rem] bg-[#F1EEE7]">
            <Image src="/assets/media/why-delivery.jpg" alt="Team collaborating on a technology delivery project" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[#625F59]">{whoWeAre}</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#9B482E]">What guides us</p>
          <div className="border-t border-[#24231F]/15">
            {values.map((value, index) => (
              <div key={value.title} className="grid gap-2 border-b border-[#24231F]/15 py-6 sm:grid-cols-[2rem_1fr] sm:gap-5">
                <span className="text-xs font-semibold text-[#9B482E]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#625F59]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          {commitment && <p className="mt-7 max-w-lg text-sm leading-relaxed text-[#625F59]">{commitment}</p>}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Handshake, RefreshCw, ShieldCheck, Target } from "lucide-react";

const ICONS = [Target, Handshake, ShieldCheck, RefreshCw];

interface MissionValuesProps {
  mission?: string;
  whoWeAre?: string;
  values?: any[];
  commitment?: string;
}

export default function MissionValues({
  mission = "",
  whoWeAre = "",
  values = [],
  commitment = "",
}: MissionValuesProps) {
  return (
    <section className="py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid xl:grid-cols-[1fr_1.1fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-gray-200 bg-gradient-to-br from-green-50 via-white to-white p-8 md:p-10 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-green-600 mb-4">Our Mission</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Purpose with practical Salesforce execution.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">{mission}</p>

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="rounded-3xl border border-green-100 bg-white/80 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-green-700 mb-3">Who We Are</p>
                <p className="text-gray-600 leading-relaxed">{whoWeAre}</p>
              </div>

              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] border border-gray-200 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&auto=format&fit=crop"
                  alt="Salesforce team planning together"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute left-4 bottom-4 rounded-2xl border border-white/40 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-green-700 mb-1">Mission in practice</p>
                  <p className="text-sm font-medium text-gray-900">Stable delivery, clean handover, clear next steps.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-green-600 mb-4">Our Values</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = ICONS[index % ICONS.length];
                  return (
                    <div
                      key={value.title}
                      className="rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                    >
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-green-100 bg-green-50/70 p-7 shadow-[0_16px_40px_rgba(22,101,52,0.05)]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-green-700 mb-4">Our Commitment</p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl">{commitment}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import {
  b2bSolutions,
  b2bSectionSubtitle,
  advantages,
  sectionTitles,
} from "@/src/data/nat";
import type { B2BSolution, Advantage } from "@/src/data/nat";

const b2bIcons: Record<string, React.ReactNode> = {
  "drafting-compass": (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  building: (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  layers: (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
};

const advantageIcons: Record<string, React.ReactNode> = {
  "file-check": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "clipboard-check": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  zap: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "trending-down": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  calendar: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

export default function SolucionesB2B() {
  return (
    <section id="soluciones" className="relative overflow-hidden">
      {/* Hero-style background */}
      <div className="absolute inset-0">
        <Image
          src="/images/proyectos/fachadas/fachada-5.jpeg"
          alt="Soluciones B2B"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-carbon/92" />
      </div>

      <div className="relative z-10 section-padding">
        <Container>
          <AnimatedSection>
            <SectionTitle
              title={sectionTitles.b2bSolutions}
              subtitle="Aliados estratégicos para arquitectos y constructoras"
              light
            />
          </AnimatedSection>

          {/* B2B Cards */}
          <div className="mb-20 grid gap-6 md:grid-cols-3">
            {b2bSolutions.map((sol: B2BSolution, i: number) => (
              <AnimatedSection key={sol.id} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
                >
                  {/* Icon */}
                  <div className="mb-6 text-silver-light transition-colors group-hover:text-white">
                    {b2bIcons[sol.icon] || b2bIcons.layers}
                  </div>

                  <h3 className="mb-4 text-lg font-bold tracking-tight text-white">
                    {sol.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-silver">
                    {sol.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-white/60 to-transparent transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Why choose us */}
          <AnimatedSection>
            <div className="text-center">
              <h3 className="mb-10 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {b2bSectionSubtitle}
              </h3>

              <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4">
                {advantages.map((adv: Advantage, i: number) => (
                  <motion.div
                    key={adv.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 shadow-sm backdrop-blur-sm"
                  >
                    <span className="text-silver-light">
                      {advantageIcons[adv.icon || ""] || advantageIcons["file-check"]}
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {adv.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full mt-12 inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-bold tracking-wider text-carbon uppercase transition-colors hover:bg-platinum"
              >
                Cotiza tu proyecto
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </AnimatedSection>
        </Container>
      </div>
    </section>
  );
}

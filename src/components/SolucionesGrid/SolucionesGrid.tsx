"use client";

import { motion } from "motion/react";
import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { jabaSolutions, sectionTitles } from "@/src/data/nat";
import type { JabaSolution } from "@/src/data/nat";

/* ---------- Inline SVG icons ---------- */
const iconMap: Record<string, React.ReactNode> = {
  award: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.09 6.26L21 9.27l-5 3.64L17.18 20 12 16.77 6.82 20 8 12.91l-5-3.64 6.91-1.01L12 2z" />
    </svg>
  ),
  "shield-check": (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "file-certificate": (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  tag: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  headset: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  star: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

export default function SolucionesGrid() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title={sectionTitles.solutions}
            subtitle="Respaldamos cada proyecto con experiencia, calidad y compromiso"
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jabaSolutions.map((sol: JabaSolution, i: number) => (
            <AnimatedSection key={sol.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-platinum/80 bg-white p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:border-charcoal/30"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-charcoal to-silver transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center border border-platinum text-graphite transition-all duration-300 group-hover:border-charcoal group-hover:bg-carbon group-hover:text-white">
                  {iconMap[sol.icon] || iconMap.star}
                </div>

                <h3 className="mb-3 text-lg font-bold tracking-tight text-carbon">
                  {sol.title}
                </h3>
                <p className="text-sm leading-relaxed text-steel">
                  {sol.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

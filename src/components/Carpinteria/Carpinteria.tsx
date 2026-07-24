"use client";

import { motion } from "motion/react";
import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import {
  carpentryTitle,
  carpentryDescription,
  carpentryServices,
} from "@/src/data/nat";
import type { CarpentryService } from "@/src/data/nat";

const carpentryIcons: Record<string, React.ReactNode> = {
  "Closets y vestidores": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9-4 9 4M12 3v16" />
    </svg>
  ),
  "Cocinas integrales": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  "Puertas de madera": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm4 8h.01M8 12a.5.5 0 100-1 .5.5 0 000 1z" />
    </svg>
  ),
};

export default function Carpinteria() {
  return (
    <section id="carpinteria" className="section-padding relative overflow-hidden bg-carbon-light text-white">
      {/* Subtle geometric pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 40px)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionTitle title={carpentryTitle} light />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Description */}
          <AnimatedSection direction="left">
            <div>
              <p className="text-lg leading-relaxed text-silver-light">
                {carpentryDescription}
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-all hover:bg-white hover:text-carbon"
              >
                Solicitar cotización
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimatedSection>

          {/* Services grid */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {carpentryServices.map((svc: CarpentryService, i: number) => (
                <motion.div
                  key={svc.id}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex flex-col items-center gap-3 border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center text-silver transition-colors group-hover:text-white">
                    {carpentryIcons[svc.name] || (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-silver-light uppercase group-hover:text-white">
                    {svc.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

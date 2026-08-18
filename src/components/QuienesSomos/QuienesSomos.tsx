"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { companyInfo, servicesList, sectionTitles } from "@/src/data/nat";
import type { Service } from "@/src/data/nat";

type Tab = "mision" | "vision" | "politica";

const tabs: { key: Tab; label: string }[] = [
  { key: "mision", label: "Misión" },
  { key: "vision", label: "Visión" },
  { key: "politica", label: "Política de Calidad" },
];

export default function QuienesSomos() {
  const [activeTab, setActiveTab] = useState<Tab>("mision");

  const tabContent: Record<Tab, string> = {
    mision: companyInfo.mission,
    vision: companyInfo.vision,
    politica: companyInfo.qualityPolicy,
  };

  return (
    <section id="quienes-somos" className="section-padding bg-white">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title={sectionTitles.aboutUs}
            subtitle={companyInfo.tagline}
          />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: description + services */}
          <AnimatedSection direction="left">
            <div>
              <p className="mb-8 text-lg leading-relaxed text-graphite">
                {companyInfo.description}
              </p>

              <h3 className="mb-6 text-sm font-bold tracking-widest text-carbon uppercase">
                Nuestras Soluciones
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {servicesList.map((svc: Service) => (
                  <div
                    key={svc.id}
                    className="flex items-center gap-3 rounded-xl border border-platinum/60 bg-pearl/40 px-4 py-3 shadow-xs transition-all hover:border-charcoal/30 hover:shadow-sm"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-steel"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-graphite">{svc.name}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-carbon px-8 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all hover:bg-charcoal hover:shadow-lg"
              >
                Contáctanos
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimatedSection>

          {/* Right: tabs */}
          <AnimatedSection direction="right" delay={0.15}>
            <div>
              {/* Tab headers */}
              <div className="mb-8 flex border-b border-platinum">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative px-6 py-4 text-sm font-semibold tracking-wide uppercase transition-colors ${activeTab === tab.key
                      ? "text-carbon"
                      : "text-silver hover:text-graphite"
                      }`}
                  >
                    {tab.label}
                    {activeTab === tab.key && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-carbon"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[200px]"
                >
                  <div className="border-l-2 border-charcoal/20 pl-6">
                    <h4 className="mb-4 text-xl font-bold text-carbon">
                      {tabs.find((t) => t.key === activeTab)?.label}
                    </h4>
                    <p className="text-base leading-relaxed text-graphite">
                      {tabContent[activeTab]}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Featured Project Image */}
              <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-2xl border border-platinum/80 shadow-lg">
                <Image
                  src="/images/proyectos/fachadas/fachadas-26.jpg"
                  alt="Proyecto representativo JABA"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-carbon/90 to-transparent p-4">
                  <span className="text-xs font-semibold tracking-wider text-white uppercase">
                    Arquitectura y Diseño en Aluminio y Cristal
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

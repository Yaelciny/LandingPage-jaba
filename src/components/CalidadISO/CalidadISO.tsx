"use client";

import Image from "next/image";
import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import {
  qualityCommitments,
  qualitySystemTitle,
  qualitySystemSubtitle,
} from "@/src/data/nat";
import type { QualityCommitment } from "@/src/data/nat";

export default function CalidadISO() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/proyectos/fachadas/fachada-8.webp"
          alt="Calidad ISO 9001"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/92 backdrop-blur-sm" />
      </div>

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionTitle
            title={qualitySystemTitle}
            subtitle={qualitySystemSubtitle}
          />
        </AnimatedSection>

        <div className="mx-auto max-w-3xl">
          {/* ISO badge */}
          <AnimatedSection delay={0.1}>
            <div className="mx-auto mb-10 flex w-fit items-center gap-4 border border-platinum bg-white px-8 py-4 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center bg-carbon text-white">
                <span className="text-xs font-black leading-tight tracking-tighter">
                  ISO<br />9001
                </span>
              </div>
              <div>
                <p className="text-sm font-bold tracking-wide text-carbon uppercase">
                  {qualitySystemSubtitle}
                </p>
                <p className="text-xs text-steel">
                  Certificación de Gestión de Calidad
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Commitments */}
          <div className="space-y-6">
            {qualityCommitments.map((commitment: QualityCommitment, i: number) => (
              <AnimatedSection key={commitment.id} delay={0.2 + i * 0.1}>
                <div className="flex items-start gap-4 border-l-2 border-charcoal/20 py-2 pl-6 transition-all hover:border-charcoal">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-carbon text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base leading-relaxed text-graphite">
                    {commitment.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

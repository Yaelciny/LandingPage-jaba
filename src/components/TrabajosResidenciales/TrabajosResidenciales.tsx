"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { residentialWorks, sectionTitles } from "@/src/data/nat";
import type { ResidentialWork } from "@/src/data/nat";

export default function TrabajosResidenciales() {
  return (
    <section className="section-padding bg-pearl">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title={sectionTitles.residentialWorks}
            subtitle="Proyectos que transforman espacios"
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {residentialWorks.map((work: ResidentialWork, i: number) => (
            <AnimatedSection key={work.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                  <motion.div
                    initial={false}
                    className="text-center"
                  >
                    <div className="mb-3 mx-auto h-[1px] w-8 bg-white/60 transition-all duration-500 group-hover:w-16" />
                    <h3 className="text-lg font-bold tracking-wide text-white uppercase">
                      {work.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Corner detail */}
                <div className="absolute top-4 right-4 h-4 w-4 border-t border-r border-white/0 transition-all duration-500 group-hover:border-white/60" />
                <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-white/0 transition-all duration-500 group-hover:border-white/60" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { productCategories, sectionTitles } from "@/src/data/nat";
import type { ProductCategory } from "@/src/data/nat";

export default function ProductosGrid() {
  return (
    <section id="productos" className="section-padding bg-pearl">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title={sectionTitles.products}
            subtitle="Soluciones integrales en aluminio, cristal y carpintería"
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {productCategories.map((cat: ProductCategory, i: number) => (
            <AnimatedSection key={cat.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/30 to-transparent transition-all group-hover:from-carbon/95" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="mb-1 h-[1px] w-6 bg-white/40 transition-all duration-500 group-hover:w-12 group-hover:bg-white/80" />
                  <h3 className="mt-2 text-sm font-bold tracking-wider text-white uppercase">
                    {cat.name}
                  </h3>
                  {cat.description && (
                    <p className="mt-1 max-h-0 overflow-hidden text-xs leading-relaxed text-white/60 transition-all duration-500 group-hover:max-h-20 group-hover:mt-2">
                      {cat.description}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/src/components/ui/Container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import AnimatedSection from "@/src/components/ui/AnimatedSection";
import { formLabels } from "@/src/data/nat";

export default function FormularioCotizacion() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Future: connect to API
    console.log("Form submitted");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section-padding bg-pearl" id="cotizacion">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title={formLabels.sectionTitle}
            subtitle={formLabels.sectionSubtitle}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="quote-name"
                  className="mb-2 block text-sm font-semibold tracking-wide text-carbon uppercase"
                >
                  {formLabels.nameLabel}
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  placeholder={formLabels.namePlaceholder}
                  className="w-full border border-platinum bg-white px-5 py-4 text-sm text-carbon outline-none transition-all placeholder:text-silver focus:border-charcoal focus:ring-1 focus:ring-charcoal/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="quote-email"
                  className="mb-2 block text-sm font-semibold tracking-wide text-carbon uppercase"
                >
                  {formLabels.emailLabel}
                </label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  placeholder={formLabels.emailPlaceholder}
                  className="w-full rounded-xl border border-platinum bg-white px-5 py-4 text-sm text-carbon outline-none transition-all placeholder:text-silver focus:border-charcoal focus:ring-1 focus:ring-charcoal/20"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="quote-message"
                  className="mb-2 block text-sm font-semibold tracking-wide text-carbon uppercase"
                >
                  {formLabels.messageLabel}
                </label>
                <textarea
                  id="quote-message"
                  required
                  rows={5}
                  placeholder={formLabels.messagePlaceholder}
                  className="w-full resize-none rounded-xl border border-platinum bg-white px-5 py-4 text-sm text-carbon outline-none transition-all placeholder:text-silver focus:border-charcoal focus:ring-1 focus:ring-charcoal/20"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-carbon py-4 text-sm font-bold tracking-widest text-white uppercase shadow-md transition-all hover:bg-charcoal hover:shadow-lg"
              >
                {formLabels.submitText}
              </motion.button>
            </form>

            {/* Success toast */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 border border-green-200 bg-green-50 px-6 py-4 text-center text-sm font-medium text-green-800"
                >
                  {formLabels.successMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Container from "@/src/components/ui/Container";
import { bannerSlides } from "@/src/data/nat";
import type { BannerSlide } from "@/src/data/nat";

const AUTOPLAY_INTERVAL = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide: BannerSlide = bannerSlides[current];

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? "-50%" : "50%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 bg-black"
        >
          <Image
            src={slide.backgroundImage}
            alt={slide.title}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          {/* Side gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-content"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl"
            >
              {slide.subtitle && (
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-4 text-sm font-medium tracking-[0.3em] text-white/70 uppercase"
                >
                  {slide.subtitle}
                </motion.p>
              )}

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>

              {slide.description && (
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
                  {slide.description}
                </p>
              )}

              {slide.ctaText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <a
                    href={slide.ctaHref || "#contacto"}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wider text-carbon uppercase transition-all hover:bg-platinum hover:shadow-lg hover:shadow-white/10"
                  >
                    {slide.ctaText}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#quienes-somos"
                    className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium tracking-wider text-white uppercase backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
                  >
                    Más información
                  </a>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {bannerSlides.map((_: BannerSlide, i: number) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`group relative h-1 transition-all duration-500 ${i === current ? "w-12" : "w-6"
                  }`}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${i === current
                      ? "bg-white"
                      : "bg-white/30 group-hover:bg-white/60"
                    }`}
                />
                {i === current && (
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                    className="absolute inset-0 origin-left rounded-full bg-white/50"
                  />
                )}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}

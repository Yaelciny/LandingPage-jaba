"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Container from "@/src/components/ui/Container";
import { navLinks, companyInfo } from "@/src/data/nat";
import type { NavLink } from "@/src/data/nat";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-carbon/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <a href="#inicio" className="relative z-10 flex items-center gap-3">
            <Image
              src="/images/logoblanco.webp"
              alt={companyInfo.name}
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link: NavLink) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide text-white/80 uppercase transition-colors hover:text-white group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-3/4" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button desktop */}
          <a
            href="#contacto"
            className="hidden rounded-none border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold tracking-wider text-white uppercase backdrop-blur-sm transition-all hover:bg-white hover:text-carbon lg:block"
          >
            Cotizar
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
          </button>
        </nav>
      </Container>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center bg-carbon/98 backdrop-blur-lg lg:hidden"
          >
            <nav>
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((link: NavLink, i: number) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-light tracking-widest text-white uppercase transition-colors hover:text-silver-light"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="#contacto"
                    onClick={() => setMobileOpen(false)}
                    className="mt-4 inline-block border border-white/30 bg-white/10 px-8 py-3 text-lg font-semibold tracking-widest text-white uppercase transition-all hover:bg-white hover:text-carbon"
                  >
                    Cotizar
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

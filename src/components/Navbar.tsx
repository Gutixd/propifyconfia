"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Simulador", href: "#simulador" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(15,23,42,0.10)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNav("#inicio"); }}
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <img src="/logo.svg" alt="PropifyConfia logo" className="w-10 h-10 drop-shadow-md" />
              <div className="flex flex-col leading-none">
                <span className={`font-bold text-base tracking-tight transition-colors ${scrolled ? "text-[#1B3A6B]" : "text-white"}`}>
                  Propify<span className="text-[#2563EB]">Confia</span>
                </span>
                <span className={`text-[10px] transition-colors ${scrolled ? "text-[#94A3B8]" : "text-white/70"}`}>
                  Corredora de propiedades
                </span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    scrolled
                      ? "text-[#475569] hover:text-[#1B3A6B] hover:bg-[#F8FAFC]"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/56912345678?text=Hola%2C%20quiero%20más%20información%20sobre%20propiedades"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20b85a] transition-all duration-200 hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <button
                onClick={() => handleNav("#contacto")}
                className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
              >
                Contáctanos
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1B3A6B] hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Menú"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-[#475569] hover:text-[#1B3A6B] hover:bg-[#F8FAFC] font-medium text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" /> WhatsApp
                </a>
                <button
                  onClick={() => handleNav("#contacto")}
                  className="flex-1 py-3 rounded-xl bg-[#2563EB] text-white text-sm font-semibold"
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonios } from "@/lib/mockData";

export default function Testimonios() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const next = useCallback(() => {
    setDir(1);
    setIdx((i) => (i + 1) % testimonios.length);
  }, []);

  const prev = () => {
    setDir(-1);
    setIdx((i) => (i - 1 + testimonios.length) % testimonios.length);
  };

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonios[idx];

  const enterX = dir > 0 ? 50 : -50;
  const exitX = dir > 0 ? -50 : 50;

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="eyebrow mb-4">Testimonios</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] mb-3 mt-4">
            Lo que dicen <span className="text-gradient-dark">nuestros clientes</span>
          </h2>
          <p className="text-[#475569] max-w-md mx-auto text-lg">
            Historias reales de personas que confiaron en PropifyConfia para una de las decisiones más importantes de su vida.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Carrusel */}
          <div className="relative bg-gradient-to-br from-[#0F172A] via-[#142e54] to-[#1B3A6B] rounded-[2rem] p-8 sm:p-14 shadow-2xl overflow-hidden min-h-[300px]">
            {/* Blob de luz */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#2563EB]/30 blur-3xl" />
            {/* Comillas decorativas */}
            <div className="absolute top-4 left-8 text-8xl text-white/10 font-serif leading-none select-none">"</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: enterX }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: exitX }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Estrellas */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < t.estrellas ? "text-amber-400 fill-amber-400" : "text-gray-200"}`}
                    />
                  ))}
                </div>

                <blockquote className="text-xl sm:text-2xl text-white leading-relaxed font-medium mb-8">
                  "{t.texto}"
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/20">
                    <span className="text-white font-bold text-sm">
                      {t.nombre.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.nombre}</p>
                    <p className="text-sm text-white/60">{t.operacion} · {t.comuna}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === idx ? "w-6 h-2.5 bg-[#2563EB]" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Reviews badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-10 text-sm text-[#94A3B8]"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span>4.9 · Basado en reseñas verificadas</span>
        </motion.div>
      </div>
    </section>
  );
}

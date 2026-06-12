"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, ChevronDown } from "lucide-react";
import { comunas } from "@/lib/mockData";

function FadeUp({ delay = 0, children, className }: { delay?: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [busqueda, setBusqueda] = useState({ operacion: "comprar", comuna: "", tipo: "" });

  const handleBuscar = () => document.querySelector("#propiedades")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      {/* Placeholder video */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <div className="border-2 border-dashed border-white rounded-2xl px-8 py-6 text-center">
          <p className="text-white text-sm font-mono">VIDEO DE FONDO — Reemplazar en /public/videos/hero.mp4</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/8 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-36">
        <div className="max-w-3xl">
          <FadeUp delay={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Corredora digital · Santiago de Chile
          </FadeUp>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.13, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5"
          >
            Tu propiedad,
            <br />
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent">
              en manos seguras.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26, ease: "easeOut" }}
            className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl"
          >
            Compramos, vendemos y arrendamos propiedades con transparencia total,
            proceso 100% digital y acompañamiento personalizado en cada paso.
          </motion.p>

          {/* Buscador */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.39, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2 mb-8"
          >
            <select
              value={busqueda.operacion}
              onChange={(e) => setBusqueda({ ...busqueda, operacion: e.target.value })}
              className="flex-1 px-4 py-3.5 rounded-xl text-sm text-[#0F172A] bg-[#F8FAFC] border-0 outline-none cursor-pointer font-medium"
            >
              <option value="comprar">Comprar</option>
              <option value="arrendar">Arrendar</option>
            </select>
            <select
              value={busqueda.comuna}
              onChange={(e) => setBusqueda({ ...busqueda, comuna: e.target.value })}
              className="flex-1 px-4 py-3.5 rounded-xl text-sm text-[#475569] bg-[#F8FAFC] border-0 outline-none cursor-pointer"
            >
              <option value="">Todas las comunas</option>
              {comunas.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={busqueda.tipo}
              onChange={(e) => setBusqueda({ ...busqueda, tipo: e.target.value })}
              className="flex-1 px-4 py-3.5 rounded-xl text-sm text-[#475569] bg-[#F8FAFC] border-0 outline-none cursor-pointer"
            >
              <option value="">Tipo de propiedad</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
            </select>
            <button
              onClick={handleBuscar}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition-all duration-200 whitespace-nowrap"
            >
              <Search className="w-4 h-4" />
              Buscar
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.52, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => document.querySelector("#propiedades")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1B3A6B] font-semibold text-sm hover:bg-gray-50 transition-all hover:-translate-y-0.5"
            >
              Ver propiedades <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Vender mi propiedad
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Descubre más</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
      >
        {[{ value: "+120", label: "Propiedades" }, { value: "+85", label: "Clientes felices" }, { value: "100%", label: "Digital" }].map((stat) => (
          <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-white text-center">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-white/70 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

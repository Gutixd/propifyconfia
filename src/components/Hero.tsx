"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { comunas } from "@/lib/mockData";

export default function Hero() {
  const [busqueda, setBusqueda] = useState({ operacion: "comprar", comuna: "", tipo: "" });

  const handleBuscar = () => document.querySelector("#propiedades")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />

      {/* Blobs animados de luz */}
      <div className="absolute -top-32 -left-20 w-[34rem] h-[34rem] rounded-full bg-[#2563EB]/30 blur-3xl blob-anim" />
      <div className="absolute top-1/4 -right-24 w-[30rem] h-[30rem] rounded-full bg-[#3B82F6]/25 blur-3xl blob-anim" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 left-1/3 w-[26rem] h-[26rem] rounded-full bg-[#1e40af]/30 blur-3xl blob-anim" style={{ animationDelay: "8s" }} />

      {/* Patrón geométrico */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      {/* Placeholder video (oculto, listo para reemplazar) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
        <div className="border-2 border-dashed border-white rounded-2xl px-8 py-6 text-center">
          <p className="text-white text-sm font-mono">VIDEO DE FONDO — Reemplazar en /public/videos/hero.mp4</p>
        </div>
      </div>

      {/* Fade inferior hacia el contenido */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A1428]/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90 text-xs font-medium mb-7"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#25D366]" />
            </span>
            Corredora digital · Santiago de Chile
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6"
          >
            Tu propiedad,
            <br />
            <span className="text-gradient-blue">en manos seguras.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
          >
            Compramos, vendemos y arrendamos propiedades con transparencia total,
            proceso 100% digital y acompañamiento personalizado en cada paso.
          </motion.p>

          {/* Buscador glass premium */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
            className="glass-light rounded-2xl shadow-2xl p-2.5 flex flex-col sm:flex-row gap-2 mb-7 max-w-2xl"
          >
            <select
              value={busqueda.operacion}
              onChange={(e) => setBusqueda({ ...busqueda, operacion: e.target.value })}
              className="flex-1 px-4 py-3.5 rounded-xl text-sm text-[#0F172A] bg-white/70 border border-white/40 outline-none cursor-pointer font-semibold focus:border-[#2563EB] transition-colors"
            >
              <option value="comprar">Comprar</option>
              <option value="arrendar">Arrendar</option>
            </select>
            <select
              value={busqueda.comuna}
              onChange={(e) => setBusqueda({ ...busqueda, comuna: e.target.value })}
              className="flex-1 px-4 py-3.5 rounded-xl text-sm text-[#475569] bg-white/70 border border-white/40 outline-none cursor-pointer focus:border-[#2563EB] transition-colors"
            >
              <option value="">Todas las comunas</option>
              {comunas.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={busqueda.tipo}
              onChange={(e) => setBusqueda({ ...busqueda, tipo: e.target.value })}
              className="flex-1 px-4 py-3.5 rounded-xl text-sm text-[#475569] bg-white/70 border border-white/40 outline-none cursor-pointer focus:border-[#2563EB] transition-colors"
            >
              <option value="">Tipo</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
            </select>
            <button
              onClick={handleBuscar}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-primary font-semibold text-sm whitespace-nowrap"
            >
              <Search className="w-4 h-4" />
              Buscar
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => document.querySelector("#propiedades")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#1B3A6B] font-semibold text-sm hover:bg-gray-50 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Ver propiedades
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-white font-semibold text-sm hover:bg-white/15 transition-all hover:-translate-y-0.5"
            >
              Vender mi propiedad
            </button>
            <div className="flex items-center gap-2 text-white/60 text-xs ml-1">
              <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
              Proceso 100% seguro
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Descubre más</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats flotantes glass */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
      >
        {[{ value: "+120", label: "Propiedades" }, { value: "+85", label: "Clientes felices" }, { value: "100%", label: "Digital" }].map((stat, i) => (
          <div
            key={stat.label}
            className={`glass rounded-2xl px-6 py-4 text-white text-center min-w-[140px] ${i === 1 ? "float-anim" : "float-anim-slow"}`}
          >
            <p className="text-3xl font-extrabold text-gradient-blue">{stat.value}</p>
            <p className="text-xs text-white/70 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

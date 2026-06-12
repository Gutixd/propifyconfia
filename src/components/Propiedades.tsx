"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, ChevronRight, SlidersHorizontal } from "lucide-react";
import { propiedades, comunas } from "@/lib/mockData";
import { Operacion, TipoPropiedad } from "@/lib/types";


function badgeColor(op: Operacion) {
  return op === "venta"
    ? "bg-[#EFF6FF] text-[#1d4ed8]"
    : "bg-[#F0FDF4] text-[#16a34a]";
}

function PropCard({ prop, index }: { prop: typeof propiedades[0]; index: number }) {
  const formatUF = (n: number) =>
    n >= 100
      ? `UF ${n.toLocaleString("es-CL")}`
      : `UF ${n.toFixed(1)}`;
  const formatCLP = (n: number) =>
    `$${Math.round(n / 1000).toLocaleString("es-CL")}K`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
      className="group card-shadow bg-white rounded-2xl overflow-hidden border border-gray-100"
    >
      {/* Imagen / Placeholder */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1B3A6B]/10 to-[#2563EB]/20 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#2563EB]/40 gap-3">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21V12h6v9"/>
          </svg>
          <span className="text-xs font-mono text-center px-4">
            Foto real · {prop.imagen}
          </span>
        </div>
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${badgeColor(prop.operacion)}`}>
          {prop.operacion === "venta" ? "Venta" : "Arriendo"}
        </span>
        {prop.destacada && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">
            Destacada
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-semibold text-[#0F172A] text-base leading-snug mb-1 line-clamp-1">
          {prop.titulo}
        </h3>
        <div className="flex items-center gap-1.5 text-[#94A3B8] text-xs mb-4">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{prop.direccion}</span>
        </div>

        {/* Precio */}
        <div className="mb-4">
          <p className="text-2xl font-bold text-[#1B3A6B]">{formatUF(prop.precio_uf)}</p>
          <p className="text-xs text-[#94A3B8]">{formatCLP(prop.precio_clp)} aprox.</p>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-[#475569] text-sm mb-5 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-[#2563EB]" />
            {prop.dormitorios}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-[#2563EB]" />
            {prop.banos}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-[#2563EB]" />
            {prop.m2} m²
          </span>
        </div>

        <button
          onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F8FAFC] text-[#1B3A6B] font-semibold text-sm hover:bg-[#EFF6FF] hover:text-[#2563EB] transition-colors duration-200 group/btn"
        >
          Ver más detalles
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Propiedades() {
  const [op, setOp] = useState<"todas" | Operacion>("todas");
  const [tipo, setTipo] = useState<"todos" | TipoPropiedad>("todos");
  const [comuna, setComuna] = useState("");
  const [dormMin, setDormMin] = useState(0);

  const filtered = useMemo(() => {
    return propiedades.filter((p) => {
      if (op !== "todas" && p.operacion !== op) return false;
      if (tipo !== "todos" && p.tipo !== tipo) return false;
      if (comuna && p.comuna !== comuna) return false;
      if (dormMin > 0 && p.dormitorios < dormMin) return false;
      return true;
    });
  }, [op, tipo, comuna, dormMin]);

  return (
    <section id="propiedades" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
            Propiedades disponibles
          </h2>
          <p className="text-[#475569] max-w-xl">
            Encuentra tu próximo hogar o inversión entre nuestras propiedades seleccionadas en Santiago y comunas aledañas.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-10 flex flex-wrap items-center gap-3"
        >
          <SlidersHorizontal className="w-4 h-4 text-[#2563EB]" />
          {/* Operación */}
          <div className="flex rounded-xl overflow-hidden border border-gray-200">
            {(["todas", "venta", "arriendo"] as const).map((o) => (
              <button
                key={o}
                onClick={() => setOp(o)}
                className={`px-4 py-2 text-xs font-semibold capitalize transition-colors ${
                  op === o
                    ? "bg-[#2563EB] text-white"
                    : "bg-white text-[#475569] hover:bg-gray-50"
                }`}
              >
                {o === "todas" ? "Todas" : o.charAt(0).toUpperCase() + o.slice(1)}
              </button>
            ))}
          </div>

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value as typeof tipo)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-xs text-[#475569] outline-none bg-white"
          >
            <option value="todos">Tipo: Todos</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
          </select>

          <select
            value={comuna}
            onChange={(e) => setComuna(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 text-xs text-[#475569] outline-none bg-white"
          >
            <option value="">Todas las comunas</option>
            {comunas.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>

          <select
            value={dormMin}
            onChange={(e) => setDormMin(Number(e.target.value))}
            className="px-4 py-2 rounded-xl border border-gray-200 text-xs text-[#475569] outline-none bg-white"
          >
            <option value={0}>Dormitorios: Todos</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
          </select>

          <span className="ml-auto text-xs text-[#94A3B8]">
            {filtered.length} propiedad{filtered.length !== 1 ? "es" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
          </span>
        </motion.div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((prop, i) => (
              <PropCard key={prop.id} prop={prop} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#94A3B8]">
            <p className="text-lg font-medium">No se encontraron propiedades con esos filtros.</p>
            <button onClick={() => { setOp("todas"); setTipo("todos"); setComuna(""); setDormMin(0); }}
              className="mt-4 text-sm text-[#2563EB] hover:underline">
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

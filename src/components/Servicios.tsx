"use client";

import { motion } from "framer-motion";
import { TrendingUp, Search, KeyRound, FileCheck, ArrowRight } from "lucide-react";

const servicios = [
  {
    icon: TrendingUp,
    titulo: "Vendemos tu propiedad",
    desc: "Tasación profesional, fotografía de calidad, publicación en portales líderes y negociación experta para obtener el mejor precio en el menor tiempo posible.",
    lista: ["Tasación sin costo", "Difusión multicanal", "Negociación a tu favor"],
    color: "from-blue-600 to-blue-700",
    bg: "bg-blue-50",
    accent: "text-blue-600",
  },
  {
    icon: Search,
    titulo: "Te ayudamos a comprar",
    desc: "Buscamos la propiedad que se ajusta a tus necesidades y presupuesto. Te acompañamos desde la primera visita hasta la firma en notaría.",
    lista: ["Búsqueda personalizada", "Visitas coordinadas", "Asesoría hipotecaria"],
    color: "from-indigo-600 to-indigo-700",
    bg: "bg-indigo-50",
    accent: "text-indigo-600",
  },
  {
    icon: KeyRound,
    titulo: "Gestión de arriendos",
    desc: "Encontramos al arrendatario ideal, verificamos antecedentes, redactamos el contrato y gestionamos el arriendo de forma integral.",
    lista: ["Verificación de antecedentes", "Contrato a medida", "Seguimiento mensual"],
    color: "from-[#1B3A6B] to-[#2563EB]",
    bg: "bg-slate-50",
    accent: "text-[#1B3A6B]",
  },
  {
    icon: FileCheck,
    titulo: "Asesoría y proceso seguro",
    desc: "Revisión legal de títulos, alzamiento de hipotecas, coordinación con notarías y Conservador de Bienes Raíces para un cierre sin sorpresas.",
    lista: ["Revisión de títulos", "Coordinación notarial", "Respaldo jurídico"],
    color: "from-emerald-600 to-emerald-700",
    bg: "bg-emerald-50",
    accent: "text-emerald-600",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
            Nuestros servicios
          </h2>
          <p className="text-[#475569]">
            Soluciones completas para cada etapa del proceso inmobiliario, respaldadas por tecnología y experiencia real en el mercado chileno.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 card-shadow flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <s.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-base font-bold text-[#0F172A] mb-2">{s.titulo}</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-5 flex-1">{s.desc}</p>

              <ul className="space-y-2 mb-6">
                {s.lista.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#475569]">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.bg.replace("bg-", "bg-").replace("-50", "-500")} bg-[#2563EB]`} />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                className={`flex items-center gap-1.5 text-xs font-semibold ${s.accent} hover:gap-2.5 transition-all duration-200`}
              >
                Consultar ahora
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-[#1B3A6B] to-[#2563EB] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-white/75 text-sm">
              Contáctanos hoy y recibe una evaluación gratuita sin compromisos.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20b85a] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-xl bg-white text-[#1B3A6B] font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              Formulario
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

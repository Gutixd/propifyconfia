"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Cpu, Heart } from "lucide-react";
import { equipo } from "@/lib/mockData";
import AnimatedCounter from "./AnimatedCounter";

function FadeUp({ delay = 0, children, className }: { delay?: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const valores = [
  { icon: Shield, titulo: "Confianza", desc: "Cada operación respaldada por contratos transparentes y asesoría legal especializada." },
  { icon: Eye, titulo: "Transparencia", desc: "Sin letra chica. Tarifas claras, proceso visible y comunicación honesta en todo momento." },
  { icon: Cpu, titulo: "Tecnología", desc: "Proceso 100% digital: firma electrónica, videollamadas y gestión en línea." },
  { icon: Heart, titulo: "Cercanía", desc: "Te acompañamos desde el primer contacto hasta la firma, con atención personalizada." },
];

const stats = [
  { value: 120, suffix: "+", label: "Propiedades gestionadas" },
  { value: 85, suffix: "+", label: "Clientes satisfechos" },
  { value: 98, suffix: "%", label: "Tasa de satisfacción" },
  { value: 3, suffix: " años", label: "De experiencia" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp delay={0} className="mb-16 max-w-2xl">
          <div className="section-divider mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">Quiénes somos</h2>
          <p className="text-[#475569] leading-relaxed text-lg">
            PropifyConfia nació con una misión concreta: hacer del proceso inmobiliario algo
            claro, justo y accesible para todos. Sin burocracia innecesaria, sin sorpresas al
            final. Solo resultados reales para familias reales.
          </p>
        </FadeUp>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <FadeUp delay={0.1}>
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4">
                Lo que nos diferencia de las corredoras tradicionales
              </h3>
              <div className="space-y-4 text-[#475569]">
                {[
                  "Proceso completamente digital: sin largas visitas de oficina.",
                  "Tarifas transparentes desde el primer día, sin cobros ocultos.",
                  "Revisión legal exhaustiva en cada contrato.",
                  "Acompañamiento real: un ejecutivo dedicado a tu operación.",
                  "Herramientas tecnológicas: simulador hipotecario, firma electrónica y más.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    </div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                  <p className="text-3xl font-bold text-[#1B3A6B]">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1">{s.label}</p>
                </div>
              ))}
            </FadeUp>
          </div>

          {/* Placeholder video institucional */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1B3A6B] to-[#2563EB] flex flex-col items-center justify-center shadow-2xl overflow-hidden">
              <div className="border-2 border-dashed border-white/30 rounded-2xl p-8 text-center m-6">
                <svg className="w-14 h-14 text-white/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 10l4.553-2.069A1 1 0 0121 8.82V15a1 1 0 01-1.447.894L15 13.8M3 8.5A1.5 1.5 0 014.5 7h9A1.5 1.5 0 0115 8.5v7A1.5 1.5 0 0113.5 17h-9A1.5 1.5 0 013 15.5v-7z"/>
                </svg>
                <p className="text-white/60 text-sm font-mono leading-relaxed">
                  Video institucional<br />
                  Reemplazar en /public/videos/equipo.mp4
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-[#60A5FA]/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#1B3A6B]/10 -z-10" />
          </motion.div>
        </div>

        {/* Valores */}
        <div className="mb-24">
          <FadeUp delay={0} className="text-2xl font-bold text-[#0F172A] mb-8 text-center">
            Nuestros valores
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => (
              <motion.div
                key={v.titulo}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group p-6 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-[#2563EB]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors duration-300">
                  <v.icon className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-semibold text-[#0F172A] mb-2">{v.titulo}</h4>
                <p className="text-sm text-[#475569] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div>
          <FadeUp delay={0} className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
              El equipo detrás de PropifyConfia
            </h3>
            <p className="text-[#475569] max-w-xl mx-auto">
              Personas reales comprometidas con tu tranquilidad. Cada operación tiene un nombre y una responsabilidad.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-3 gap-8">
            {equipo.map((persona, i) => (
              <motion.div
                key={persona.nombre}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                className="group text-center"
              >
                <div className="relative w-36 h-36 mx-auto mb-5">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#2563EB] flex items-center justify-center shadow-xl group-hover:shadow-blue-200 transition-shadow duration-300 overflow-hidden">
                    <div className="text-center">
                      <span className="text-white/40 text-xs font-mono block mb-1">Foto real</span>
                      <span className="text-2xl font-bold text-white">
                        {persona.nombre.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#94A3B8] whitespace-nowrap">
                    {persona.imagen}
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-[#0F172A]">{persona.nombre}</h4>
                  <p className="text-sm text-[#2563EB] font-medium mb-3">{persona.cargo}</p>
                  <p className="text-sm text-[#475569] leading-relaxed">{persona.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

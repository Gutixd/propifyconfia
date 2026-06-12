"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

type TipoConsulta = "comprar" | "vender" | "arrendar" | "otro";

const TIPOS: { value: TipoConsulta; label: string }[] = [
  { value: "comprar", label: "Quiero comprar" },
  { value: "vender", label: "Quiero vender" },
  { value: "arrendar", label: "Quiero arrendar" },
  { value: "otro", label: "Otra consulta" },
];

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo: "comprar" as TipoConsulta,
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    // TODO: Conectar con Supabase — tabla: consultas
    // await supabase.from('consultas').insert([form])
    await new Promise((r) => setTimeout(r, 1200));
    setEnviado(true);
    setCargando(false);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const inputClass = "w-full px-4 py-3.5 rounded-xl border border-gray-200 text-[#0F172A] text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all placeholder:text-gray-400 bg-white";

  return (
    <section id="contacto" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-divider mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
            Conversemos
          </h2>
          <p className="text-[#475569] max-w-xl">
            Estamos para ayudarte. Cuéntanos qué necesitas y un ejecutivo se contactará contigo en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-gray-100"
          >
            {enviado ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">¡Mensaje recibido!</h3>
                <p className="text-[#475569] text-sm max-w-xs">
                  Gracias por contactarnos. Un ejecutivo te escribirá en menos de 24 horas hábiles.
                </p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nombre: "", email: "", telefono: "", tipo: "comprar", mensaje: "" }); }}
                  className="mt-6 text-sm text-[#2563EB] hover:underline"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1.5">Nombre completo *</label>
                    <input type="text" required placeholder="María González" value={form.nombre} onChange={set("nombre")} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1.5">Correo electrónico *</label>
                    <input type="email" required placeholder="maria@email.com" value={form.email} onChange={set("email")} className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1.5">Teléfono / WhatsApp</label>
                    <input type="tel" placeholder="+56 9 1234 5678" value={form.telefono} onChange={set("telefono")} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1.5">Tipo de consulta *</label>
                    <select required value={form.tipo} onChange={set("tipo")} className={inputClass}>
                      {TIPOS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1.5">Mensaje</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos qué necesitas: tipo de propiedad, presupuesto, comuna de interés..."
                    value={form.mensaje}
                    onChange={set("mensaje")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={cargando}
                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {cargando ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {cargando ? "Enviando..." : "Enviar mensaje"}
                  </button>
                  <a
                    href="https://wa.me/56912345678?text=Hola%2C%20necesito%20información%20sobre%20propiedades"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20b85a] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info lateral */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Datos de contacto */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#0F172A] mb-4">Información de contacto</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Teléfono", val: "+56 9 1234 5678" },
                  { icon: Mail, label: "Correo", val: "contacto@propifyconfia.cl" },
                  { icon: MapPin, label: "Ubicación", val: "Maipú, Santiago de Chile" },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8]">{label}</p>
                      <p className="text-sm font-medium text-[#0F172A]">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#0F172A] mb-4">Síguenos</h3>
              <a
                href="https://instagram.com/propifyconfia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A] group-hover:text-purple-600 transition-colors">@propifyconfia</p>
                  <p className="text-xs text-[#94A3B8]">Instagram</p>
                </div>
              </a>
            </div>

            {/* Mapa placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] flex flex-col items-center justify-center gap-3 text-[#2563EB]/40 relative">
                <MapPin className="w-10 h-10" />
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#1B3A6B]">Maipú, Santiago</p>
                  <p className="text-xs font-mono text-[#94A3B8] mt-1">
                    Reemplazar con Google Maps embed
                  </p>
                </div>
                {/* TODO: Reemplazar con iframe de Google Maps
                <iframe
                  src="https://maps.google.com/maps?q=Maipu+Santiago+Chile&output=embed"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                /> */}
              </div>
              <div className="p-4">
                <p className="text-xs text-[#475569] text-center">
                  Santiago de Chile · Región Metropolitana
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

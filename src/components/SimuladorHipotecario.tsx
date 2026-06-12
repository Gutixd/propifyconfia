"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronDown, Info } from "lucide-react";

const PLAZO_OPTS = [15, 20, 25, 30];

function fmt(n: number, dec = 2) {
  return n.toLocaleString("es-CL", { minimumFractionDigits: dec, maximumFractionDigits: dec });
}
function fmtClp(n: number) {
  return `$${Math.round(n).toLocaleString("es-CL")}`;
}

export default function SimuladorHipotecario() {
  const [valorUF, setValorUF] = useState(2500);
  const [piePct, setPiePct] = useState(20);
  const [plazo, setPlazo] = useState(25);
  const [tasa, setTasa] = useState(4.5);
  const [ufCLP, setUfCLP] = useState(39000);
  const [subsidio, setSubsidio] = useState(false);

  const subsidioAplica = valorUF <= 4000 && subsidio;
  const tasaEfectiva = subsidioAplica ? Math.max(tasa - 0.6, 0.1) : tasa;

  const calc = useMemo(() => {
    const pie = (piePct / 100) * valorUF;
    const monto = valorUF - pie;
    const tm = tasaEfectiva / 12 / 100;
    const N = plazo * 12;
    const pow = Math.pow(1 + tm, N);
    const dividendo = tm === 0 ? monto / N : monto * (tm * pow) / (pow - 1);
    const totalPagar = dividendo * N;
    const totalIntereses = totalPagar - monto;

    return { pie, monto, dividendo, totalPagar, totalIntereses, N };
  }, [valorUF, piePct, plazo, tasaEfectiva]);

  const calcSinSubsidio = useMemo(() => {
    if (!subsidioAplica) return null;
    const pie = (piePct / 100) * valorUF;
    const monto = valorUF - pie;
    const tm = tasa / 12 / 100;
    const N = plazo * 12;
    const pow = Math.pow(1 + tm, N);
    const dividendo = tm === 0 ? monto / N : monto * (tm * pow) / (pow - 1);
    return { dividendo };
  }, [subsidioAplica, valorUF, piePct, plazo, tasa]);

  return (
    <section id="simulador" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#60A5FA] text-xs font-semibold mb-5">
            <Calculator className="w-4 h-4" />
            Simulador hipotecario
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            ¿Cuánto pagarías de dividendo?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Calcula tu crédito hipotecario en tiempo real con la fórmula de cuota fija del sistema francés. Incluye subsidio DS19.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
          {/* Panel de inputs */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 space-y-7"
          >
            {/* Valor propiedad */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-white">Valor de la propiedad</label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/50">UF</span>
                  <input
                    type="number"
                    value={valorUF}
                    onChange={(e) => setValorUF(Math.max(100, Number(e.target.value)))}
                    className="w-24 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm text-right outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
              </div>
              <input type="range" min={500} max={8000} step={50} value={valorUF}
                onChange={(e) => setValorUF(Number(e.target.value))}
                className="w-full" style={{ background: `linear-gradient(to right, #2563EB ${((valorUF-500)/7500)*100}%, rgba(255,255,255,0.1) ${((valorUF-500)/7500)*100}%)` }}
              />
              <div className="flex justify-between text-xs text-white/40 mt-1">
                <span>UF 500</span><span>UF 8.000</span>
              </div>
            </div>

            {/* Pie */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-white">Pie / Pago inicial</label>
                <span className="text-[#60A5FA] font-bold text-lg">{piePct}%</span>
              </div>
              <input type="range" min={10} max={40} step={1} value={piePct}
                onChange={(e) => setPiePct(Number(e.target.value))}
                className="w-full" style={{ background: `linear-gradient(to right, #2563EB ${((piePct-10)/30)*100}%, rgba(255,255,255,0.1) ${((piePct-10)/30)*100}%)` }}
              />
              <div className="flex justify-between text-xs text-white/40 mt-1">
                <span>10%</span><span>40%</span>
              </div>
            </div>

            {/* Plazo */}
            <div>
              <label className="text-sm font-semibold text-white block mb-3">Plazo del crédito</label>
              <div className="grid grid-cols-4 gap-2">
                {PLAZO_OPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlazo(p)}
                    className={`py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      plazo === p
                        ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/30"
                        : "bg-white/8 text-white/60 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {p} años
                  </button>
                ))}
              </div>
            </div>

            {/* Tasa */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-white">Tasa de interés anual</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={tasa}
                    step={0.1}
                    min={0.1}
                    max={20}
                    onChange={(e) => setTasa(Math.max(0.1, Number(e.target.value)))}
                    className="w-20 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm text-right outline-none focus:border-[#2563EB] transition-colors"
                  />
                  <span className="text-xs text-white/50">%</span>
                </div>
              </div>
              <input type="range" min={1} max={15} step={0.1} value={tasa}
                onChange={(e) => setTasa(Number(e.target.value))}
                className="w-full" style={{ background: `linear-gradient(to right, #2563EB ${((tasa-1)/14)*100}%, rgba(255,255,255,0.1) ${((tasa-1)/14)*100}%)` }}
              />
              <div className="flex justify-between text-xs text-white/40 mt-1">
                <span>1%</span><span>15%</span>
              </div>
            </div>

            {/* Valor UF */}
            <div className="flex items-center justify-between gap-4">
              <label className="text-sm font-semibold text-white">Valor UF en CLP</label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/50">$</span>
                <input
                  type="number"
                  value={ufCLP}
                  step={100}
                  onChange={(e) => setUfCLP(Math.max(1000, Number(e.target.value)))}
                  className="w-32 px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm text-right outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
            </div>

            {/* Subsidio toggle */}
            <div className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${subsidioAplica ? "border-[#2563EB]/40 bg-[#2563EB]/10" : "border-white/10 bg-white/5"}`}>
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-[#60A5FA] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Aplicar subsidio DS19</p>
                  <p className="text-xs text-white/50 mt-0.5">Resta 0,6% a la tasa para propiedades ≤ UF 4.000</p>
                </div>
              </div>
              <button
                onClick={() => setSubsidio(!subsidio)}
                className={`relative w-11 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${subsidio ? "bg-[#2563EB]" : "bg-white/20"}`}
              >
                <motion.span
                  animate={{ x: subsidio ? 22 : 2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
                />
              </button>
            </div>
          </motion.div>

          {/* Panel de resultados */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sticky top-24 space-y-4"
          >
            {/* Dividendo principal */}
            <div className="bg-gradient-to-br from-[#2563EB] to-[#1B3A6B] rounded-3xl p-7 shadow-2xl shadow-blue-900/50">
              <p className="text-white/70 text-sm font-medium mb-1">Dividendo mensual estimado</p>
              <motion.p
                key={calc.dividendo}
                initial={{ opacity: 0.6, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="text-4xl font-bold text-white mb-1"
              >
                {fmtClp(calc.dividendo * ufCLP)}
              </motion.p>
              <p className="text-[#93C5FD] text-sm">UF {fmt(calc.dividendo)} / mes</p>

              {subsidioAplica && calcSinSubsidio && (
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 text-xs text-white/60 mb-1">
                    <span>Sin subsidio:</span>
                    <span className="line-through">{fmtClp(calcSinSubsidio.dividendo * ufCLP)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#86efac]">
                    <span>Ahorro mensual:</span>
                    <span>{fmtClp((calcSinSubsidio.dividendo - calc.dividendo) * ufCLP)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Desglose */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 space-y-4">
              {[
                { label: "Pie requerido", uf: calc.pie, clp: calc.pie * ufCLP },
                { label: "Monto del crédito", uf: calc.monto, clp: calc.monto * ufCLP },
                { label: "Total a pagar", uf: calc.totalPagar, clp: calc.totalPagar * ufCLP },
                { label: "Total en intereses", uf: calc.totalIntereses, clp: calc.totalIntereses * ufCLP },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-start">
                  <span className="text-sm text-white/60">{row.label}</span>
                  <div className="text-right">
                    <motion.p
                      key={row.uf}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-semibold text-white"
                    >
                      {fmtClp(row.clp)}
                    </motion.p>
                    <p className="text-xs text-white/40">UF {fmt(row.uf)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tasa efectiva */}
            {subsidioAplica && (
              <div className="bg-[#2563EB]/15 border border-[#2563EB]/30 rounded-2xl px-5 py-4 flex items-center gap-3">
                <Info className="w-4 h-4 text-[#60A5FA] flex-shrink-0" />
                <p className="text-xs text-white/70">
                  Subsidio aplicado. Tasa efectiva:{" "}
                  <strong className="text-[#60A5FA]">{tasaEfectiva.toFixed(2)}%</strong>{" "}
                  (original: {tasa}%)
                </p>
              </div>
            )}

            <p className="text-xs text-white/30 text-center px-4 leading-relaxed">
              Valores referenciales calculados con el sistema francés de cuota fija. No constituye una oferta de crédito. Consulta con tu banco o institución financiera.
            </p>

            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full py-4 rounded-2xl bg-white text-[#1B3A6B] font-bold text-sm hover:bg-gray-50 transition-colors shadow-xl"
            >
              Habla con un asesor
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

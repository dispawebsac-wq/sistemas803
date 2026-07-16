import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-32">

      {/* Fondo Tecnológico */}
<div className="absolute inset-0 -z-10 overflow-hidden">

  {/* Glow azul */}
  <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[140px]" />

  {/* Glow verde */}
  <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-green-500/15 blur-[120px]" />

  {/* Glow central */}
  <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

  {/* Rejilla tecnológica */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `
      linear-gradient(#2563eb 1px, transparent 1px),
      linear-gradient(90deg,#2563eb 1px,transparent 1px)
      `,
      backgroundSize: "45px 45px",
    }}
  />
</div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* Texto */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:.7}}
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
            Soluciones Tecnológicas que hacen avanzar
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">
            Tu Tecnología
            <span className="block text-blue-700">
              en las mejores manos.
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            Mantenimiento, reparación y soporte especializado para laptops,
            computadoras, impresoras y plotters.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/51933735851"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700 transition"
            >
              Solicitar Diagnóstico
              <ArrowRight size={18}/>
            </a>

            <a
              href="#servicios"
              className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-white transition"
            >
              Ver Servicios
            </a>
          </div>

          <div className="mt-10 space-y-4 text-slate-700">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600"/>
              Atención a empresas y hogares
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600"/>
              Servicio a domicilio
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600"/>
              Garantía en cada reparación
            </div>

          </div>

        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{opacity:0,scale:.9}}
          animate={{opacity:1,scale:1}}
          transition={{duration:.8}}
          className="flex justify-center"
        >
          <img
  src="/images/hero/hero-technician.webp"
  alt="Técnico especializado de Sistemas803"
  className="
w-full
max-w-3xl
rounded-3xl
shadow-[0_30px_80px_rgba(37,99,235,.25)]
transition-all
duration-500
hover:scale-[1.02]
"
/>
        </motion.div>

      </div>
    </section>
  );
}

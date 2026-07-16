import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import TechBackground from "../ui/TechBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-32">
      {/* Fondo tecnológico */}
      <TechBackground />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* ================= TEXTO ================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700 shadow-sm">
            Soluciones Tecnológicas que hacen avanzar
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
            Tu Tecnología

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-blue-700
                via-cyan-500
                to-green-500
                bg-clip-text
                text-transparent
              "
            >
              en las mejores manos.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            Mantenimiento, reparación y soporte especializado para laptops,
            computadoras, impresoras, plotters y soluciones tecnológicas para
            empresas y hogares.
          </p>

          {/* Botones */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/51933735851"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-green-500
                to-green-600
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-green-500/30
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Solicitar Diagnóstico

              <ArrowRight size={18} />
            </a>

            <a
              href="#servicios"
              className="
                rounded-2xl
                border
                border-slate-300
                bg-white/70
                backdrop-blur-md
                px-8
                py-4
                font-semibold
                transition-all
                duration-300
                hover:bg-white
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Ver Servicios
            </a>

          </div>

          {/* Beneficios */}

          <div className="mt-12 space-y-5 text-slate-700">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              Atención a empresas y hogares
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              Servicio técnico a domicilio
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              Garantía en cada reparación
            </div>

          </div>

        </motion.div>

        {/* ================= IMAGEN ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/40
              bg-white/20
              p-4
              backdrop-blur-xl
              shadow-[0_40px_120px_rgba(37,99,235,.25)]
            "
          >

            {/* Reflejo sutil */}

            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-green-400/10" />

            <img
              src="/images/hero/hero-technician.webp"
              alt="Técnico especializado de Sistemas803"
              className="
                relative
                w-full
                max-w-2xl
                rounded-[28px]
              "
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

import {
  Laptop,
  Monitor,
  Printer,
  ScanLine,
  Globe,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    icon: Laptop,
    title: "Laptops",
    text: "Reparación de hardware, cambio de pantalla, teclado, batería, limpieza y optimización.",
  },
  {
    icon: Monitor,
    title: "Computadoras",
    text: "Diagnóstico, mantenimiento, actualización de componentes y ensamblaje.",
  },
  {
    icon: Printer,
    title: "Impresoras",
    text: "HP, Epson, Canon, Brother. Reparación, limpieza y mantenimiento.",
  },
  {
    icon: ScanLine,
    title: "Plotters",
    text: "Calibración, mantenimiento y reparación de plotters de gran formato.",
  },
  {
    icon: Globe,
    title: "Diseño Web",
    text: "Sitios modernos, rápidos, optimizados para Google y móviles.",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad",
    text: "Protección de equipos, redes, respaldo y recuperación de información.",
  },
];

export default function Services() {
  return (
    <section
id="servicios"
className="relative overflow-hidden py-28"
>
    {/* Fondo */}
<div className="absolute inset-0 -z-10">

  <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

  <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[120px]" />

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
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            Servicios
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Todo lo que tu tecnología necesita
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg">
            Soluciones profesionales para empresas y hogares.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                className="
                rounded-3xl
                bg-white
                p-8
                shadow-lg
                border
                border-slate-100
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-300
                "
              >
                <div
  className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
    bg-gradient-to-br
    from-blue-500/5
    via-transparent
    to-green-500/10
    pointer-events-none
  "
/>

                <div className="mb-8">

  <div
    className="
      flex
      h-20
      w-20
      items-center
      justify-center
      rounded-3xl
      bg-gradient-to-br
      from-blue-600
      via-blue-500
      to-green-500
      shadow-[0_20px_50px_rgba(37,99,235,.35)]
      transition-all
      duration-500
      group-hover:scale-110
      group-hover:rotate-6
    "
  >
    <Icon
      size={36}
      className="text-white"
      strokeWidth={2.2}
    />
  </div>

</div>

                <h3 className="mt-6 text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 text-slate-600 leading-8">

                  {item.text}

                </p>
                <a
  href="#"
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    font-semibold
    text-blue-700
    transition-all
    duration-300
    group-hover:gap-4
  "
>
  Conocer más →
</a>

              </motion.div>

            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos R.",
    company: "Empresa Comercial",
    text: "Repararon nuestra impresora Epson en menos de 24 horas. Excelente servicio.",
  },
  {
    name: "María G.",
    company: "Cliente Particular",
    text: "Mi laptop quedó como nueva. Muy profesionales y transparentes.",
  },
  {
    name: "Luis P.",
    company: "Arquitecto",
    text: "Mantenimiento completo de mi plotter. Recomendados al 100%.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            Testimonios
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Lo que dicen nuestros clientes
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            La confianza de nuestros clientes respalda cada reparación.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition"
            >

              <div className="flex gap-1 text-yellow-400">

                <Star fill="currentColor" size={20}/>
                <Star fill="currentColor" size={20}/>
                <Star fill="currentColor" size={20}/>
                <Star fill="currentColor" size={20}/>
                <Star fill="currentColor" size={20}/>

              </div>

              <p className="mt-6 text-slate-600 leading-8">
                "{item.text}"
              </p>

              <div className="mt-8">

                <h4 className="font-bold text-lg">
                  {item.name}
                </h4>

                <p className="text-slate-500">
                  {item.company}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
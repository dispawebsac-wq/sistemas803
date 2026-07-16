import { motion } from "framer-motion";

const stats = [
  {
    number: "+5",
    title: "Años de experiencia",
  },
  {
    number: "+5000",
    title: "Equipos reparados",
  },
  {
    number: "98%",
    title: "Clientes satisfechos",
  },
  {
    number: "24h",
    title: "Diagnóstico rápido",
  },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-green-600 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center text-white"
            >

              <h2 className="text-6xl font-black">

                {item.number}

              </h2>

              <p className="mt-3 text-xl opacity-90">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
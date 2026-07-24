import {
  ShieldCheck,
  Clock3,
  Wrench,
  Truck,
  BadgeCheck,
  Laptop,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Garantía escrita",
    text: "Todas nuestras reparaciones cuentan con garantía.",
  },
  {
    icon: BadgeCheck,
    title: "Técnicos especializados",
    text: "Experiencia en equipos empresariales y domésticos.",
  },
  {
    icon: Wrench,
    title: "Repuestos de calidad",
    text: "Utilizamos componentes confiables para mayor duración.",
  },
  {
    icon: Truck,
    title: "Servicio a domicilio",
    text: "Atención en oficina o domicilio dentro de Trujillo.",
  },
  {
    icon: Clock3,
    title: "Respuesta rápida",
    text: "Diagnóstico y atención en el menor tiempo posible.",
  },
  {
    icon: Laptop,
    title: "Soporte integral",
    text: "Hardware, software y redes en un solo lugar.",
  },
];



export default function WhyUs() {
  return (
    <section id="nosotros"
     className="py-28 bg-slate-900 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-600 px-5 py-2 font-semibold">
            ¿Por qué elegirnos?
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Somos tu aliado tecnológico
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Nuestro objetivo es mantener tus equipos funcionando con el máximo
            rendimiento y brindarte una atención rápida y confiable.
          </p>
          <div className="mt-16 grid grid-cols-2 gap-6 text-center md:grid-cols-4">

  <div>
    <h3 className="text-5xl font-black text-green-400">5+</h3>
    <p className="mt-2 text-slate-300">Años de experiencia</p>
  </div>

  <div>
    <h3 className="text-5xl font-black text-green-400">500+</h3>
    <p className="mt-2 text-slate-300">Equipos reparados</p>
  </div>

  <div>
    <h3 className="text-5xl font-black text-green-400">98%</h3>
    <p className="mt-2 text-slate-300">Clientes satisfechos</p>
  </div>

  <div>
    <h3 className="text-5xl font-black text-green-400">24h</h3>
    <p className="mt-2 text-slate-300">Tiempo de respuesta</p>
  </div>

</div>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition hover:border-blue-500 hover:bg-slate-700"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-green-500">

                  <Icon className="text-white" size={30} />

                </div>

                <h3 className="text-xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-300">

                  {item.text}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
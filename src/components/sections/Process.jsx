import {
  MessageCircle,
  Search,
  Wrench,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contáctanos",
    text: "Escríbenos por WhatsApp o llámanos para contarnos el problema.",
  },
  {
    number: "02",
    icon: Search,
    title: "Diagnóstico",
    text: "Realizamos una evaluación profesional del equipo.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Reparación",
    text: "Reparamos utilizando herramientas y repuestos de calidad.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Entrega",
    text: "Probamos el equipo y lo entregamos completamente operativo.",
  },
];

export default function Process() {
  return (
    <section className="py-28 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Nuestro proceso
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Así trabajamos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Un proceso claro, transparente y pensado para que tengas la mejor experiencia.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {

            const Icon = step.icon;

            return (

              <div
                key={step.number}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-green-500 text-white">
                  <Icon size={30} />
                </div>

                <span className="text-sm font-bold text-blue-600">
                  PASO {step.number}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.text}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
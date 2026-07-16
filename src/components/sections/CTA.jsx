import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-green-600">

      <div className="max-w-6xl mx-auto text-center px-6 text-white">

        <h2 className="text-5xl font-black">
          ¿Tu equipo presenta fallas?
        </h2>

        <p className="mt-8 text-xl opacity-90">
          Solicita un diagnóstico profesional y recupera tu equipo con garantía.
        </p>

        <a
          href="https://wa.me/51933735851"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 mt-10 bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
        >
          <MessageCircle />
          Hablar por WhatsApp
        </a>

      </div>

    </section>
  );
}
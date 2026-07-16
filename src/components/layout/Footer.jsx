import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Empresa */}
          <div>
            <img
            src="/images/branding/logofoot.webp"
            alt="Sistemas803"
            className="h-12 w-auto"
          />

          <h2 className="text font-black">
              Soluciones<span className="text-green-400">Tecnológicas</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Especialistas en mantenimiento, reparación y soporte de laptops,
              computadoras, impresoras, plotters y soluciones tecnológicas para
              empresas y hogares.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold">
              Contacto
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+51 933 735 851</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>jose.salazar@sistemas803.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Trujillo - Perú</span>
              </div>

            </div>
          </div>

          {/* Horario */}
          <div>

            <h3 className="text-xl font-bold">
              Horario
            </h3>

            <div className="mt-6 flex items-start gap-3">

              <Clock size={18} />

              <div>
                <p>Lunes - Sábado</p>
                <p>8:00 am - 7:00 pm</p>
              </div>

            </div>

          </div>

          {/* Redes */}
          <div>

            <h3 className="text-xl font-bold">
              Síguenos
            </h3>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-500"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://wa.me/51933735851"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-600 p-3 transition hover:bg-green-700"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-slate-500">

          © {new Date().getFullYear()} Sistemas803 · Todos los derechos reservados.

        </div>

      </div>
    </footer>
  );
}
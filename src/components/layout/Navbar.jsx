import { Menu, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-700 to-green-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
            8
          </div>

          <div>
            <h1 className="text-2xl font-black">
              Sistemas
              <span className="text-green-600">803</span>
            </h1>

            <p className="text-xs text-slate-500">
              Soluciones Tecnológicas
            </p>
          </div>

        </div>

        {/* Menú */}
        <nav className="hidden lg:flex gap-8 text-slate-700 font-medium">
          <a href="#">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/51933735851"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          <Phone size={18}/>
          Contáctanos
        </a>

        <button className="lg:hidden">
          <Menu />
        </button>

      </div>
    </header>
  );
}
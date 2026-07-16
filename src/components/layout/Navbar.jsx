import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Proceso", href: "#proceso" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a href="#" className="flex items-center gap-3">

          <img
            src="/images/branding/logo.webp"
            alt="Sistemas803"
            className="h-12 w-auto"
          />
          <div className="hidden md:block">

            <h2 className="text-xl font-black text-slate-900">
              Soluciones
              <span className="text-blue-700">Tecnológicas</span>
            </h2>

          </div>

         
        </a>

        {/* Menú Desktop */}

        <nav className="hidden gap-8 lg:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-slate-700 transition hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}

        </nav>

        {/* Botón */}

        <a
          href="https://wa.me/51933735851"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
        >
          WhatsApp

          <ArrowRight size={18} />
        </a>

        {/* Botón móvil */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Menú móvil */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t bg-white lg:hidden"
          >

            <div className="flex flex-col p-6">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 font-medium text-slate-700"
                >
                  {link.name}
                </a>

              ))}

              <a
                href="https://wa.me/51933735851"
                className="mt-6 rounded-xl bg-green-600 py-3 text-center font-semibold text-white"
              >
                Contactar por WhatsApp
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}
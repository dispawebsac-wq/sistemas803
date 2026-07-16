const brands = [
  "HP",
  "EPSON",
  "CANON",
  "BROTHER",
  "DELL",
  "LENOVO",
  "SAMSUNG",
  "ACER",
];

export default function Brands() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Marcas
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Trabajamos con las principales marcas
          </h2>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

          {brands.map((brand) => (

            <div
              key={brand}
              className="
                flex
                h-28
                items-center
                justify-center
                rounded-3xl
                bg-white
                text-2xl
                font-black
                text-slate-400
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:text-blue-700
                hover:shadow-xl
              "
            >
              {brand}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
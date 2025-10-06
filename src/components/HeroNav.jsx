"use client";

export default function DentalHero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            DentalCare<span className="text-teal-600">+</span>
          </div>
          <ul className="hidden md:flex gap-12 items-center">
            <li>
              <a href="#servicios" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Servicios
              </a>
            </li>
            <li>
              <a href="#equipo" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Especialistas
              </a>
            </li>
            <li>
              <a href="#testimonios" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#contacto" className="px-6 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all font-medium">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-[fadeInUp_0.8s_ease-out]">
            <div className="inline-block">
              <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase bg-teal-50 px-4 py-2 rounded-full">
                Excelencia en Odontología
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Cuidado dental de
              <span className="block text-teal-600 mt-2">clase mundial</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Combinamos tecnología avanzada con un equipo de especialistas certificados 
              para ofrecerte tratamientos dentales personalizados y resultados excepcionales.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#agendar" 
                className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all font-semibold shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30 hover:-translate-y-0.5"
              >
                Agendar Consulta
              </a>
              <a 
                href="#servicios" 
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-all font-semibold"
              >
                Ver Servicios
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600 mt-1">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">12K+</div>
                <div className="text-sm text-gray-600 mt-1">Pacientes atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dwgawgfvb/image/upload/v1759788995/ChatGPT_Image_6_oct_2025_05_16_28_p.m._c6fy7i.png"
                  alt="Dentista profesional en clínica moderna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}
"use client";

export default function DentalServices() {
  const services = [
    {
      title: "Ortodoncia",
      description: "Alineadores invisibles y brackets de última generación para una sonrisa perfecta",
      price: "Desde $2,500",
      color: "teal",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "Implantes Dentales",
      description: "Soluciones permanentes con tecnología 3D para reemplazar piezas dentales",
      price: "Desde $1,800",
      color: "blue",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Estética Dental",
      description: "Blanqueamiento, carillas y diseño de sonrisa personalizado",
      price: "Desde $800",
      color: "purple",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Endodoncia",
      description: "Tratamientos de conducto con tecnología microscópica avanzada",
      price: "Desde $600",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Periodoncia",
      description: "Cuidado especializado de encías y prevención de enfermedades periodontales",
      price: "Desde $450",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Odontopediatría",
      description: "Atención dental especializada para niños en un ambiente amigable",
      price: "Desde $300",
      color: "pink",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="servicios" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase bg-teal-50 px-4 py-2 rounded-full">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tratamientos completos para
            <span className="block text-teal-600 mt-2">tu salud dental</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ofrecemos una amplia gama de servicios odontológicos con tecnología de vanguardia 
            y un equipo de especialistas certificados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Image Area - Large */}
              <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Imagen del servicio</div>
                </div>
                {/* Decorative gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Price */}
                <div className="mb-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-medium">Precio</span>
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  </div>
                </div>
                
                {/* CTA Link */}
                <a
                  href={`#${service.title.toLowerCase()}`}
                  className="inline-flex items-center text-teal-600 font-semibold group-hover:gap-2 transition-all"
                >
                  Más información
                  <svg
                    className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full`}></div>
              </div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
}
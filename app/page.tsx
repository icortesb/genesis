"use client"

import { Menu, X, MapPin, Compass, Mountain, MapPinIcon, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">GENESIS</h1>
              <p className="text-xs text-secondary font-medium">Creadores de Felicidad</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#experiencias" className="text-sm font-medium hover:text-primary transition">
                Experiencias
              </a>
              <a href="#hospedajes" className="text-sm font-medium hover:text-primary transition">
                Hospedajes
              </a>
              <a href="#contacto" className="text-sm font-medium hover:text-primary transition">
                Contacto
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">
                Reservar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-muted pt-4">
              <a href="#experiencias" className="block py-2 text-sm font-medium hover:text-primary">
                Experiencias
              </a>
              <a href="#hospedajes" className="block py-2 text-sm font-medium hover:text-primary">
                Hospedajes
              </a>
              <a href="#contacto" className="block py-2 text-sm font-medium hover:text-primary">
                Contacto
              </a>
              <button className="w-full mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
                Reservar
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Title Section */}
      <section className="py-16 text-center bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">Descubrí Mendoza a tu manera</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hospedajes únicos, traslados cómodos y experiencias inolvidables en el corazón de los Andes
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-200">
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition flex items-center justify-center gap-2">
              <Compass size={20} /> Explorar Experiencias
            </button>
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:opacity-90 transition">
              Reservar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nuestros Servicios</h3>
            <p className="text-lg text-muted-foreground">Servicios integrales para tu viaje completo en Mendoza</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Experiencias */}
            <div className="bg-background/50 rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="text-secondary" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">Experiencias Turísticas</h4>
              <p className="text-muted-foreground">
                Actividades personalizadas de aventura en la naturaleza mendocina. Parapente, rafting, kayak y más.
              </p>
            </div>

            {/* Alojamiento */}
            <div className="bg-background/50 rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-secondary" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">Alojamiento</h4>
              <p className="text-muted-foreground">
                Hospedajes seleccionados en ubicaciones estratégicas: casas, departamentos y cabañas eco-amigables.
              </p>
            </div>

            {/* Traslados */}
            <div className="bg-background/50 rounded-2xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="text-secondary" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">Traslados</h4>
              <p className="text-muted-foreground">
                Vehículos autorizados: coches, 4x4, trafic, minibús. Conductores profesionales para tu comodidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section id="experiencias" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">Experiencias Destacadas</h3>
            <p className="text-lg text-muted-foreground">Aventuras inolvidables en el corazón de los Andes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Parapente */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden bg-gray-200"></div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-primary mb-3">Parapente - Vuelo en Tándem</h4>
                <p className="text-muted-foreground mb-4">
                  Vuelo inolvidable sobre el pedemonte mendocino con vistas espectaculares de la Cordillera de los
                  Andes.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium">📍 Despegue: Cerro Arco (subida en 4x4)</p>
                  <p className="text-sm font-medium">✈️ Vuelo Clásico: 15-20 min. - $120.000</p>
                  <p className="text-sm font-medium">✈️ Vuelo Extendido: 40-45 min. - $180.000</p>
                  <p className="text-sm font-medium">⛰️ Hike and Fly: $190.000</p>
                </div>
                <p className="text-xs text-accent italic mb-4">
                  "No estás pagando por un vuelo… estás invirtiendo en una historia que vas a contar toda tu vida"
                </p>
                <p className="text-xs text-muted-foreground">
                  Incluye: Pilotos certificados (15+ años), fotos/video HD, traslado ida y vuelta, vino de cortesía y
                  certificado.
                </p>
              </div>
            </div>

            {/* Rafting */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden bg-gray-200"></div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-primary mb-3">Rafting - Río Mendoza</h4>
                <p className="text-muted-foreground mb-4">
                  Descenso deportivo en el Río Mendoza. Dificultad Clase II-III+ (Media/Alta, máxima en verano).
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium">⏱️ Duración: 2 horas total (1 hora navegación)</p>
                  <p className="text-sm font-medium">💧 Tarifa: $54.000 por persona</p>
                </div>
                <div className="mb-4 text-xs text-muted-foreground">
                  <p className="font-semibold mb-2">Incluye:</p>
                  <ul className="space-y-1">
                    <li>• Equipo completo (traje, chaqueta, calzado neoprene, casco, chaleco)</li>
                    <li>• Guía profesional bilingüe</li>
                    <li>• Seguro contra accidentes personales</li>
                    <li>• Base con duchas, lockers, cambiadores</li>
                  </ul>
                </div>
                <p className="text-xs text-muted-foreground">Nota: Alquiler de toallones $1.500</p>
              </div>
            </div>

            {/* Kayak */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden bg-gray-200"></div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-primary mb-3">Kayak - Dique Potrerillos</h4>
                <p className="text-muted-foreground mb-4">
                  Actividad acuática placentera en el lago. Experiencia relajante rodeada de montañas.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium">⏱️ Duración: 2 horas</p>
                  <p className="text-sm font-medium">🚣 Tarifa: $54.000 por persona</p>
                </div>
                <div className="mb-4 text-xs text-muted-foreground">
                  <p className="font-semibold mb-2">Incluye:</p>
                  <ul className="space-y-1">
                    <li>• Equipo completo</li>
                    <li>• Traslado al perilago</li>
                    <li>• Guía profesional</li>
                  </ul>
                </div>
                <p className="text-xs text-accent italic">Ideal para familias y grupos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="hospedajes" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">Alojamiento Destacado</h3>
            <p className="text-lg text-muted-foreground">Hospedaje premium en Mendoza para tu descanso</p>
          </div>

          <div className="mb-12">
            {/* Casa Luján de Cuyo */}
            <div className="bg-background/50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition grid md:grid-cols-2 gap-0">
              {/* Image on left */}
              <div className="relative h-80 md:h-auto overflow-hidden bg-gray-200"></div>

              {/* Content on right */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <MapPinIcon className="text-primary" size={20} />
                  <h4 className="text-2xl font-bold text-primary">Casa en Luján de Cuyo</h4>
                </div>
                <p className="text-sm text-secondary font-medium mb-6">Mayor Drummond • Hasta 7 personas</p>

                <div className="mb-6">
                  <p className="font-semibold text-primary mb-4">Comodidades y Servicios:</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0" />3 habitaciones (2 dobles,
                      3 simples) y 2 baños completos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0" />
                      Cocina equipada, living comedor amplio
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0" />
                      Jardín amplio con pileta
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0" />
                      Quincho techado con churrasquera y baño
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0" />
                      Estacionamiento para 2 vehículos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0" />
                      Wi-Fi y vigilancia 24 horas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-1 flex-shrink-0" />
                      Incluye blancos (ropa de cama y toallas)
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Ubicación tranquila y arbolada, cerca de bodegas y atractivos turísticos.
                </p>

                <button className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition">
                  Consultar Disponibilidad
                </button>
              </div>
            </div>
          </div>

          {/* Additional options info */}
          <div className="p-8 bg-background/50 rounded-2xl">
            <h4 className="text-xl font-bold text-primary mb-4">También ofrecemos alojamientos en:</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-primary mb-1">Luján de Cuyo</p>
                <p className="text-sm text-muted-foreground">Casas, hosterías y departamentos</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">Ciudad de Mendoza</p>
                <p className="text-sm text-muted-foreground">Casas, departamentos, hostels y hoteles</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">Tunuyán</p>
                <p className="text-sm text-muted-foreground">Eco cabañas en el Manzano Histórico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contacto" className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">Planificá tu viaje</h3>
            <p className="text-lg text-muted-foreground">
              Completa el formulario y nos pondremos en contacto para diseñar tu experiencia
            </p>
          </div>

          <form className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Nombre"
                className="px-4 py-3 bg-background rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 bg-background rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-6">
              <select className="w-full px-4 py-3 bg-background rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Selecciona una experiencia</option>
                <option>Parapente</option>
                <option>Rafting</option>
                <option>Kayak</option>
                <option>Consulta General</option>
              </select>
            </div>

            <div className="mb-6">
              <textarea
                placeholder="Cuéntanos sobre tu viaje soñado..."
                rows={4}
                className="w-full px-4 py-3 bg-background rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <button className="w-full py-4 bg-primary text-white rounded-lg font-bold text-lg hover:opacity-90 transition flex items-center justify-center gap-2">
              Enviar Consulta <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h5 className="text-2xl font-bold mb-2">GENESIS</h5>
              <p className="text-sm text-primary-foreground/80 mb-2">Creadores de Felicidad</p>
              <p className="text-sm text-primary-foreground/70">
                Experiencias turísticas personalizadas en Mendoza • Más de 10 años de experiencia
              </p>
            </div>

            {/* Contact & Social */}
            <div>
              <h6 className="font-semibold mb-4">Contacto</h6>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>WhatsApp</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/80 text-center">
            <p>© 2025 GENESIS - Creadores de Felicidad. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

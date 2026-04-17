import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80"
            alt="Textura de cuaderno de piel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide drop-shadow-md">
            SIAMES
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl font-light tracking-wide text-background/90 drop-shadow">
            El arte de escribir a mano. Cuadernos artesanales de calidad premium diseñados en la Ciudad de México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/catalogo" 
              className="px-8 py-3 bg-background text-foreground hover:bg-muted hover:text-foreground transition-all duration-300 font-medium tracking-wider uppercase text-sm border border-transparent"
            >
              Ver Catálogo
            </Link>
            <Link 
              href="/quienes-somos" 
              className="px-8 py-3 bg-transparent text-background border border-background hover:bg-background/10 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
            >
              Nuestra Historia
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">El tacto perfecto</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En Siames creemos que cada idea merece un lugar especial. Utilizamos materiales de primera calidad y texturas que invitan a plasmar tus pensamientos. Nuestra encuadernación artesanal asegura que tu cuaderno te acompañe durante toda la vida.
            </p>
            <Link 
              href="/quienes-somos" 
              className="inline-flex items-center text-accent hover:text-foreground transition-colors font-medium relative group"
            >
              Conoce nuestro proceso
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-square relative bg-muted flex items-center justify-center p-8 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&q=80" 
              alt="Cuaderno abierto" 
              className="object-cover w-full h-full shadow-xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-foreground text-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <span className="font-serif text-4xl mb-4 italic text-accent">I.</span>
              <h3 className="font-serif text-xl mb-3 uppercase tracking-wider">Artesanía</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                Cosidos a mano con atención impecable a cada detalle en nuestro taller de la Ciudad de México.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-4xl mb-4 italic text-accent">II.</span>
              <h3 className="font-serif text-xl mb-3 uppercase tracking-wider">Durabilidad</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                Papeles libres de ácido y cubiertas resistentes para proteger tus historias eternamente.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-4xl mb-4 italic text-accent">III.</span>
              <h3 className="font-serif text-xl mb-3 uppercase tracking-wider">Minimalismo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                Un lienzo en blanco y elegante. Sin distracciones, solo tú y tus pensamientos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

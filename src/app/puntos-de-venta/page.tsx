export default function PuntosDeVenta() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow flex flex-col">
      <h1 className="font-serif text-5xl mb-6 text-center">Puntos de Venta</h1>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Encuentra los cuadernos Siames en nuestras tiendas aliadas en la Ciudad de México y descubre su textura en persona.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow">
        <div className="space-y-8">
          <div className="p-8 border border-muted bg-white/50">
            <h2 className="font-serif text-2xl mb-2">Librería El Péndulo</h2>
            <p className="text-muted-foreground mb-4">Av. Alvaro Obregón 86, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX</p>
            <p className="text-sm font-medium">Lunes a Domingo: 9:00 - 21:00</p>
          </div>
          
          <div className="p-8 border border-muted bg-white/50">
            <h2 className="font-serif text-2xl mb-2">Casa Bosques</h2>
            <p className="text-muted-foreground mb-4">Córdoba 25, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX</p>
            <p className="text-sm font-medium">Martes a Domingo: 11:00 - 19:00</p>
          </div>
        </div>

        <div className="bg-muted min-h-[400px] lg:min-h-full border border-muted w-full relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120462.86241315535!2d-99.25555416045624!3d19.34969242965612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
            className="absolute top-0 left-0 w-full h-full grayscale opacity-80 mix-blend-multiply hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

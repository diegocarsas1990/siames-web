export default function QuienesSomos() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex-grow flex flex-col items-center">
      <h1 className="font-serif text-5xl mb-12 text-center">¿Quiénes somos?</h1>
      
      <div className="w-full aspect-video bg-muted mb-16 relative overflow-hidden">
        <img 
          src="/imagenes/art-collection.jpg" 
          alt="Taller de encuadernación" 
          className="w-full h-full object-cover grayscale opacity-90"
        />
      </div>

      <div className="prose prose-lg text-muted-foreground prose-headings:font-serif prose-headings:text-foreground prose-p:leading-relaxed">
        <p>
          siamés empezó como dos cuadernos en uno: dos tipos de papel en un solo lomo. Una mitad para bocetar y la otra para el trabajo final.
        </p>
        <p>
          siamés nació del problema de cargar siempre el cuaderno con papel equivocado, ¿dónde hacer bocetos feos si sólo llevas el papel bonito?
        </p>
        <p>
          Diseñado para artistas, ilustradores, dibujantes, cualquiera que lidia con que el boceto y el resultado final no son lo mismo, y a veces no se hacen en el mismo papel.
        </p>
        <p>
          siamés quiere crecer hacia todo lo que hace falta para tener una práctica creativa bien equipada: cuadernos, herramientas, mobiliario, espacios. Con la convicción de que los objetos con los que trabajas todos los días importan.
        </p>

        <div className="my-16 py-8 border-y border-muted text-center">
          <span className="block uppercase tracking-widest text-xs font-semibold text-foreground/50 mb-4">El fundador</span>
          <p className="italic font-serif text-xl text-foreground">
            Jaque Jours
          </p>
        </div>
      </div>
    </div>
  );
}

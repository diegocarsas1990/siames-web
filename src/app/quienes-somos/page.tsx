export default function QuienesSomos() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex-grow flex flex-col items-center">
      <h1 className="font-serif text-5xl mb-12 text-center">Nuestra Historia</h1>
      
      <div className="w-full aspect-video bg-muted mb-16 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&q=80" 
          alt="Taller de encuadernación" 
          className="w-full h-full object-cover grayscale opacity-90"
        />
      </div>

      <div className="prose prose-lg text-muted-foreground prose-headings:font-serif prose-headings:text-foreground prose-p:leading-relaxed">
        <p className="lead text-2xl text-foreground font-serif italic mb-10 text-center">
          "Siames nació de la necesidad de devolver la tangibilidad a nuestras ideas en un mundo hiperdigitalizado."
        </p>

        <p>
          En el corazón de la Ciudad de México, nuestro taller artesanal se dedica a la creación de cuadernos que invitan al pensamiento pausado y a la creatividad sin interrupciones. Fundada con la convicción de que el medio influye en el mensaje, Siames ofrece herramientas analógicas para mentes contemporáneas.
        </p>

        <h3 className="text-2xl mt-12 mb-6">El Proceso Artesanal</h3>
        
        <p>
          Cada cuaderno Siames es resultado de un proceso minucioso. Seleccionamos papeles europeos de la más alta exigencia, libres de ácido para garantizar la permanencia de la tinta. El cosido se realiza a mano, permitiendo una apertura total de 180 grados, ideal para escribir o dibujar sin la resistencia del lomo.
        </p>

        <p>
          Nuestras cubiertas, texturizadas y resistentes, están diseñadas para envejecer con gracia, acumulando la pátina de tus viajes y experiencias.
        </p>

        <div className="my-16 py-8 border-y border-muted text-center">
          <span className="block uppercase tracking-widest text-xs font-semibold text-foreground/50 mb-4">El Fundador</span>
          <p className="italic font-serif text-xl text-foreground">
            Diego
          </p>
        </div>
      </div>
    </div>
  );
}

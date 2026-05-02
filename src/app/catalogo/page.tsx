export default function Catalogo() {
  const products = [
    {
      size: "Bombay",
      description: "Compacto y resistente, hecho para acompañarte a todos lados y capturar tus ideas en movimiento.",
      image: "/imagenes/bombay.png",
    },
    {
      size: "Bendalí",
      description: "El equilibrio perfecto para dibujo y escritura libre con espacio intermedio ideal.",
      image: "/imagenes/bendali.png",
    },
    {
      size: "Bafilmés",
      description: "El formato clásico para tu estudio, listo para que desarrolles aquellos bocetos con calma.",
      image: "/imagenes/bafilmes.png",
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl mb-6">Catálogo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Diseño atemporal. Cuero de calidad premium. Descubre el cuaderno perfecto para acompañarte.
        </p>
      </div>

      <div className="space-y-12">
        {products.map((product, idx) => (
          <div key={product.size} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
            <div className="w-full md:w-1/2 aspect-[4/3] bg-[#FDFBF7] relative overflow-hidden flex items-center justify-center p-12 lg:p-16">
              <img 
                src={product.image} 
                alt={product.size}
                className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105 drop-shadow-md"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8">
              <h2 className="font-serif text-3xl mb-4">{product.size}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 border-t border-muted pt-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl mb-4">Anatomía del cuaderno</h2>
          <p className="text-muted-foreground">Así construimos tus ideas por dentro y por fuera.</p>
        </div>
        <div className="w-full relative overflow-hidden flex justify-center bg-[#FDFBF7] p-6 md:p-12">
          <img 
            src="/imagenes/anatomia.jpg" 
            alt="Anatomía del cuaderno" 
            className="w-full max-w-4xl h-auto object-contain mix-blend-multiply"
          />
        </div>
      </div>

    </div>
  );
}

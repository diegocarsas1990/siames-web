export default function Catalogo() {
  const products = [
    {
      size: "bombay",
      description: "compacto y resistente, hecho para acompañarte a todos lados y capturar tus ideas en movimiento.",
      image: "/imagenes/bombay.png",
      colors: ["terracota", "tabaco", "negro"]
    },
    {
      size: "bendalí",
      description: "el equilibrio perfecto para dibujo y escritura libre con espacio intermedio ideal.",
      image: "/imagenes/bendali.png",
      colors: ["terracota", "tabaco", "negro"]
    },
    {
      size: "bafilmés",
      description: "el formato clásico para tu estudio, listo para que desarrolles aquellos bocetos con calma.",
      image: "/imagenes/bafilmes.png",
      colors: ["terracota", "tabaco", "negro"]
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow">
      <div className="text-center mb-20">
        <h1 className="font-serif text-5xl mb-6">catálogo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          diseño atemporal. tres colores en cuero de calidad premium. descubre el cuaderno perfecto para acompañarte.
        </p>
      </div>

      <div className="space-y-32">
        {products.map((product, idx) => (
          <div key={product.size} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            <div className="w-full md:w-1/2 aspect-[4/5] bg-muted relative overflow-hidden flex items-center justify-center p-4">
              <img 
                src={product.image} 
                alt={product.size}
                className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105 drop-shadow-md"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="font-serif text-4xl mb-6">{product.size}</h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-4">
                <span className="tracking-widest text-xs font-semibold text-foreground/50 border-b border-muted pb-2 block w-full">colores disponibles</span>
                <div className="flex gap-6 mt-4">
                  {product.colors.map(color => (
                    <div key={color} className="flex flex-col items-center gap-2">
                      <div className={`w-8 h-8 rounded-full border border-foreground/10 ${
                        color === 'terracota' ? 'bg-[#b85c38]' : 
                        color === 'tabaco' ? 'bg-[#5e4b3c]' : 
                        'bg-[#1a1a1a]'
                      }`}></div>
                      <span className="text-xs text-muted-foreground tracking-wider">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 border-t border-muted pt-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl mb-4">anatomía del cuaderno</h2>
          <p className="text-muted-foreground">así construimos tus ideas por dentro y por fuera.</p>
        </div>
        <div className="w-full relative overflow-hidden flex justify-center bg-white/50 p-6 md:p-12">
          <img 
            src="/imagenes/anatomia.jpg" 
            alt="anatomía del cuaderno" 
            className="w-full max-w-4xl h-auto object-contain mix-blend-multiply"
          />
        </div>
      </div>

    </div>
  );
}

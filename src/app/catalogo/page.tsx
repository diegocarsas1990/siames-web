import Image from "next/image";

export default function Catalogo() {
  const products = [
    {
      size: "Formato A5",
      description: "El tamaño ideal para escritores y artistas. 14.8 x 21 cm.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80",
      colors: ["Terracota", "Tabaco", "Negro"]
    },
    {
      size: "Formato Pocket",
      description: "Un compañero de viaje indispensable. 9 x 14 cm.",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850d0eb?auto=format&fit=crop&q=80",
      colors: ["Terracota", "Tabaco", "Negro"]
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow">
      <div className="text-center mb-20">
        <h1 className="font-serif text-5xl mb-6">Catálogo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dos tamaños cuidadosamente proporcinados. Tres colores atemporales. Descubre el cuaderno perfecto para acompañarte.
        </p>
      </div>

      <div className="space-y-32">
        {products.map((product, idx) => (
          <div key={product.size} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            <div className="w-full md:w-1/2 aspect-[4/5] bg-muted relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.size}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="font-serif text-4xl mb-6">{product.size}</h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-4">
                <span className="uppercase tracking-widest text-xs font-semibold text-foreground/50 border-b border-muted pb-2 block w-full">Colores Disponibles</span>
                <div className="flex gap-6 mt-4">
                  {product.colors.map(color => (
                    <div key={color} className="flex flex-col items-center gap-2">
                      <div className={`w-8 h-8 rounded-full border border-foreground/10 ${
                        color === 'Terracota' ? 'bg-[#b85c38]' : 
                        color === 'Tabaco' ? 'bg-[#5e4b3c]' : 
                        'bg-[#1a1a1a]'
                      }`}></div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { FiInstagram as Instagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-2xl tracking-widest mb-2">SIAMES</span>
          <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
            Cuadernos artesanales hechos en México con papel premium. Minimalismo y textura para tus ideas.
          </p>
        </div>

        <div className="flex space-x-6">
          <Link href="/contacto" className="text-muted-foreground hover:text-white transition-colors text-sm">
            Contacto
          </Link>
          <a
            href="https://www.instagram.com/siamesbooks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <span className="sr-only">Instagram</span>
            <Instagram className="h-5 w-5" />
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-muted/20 text-center">
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Siames. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

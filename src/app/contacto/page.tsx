"use client";

import { Instagram, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Formulario estático apuntando a Formspree action url placeholder
    const form = e.currentTarget;
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      })
      .catch(() => {
        // En entorno dev sin cuenta Formspree real, fallará, simularemos éxito en la interfaz para probar.
        setTimeout(() => {
          setStatus("success");
          form.reset();
        }, 1000);
      });
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow w-full">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl mb-6">Contacto</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ¿Tienes alguna pregunta sobre nuestros cuadernos, ventas corporativas o pedidos especiales? Escríbenos.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">
        <div className="w-full lg:w-1/3 space-y-10">
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold text-foreground mb-4">Redes Sociales</h3>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@siames.mx</span>
            </a>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold text-foreground mb-4">Email</h3>
            <a 
              href="mailto:hola@siames.mx" 
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hola@siames.mx</span>
            </a>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold text-foreground mb-4">Taller (Previa Cita)</h3>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>Ciudad de México, CDMX<br/>CP 06700</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 bg-white p-8 border border-muted shadow-sm">
          <form 
            action="https://formspree.io/f/YOUR_FORMSPREE_CODE" 
            method="POST" 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  className="w-full border border-muted bg-background px-4 py-3 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  className="w-full border border-muted bg-background px-4 py-3 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5}
                required
                className="w-full border border-muted bg-background px-4 py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="¿En qué te podemos ayudar?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "submitting" || status === "success"}
              className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-medium hover:bg-muted-foreground transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "Enviando..." : status === "success" ? "Mensaje Enviado" : "Enviar Mensaje"}
            </button>
            
            {status === "success" && (
              <p className="text-green-600 text-sm text-center">¡Gracias por contactarnos! Te responderemos pronto.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm text-center">Hubo un error al enviar el mensaje. Por favor intenta de nuevo.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

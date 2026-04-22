"use client";

import { FiMail as Mail, FiMapPin as MapPin } from "react-icons/fi";
import { useState } from "react";

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
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
        setStatus("error");
      });
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow w-full">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl mb-6">contacto</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ¿tienes alguna pregunta sobre nuestros cuadernos, ventas corporativas o pedidos especiales? escríbenos.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">
        <div className="w-full lg:w-1/3 space-y-10">
          <div>
            <h3 className="tracking-widest text-xs font-semibold text-foreground mb-4">redes sociales</h3>
            <a 
              href="https://instagram.com/siamesbooks" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
            >
              <img 
                src="/imagenes/perfil-instagram.jpg" 
                alt="instagram perfil" 
                className="w-10 h-10 rounded-full object-cover transition-transform group-hover:scale-110" 
              />
              <span>@siamesbooks</span>
            </a>
          </div>
          
          <div>
            <h3 className="tracking-widest text-xs font-semibold text-foreground mb-4">email</h3>
            <a 
              href="mailto:holasiames@gmail.com" 
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>holasiames@gmail.com</span>
            </a>
          </div>

          <div>
            <h3 className="tracking-widest text-xs font-semibold text-foreground mb-4">taller (previa cita)</h3>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>ciudad de méxico, cdmx<br/>cp 06700</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 bg-white p-8 border border-muted shadow-sm">
          <form 
            action="https://formsubmit.co/holasiames@gmail.com" 
            method="POST" 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* FormSubmit Configs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/contacto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">nombre</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  className="w-full border border-muted bg-background px-4 py-3 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">correo electrónico</label>
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
              <label htmlFor="message" className="text-sm font-medium">mensaje</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5}
                required
                className="w-full border border-muted bg-background px-4 py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="¿en qué te podemos ayudar?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "submitting" || status === "success"}
              className="w-full bg-foreground text-background py-4 tracking-widest text-sm font-medium hover:bg-muted-foreground transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "enviando..." : status === "success" ? "mensaje enviado" : "enviarnos mensaje"}
            </button>
            
            {status === "success" && (
              <p className="text-green-600 text-sm text-center">¡gracias por contactarnos! por favor valida tu correo si es la primera vez que envías un mensaje.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm text-center">hubo un error al enviar el mensaje. por favor intenta de nuevo.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

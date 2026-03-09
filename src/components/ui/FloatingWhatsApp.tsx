"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const currentUrl = typeof window !== "undefined" ? window.location.href : "";
        const phoneNumber = "1234567890"; // Reemplazar con el número real
        const message = encodeURIComponent(`Hola, quiero información exclusiva sobre la propiedad que estoy viendo en ${currentUrl}`);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <a
            href="#"
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-105 group"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-7 h-7" />

            {/* Tooltip on hover */}
            <span className="absolute right-16 px-3 py-2 bg-white text-foreground text-sm font-medium rounded-lg shadow-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
                Asesoría Exclusiva
            </span>
        </a>
    );
}

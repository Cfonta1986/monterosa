"use client";

import { Search, MapPin, Home, DollarSign } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                <h1 className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 drop-shadow-sm leading-tight">
                    Inversiones Inmobiliarias<br />de Alto Valor
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-12 font-light drop-shadow-sm">
                    Accede al portafolio más exclusivo para inversores exigentes.
                </p>
            </div>

            {/* Search Filter Component (Floating) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-5xl z-20">
                <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">

                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <DollarSign className="w-5 h-5 text-gray-400" />
                        </div>
                        <select className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-none appearance-none font-medium text-foreground focus:ring-2 focus:ring-primary outline-none cursor-pointer">
                            <option value="">Operación</option>
                            <option value="comprar">Comprar</option>
                            <option value="alquilar">Alquilar</option>
                        </select>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Home className="w-5 h-5 text-gray-400" />
                        </div>
                        <select className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-none appearance-none font-medium text-foreground focus:ring-2 focus:ring-primary outline-none cursor-pointer">
                            <option value="">Tipo de Propiedad</option>
                            <option value="casa">Casa</option>
                            <option value="depto">Departamento</option>
                            <option value="terreno">Terreno</option>
                        </select>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <MapPin className="w-5 h-5 text-gray-400" />
                        </div>
                        <select className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-none appearance-none font-medium text-foreground focus:ring-2 focus:ring-primary outline-none cursor-pointer">
                            <option value="">Ubicación</option>
                            <option value="norte">Zona Norte</option>
                            <option value="sur">Zona Sur</option>
                            <option value="este">Zona Este</option>
                            <option value="oeste">Zona Oeste</option>
                        </select>
                    </div>

                    <button className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                        <Search className="w-5 h-5" />
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
}

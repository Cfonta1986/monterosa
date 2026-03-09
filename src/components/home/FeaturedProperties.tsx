import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { properties } from "@/data/properties";

export default function FeaturedProperties() {
    return (
        <section id="propiedades" className="py-24 bg-gray-50 pt-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Propiedades Destacadas</h2>
                    <p className="text-gray-500 max-w-2xl text-lg">
                        Descubra nuestra selección cuidadosamente curada de las propiedades más exclusivas y de mayor potencial del mercado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((prop) => (
                        <Link key={prop.id} href={`/propiedad/${prop.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                {/* Fallback to img since we might not have Unsplash domains configured in next.config */}
                                <img
                                    src={prop.imagen_url}
                                    alt={prop.titulo}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Secondary CTA appearing on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-white/90 backdrop-blur-sm text-foreground px-6 py-2.5 rounded-full font-semibold shadow-xl group-hover:scale-105 group-hover:bg-white transition-all">
                                        Ver detalles
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="mb-2">
                                    <span className="text-2xl font-serif font-bold text-primary">{prop.precio}</span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1">{prop.titulo}</h3>

                                <div className="flex items-center text-gray-500 mb-6 gap-1">
                                    <MapPin className="w-4 h-4 flex-shrink-0" />
                                    <span className="text-sm truncate">{prop.ubicacion}</span>
                                </div>

                                {/* Divider to push stats to bottom */}
                                <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between text-gray-500 text-sm">
                                    <div className="flex items-center gap-1.5" title="Habitaciones">
                                        <Bed className="w-4 h-4" />
                                        <span>{prop.caracteristicas.habitaciones}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5" title="Baños">
                                        <Bath className="w-4 h-4" />
                                        <span>{prop.caracteristicas.banos}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5" title="Metros cuadrados">
                                        <Square className="w-4 h-4" />
                                        <span>{prop.caracteristicas.m2} m²</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/propiedades" className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
                        Ver todo el portafolio
                    </Link>
                </div>
            </div>
        </section>
    );
}

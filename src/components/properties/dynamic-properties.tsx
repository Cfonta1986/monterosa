"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bed, Bath, Square, MapPin, ExternalLink, AlertCircle } from "lucide-react";

interface Property {
    id: string;
    url: string;
    address: string;
    price: string;
    image: string | null;
    features: string[];
}

export default function DynamicProperties() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await fetch("/api/properties");
                if (!res.ok) throw new Error("Fetch failed");
                const data = await res.json();
                if (data.success && data.properties.length > 0) {
                    setProperties(data.properties);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const ARGENPROP_PROFILE = "https://www.argenprop.com/monterosa-negocios-inmobiliarios";

    return (
        <section id="propiedades" className="py-24 bg-gray-50 pt-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Propiedades Destacadas</h2>
                        <p className="text-gray-500 max-w-2xl text-lg">
                            Descubra nuestra selección de propiedades en tiempo real, directamente desde nuestro catálogo en Argenprop.
                        </p>
                    </div>
                    {(!loading && !error) && (
                        <a
                            href={ARGENPROP_PROFILE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                            Ver en Argenprop <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>

                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-[420px] animate-pulse">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-6 flex-grow flex flex-col gap-4">
                                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                                    <div className="h-6 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                    <div className="mt-auto flex justify-between pt-4 border-t border-gray-50">
                                        <div className="h-4 bg-gray-200 rounded w-12"></div>
                                        <div className="h-4 bg-gray-200 rounded w-12"></div>
                                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {(!loading && error) && (
                    <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-3xl mx-auto flex flex-col items-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <AlertCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Descubra nuestro catálogo completo</h3>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Para ver todas nuestras propiedades actualizadas al instante con todas sus características y fotos de alta calidad, visite nuestro perfil oficial.
                        </p>
                        <a
                            href={ARGENPROP_PROFILE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-primary/95 transition-all hover:scale-105 active:scale-95"
                        >
                            Ver propiedades en Argenprop <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                )}

                {(!loading && !error && properties.length > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((prop) => (
                            <a
                                key={prop.id}
                                href={prop.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                    {prop.image ? (
                                        <img
                                            src={prop.image}
                                            alt={prop.address}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            Sin imagen
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    {/* Secondary CTA appearing on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-white/90 backdrop-blur-sm text-foreground px-6 py-2.5 rounded-full font-semibold shadow-xl group-hover:scale-105 group-hover:bg-white transition-all flex items-center gap-2">
                                            Ver en Argenprop <ExternalLink className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="mb-2">
                                        <span className="text-2xl font-serif font-bold text-primary">{prop.price}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-2 leading-tight">{prop.address}</h3>

                                    {/* Divider to push stats to bottom */}
                                    <div className="mt-auto border-t border-gray-100 pt-4 flex flex-wrap gap-x-4 gap-y-2 text-gray-500 text-sm font-medium">
                                        {prop.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                        {prop.features.length > 3 && (
                                            <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 text-gray-400">
                                                <span>+{prop.features.length - 3} más</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

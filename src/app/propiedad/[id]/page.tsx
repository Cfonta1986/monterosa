import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import { MapPin, Bed, Bath, Square, Check, User } from "lucide-react";
import Link from "next/link";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = properties.find((p) => p.id === id);

    if (!property) {
        notFound();
    }

    // Define some placeholder images for the gallery as the mock only has one
    const galleryImages = [
        property.imagen_url,
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?q=80&w=2070&auto=format&fit=crop",
    ];

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumb & Header */}
                <div className="mb-8">
                    <Link href="/#propiedades" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                        &larr; Volver a propiedades
                    </Link>
                    <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
                                {property.titulo}
                            </h1>
                            <div className="flex items-center text-gray-500 gap-2">
                                <MapPin className="w-5 h-5 text-secondary" />
                                <span className="text-lg">{property.ubicacion}</span>
                            </div>
                        </div>
                        <div className="text-left md:text-right">
                            <p className="text-3xl md:text-4xl font-serif font-bold text-primary">{property.precio}</p>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid (Asymmetric) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[500px] mb-12 rounded-2xl overflow-hidden">
                    <div className="md:col-span-2 relative h-64 md:h-full">
                        <img src={galleryImages[0]} alt="Principal" className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 h-64 md:h-full">
                        <div className="relative">
                            <img src={galleryImages[1]} alt="Secundaria 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative group cursor-pointer">
                            <img src={galleryImages[2]} alt="Secundaria 2" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all group-hover:bg-black/50">
                                <span className="text-white font-semibold flex items-center gap-2">
                                    Ver todas las fotos
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">

                    {/* Left Column (70%) */}
                    <div className="lg:col-span-2">
                        {/* Quick Stats */}
                        <div className="flex flex-wrap items-center gap-8 py-6 border-y border-gray-200 mb-8">
                            <div className="flex items-center gap-3">
                                <Bed className="w-6 h-6 text-gray-400" />
                                <div>
                                    <p className="text-xl font-bold text-foreground">{property.caracteristicas.habitaciones}</p>
                                    <p className="text-sm text-gray-500">Habitaciones</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                            <div className="flex items-center gap-3">
                                <Bath className="w-6 h-6 text-gray-400" />
                                <div>
                                    <p className="text-xl font-bold text-foreground">{property.caracteristicas.banos}</p>
                                    <p className="text-sm text-gray-500">Baños</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                            <div className="flex items-center gap-3">
                                <Square className="w-6 h-6 text-gray-400" />
                                <div>
                                    <p className="text-xl font-bold text-foreground">{property.caracteristicas.m2}</p>
                                    <p className="text-sm text-gray-500">Metros Cuadrados</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Descripción de la Propiedad</h2>
                            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
                                {property.descripcion}
                            </p>
                        </div>

                        {/* Amenities */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Características & Amenities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {property.amenities?.map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (30%) - Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white border border-gray-100 rounded-2xl shadow-xl p-6 md:p-8">
                            <div className="mb-6">
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">Precio Solicitado</p>
                                <p className="text-4xl font-serif font-bold text-primary">{property.precio}</p>
                            </div>

                            {/* Agent info */}
                            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                    <User className="w-6 h-6 text-gray-400" />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">Asesor Monterosa</p>
                                    <p className="text-sm text-gray-500">+54 9 11 1234-5678</p>
                                </div>
                            </div>

                            <form className="flex flex-col gap-4">
                                <h3 className="font-bold text-foreground mb-2">Solicitar Información</h3>
                                <input
                                    type="text"
                                    placeholder="Nombre completo"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                                />
                                <textarea
                                    placeholder="Hola, me interesa la propiedad..."
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                                    defaultValue={`Hola, me interesa obtener más información sobre la propiedad "${property.titulo}".`}
                                    required
                                />
                                <button type="submit" className="w-full uppercase tracking-wider font-semibold bg-primary text-white hover:bg-primary/90 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 mt-2">
                                    Contactar Asesor
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

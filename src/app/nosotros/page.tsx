import Image from "next/image";
import { Award, Users, TrendingUp, Building } from "lucide-react";

export default function AboutUsPage() {
    const stats = [
        { label: "Gestionados", value: "$500M+", icon: TrendingUp },
        { label: "Propiedades Exclusivas", value: "150+", icon: Building },
        { label: "Inversores Satisfechos", value: "300+", icon: Users },
        { label: "Retorno Promedio", value: "98%", icon: Award },
    ];

    const leaders = [
        {
            name: "Alejandro Monterosa",
            role: "Fundador & CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
        },
        {
            name: "Elena Valdés",
            role: "Directora de Operaciones",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
        },
        {
            name: "Carlos Santamaría",
            role: "Head of Acquisitions",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
        },
    ];

    return (
        <div className="pt-24 bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
                >
                    <div className="absolute inset-0 bg-gray-900/60" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4 drop-shadow-sm">
                        Forjando Legados Inmobiliarios
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light drop-shadow-sm max-w-2xl mx-auto">
                        Más de 15 años conectando inversores exigentes con propiedades de valor incalculable.
                    </p>
                </div>
            </section>

            {/* History & Mission */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Exclusividad y Discreción</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            En Monterosa Negocios Inmobiliarios, no solo vendemos propiedades; curamos colecciones de activos inmobiliarios para los inversores más prestigiosos del mundo. Nuestra firma nació de la necesidad de ofrecer un nivel de servicio que trasciende lo transaccional.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Manejamos cada operación con absoluta reserva, garantizando que el patrimonio de nuestros clientes crezca de manera segura y sostenida, a través de oportunidades off-market que no se encuentran en los canales tradicionales.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-1 bg-secondary rounded-full"></div>
                            <span className="font-semibold text-primary uppercase tracking-widest text-sm">Nuestro Compromiso</span>
                        </div>
                    </div>
                    <div className="relative aspect-square md:aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1556910103-1c02745a872e?q=80&w=2070&auto=format&fit=crop"
                            alt="Reunión exclusiva de inversores"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>

            {/* Stats / Authority */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <stat.icon className="w-10 h-10 text-secondary mb-4 opacity-80" />
                                <span className="text-4xl md:text-5xl font-bold font-serif mb-2 text-white">{stat.value}</span>
                                <span className="text-sm md:text-base font-medium text-gray-300 uppercase tracking-wide">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Liderazgo</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            El equipo directivo detrás del éxito y la expansión internacional de Monterosa.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {leaders.map((leader, i) => (
                            <div key={i} className="group text-center">
                                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-6">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-1 font-serif">{leader.name}</h3>
                                <p className="text-primary font-medium">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Placeholder */}
            <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="mb-4 text-white font-serif text-lg tracking-widest">MONTEROSA</p>
                    <p>© {new Date().getFullYear()} Monterosa Negocios Inmobiliarios. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

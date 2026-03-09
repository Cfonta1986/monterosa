import Hero from "@/components/home/Hero";
import DynamicProperties from "@/components/properties/dynamic-properties";

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicProperties />

      {/* Footer Placeholder for the Home Page layout */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm border-t border-gray-800 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-4 text-white font-serif text-lg tracking-widest">MONTEROSA</p>
          <p>© {new Date().getFullYear()} Monterosa Negocios Inmobiliarios. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

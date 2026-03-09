"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Propiedades", href: "/#propiedades" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Contacto", href: "/#contacto" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span className={`text-2xl font-serif tracking-tight font-bold ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
                        MONTEROSA
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-secondary ${isScrolled ? "text-foreground" : "text-white"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#contacto"
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl ${isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-gray-100"}`}
                    >
                        Invertir ahora
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-foreground" />
                    ) : (
                        <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary"}`} />
                    )}
                </button>

                {/* Mobile Nav */}
                <div
                    className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-6 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex flex-col items-center gap-8 mt-16">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contacto"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg"
                        >
                            Invertir ahora
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

import React, { useState, useEffect } from "react";
import Logo from "/src/assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = -70; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Location", id: "location" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
    // {label: 'booknow', id:'contact2'}
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2"
        >
          <img
            src={Logo}
            className="w-12 h-12 object-cover rounded-md"
            alt="logo"
          />
          <span className="hidden md:block text-lg font-semibold">
            Dravyam Farms
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToSection(l.id)}
              className="text-lg hover:text-green-600 transition"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToSection(l.id)}
              className="text-left text-lg border-b pb-2"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

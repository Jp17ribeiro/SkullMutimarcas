"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { assetPath } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const links = [
  ["Início", "#inicio"],
  ["Marcas", "#marcas"],
  ["Coleções", "#colecoes"],
  ["Sobre", "#sobre"],
  ["Localização", "#localizacao"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="floating-nav" aria-label="Navegação principal">
        <a href="#inicio" className="nav-logo" aria-label="Skull Multimarcas — início">
          <Image src={assetPath("/images/logo-skull-nova-transparente.png")} alt="" width={1254} height={1254} priority />
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <a className="nav-cta" href="https://wa.me/5561991370893" target="_blank" rel="noreferrer">
          <WhatsAppIcon /> <span>Falar no WhatsApp</span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.24 }}>
            <div className="mobile-menu-glow" />
            <span className="eyebrow">Navegue</span>
            {links.map(([label, href], index) => (
              <motion.a key={href} href={href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                <span>0{index + 1}</span>{label}
              </motion.a>
            ))}
            <a className="button button-orange mobile-wa" href="https://wa.me/5561991370893" target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

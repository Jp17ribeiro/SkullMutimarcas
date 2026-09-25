"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { assetPath } from "@/lib/site";
import { whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.86], [1, 0]);

  return (
    <section className="hero" id="inicio" ref={ref}>
      <motion.div className="hero-bg" style={{ y }} aria-hidden="true">
        <Image src={assetPath("/images/grafite-skull.png")} alt="Grafite Skull em cenário urbano" fill priority sizes="100vw" quality={90} />
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-grain" />
      <div className="aura aura-purple" /><div className="aura aura-cyan" /><div className="aura aura-green" />
      <motion.div className="hero-content" style={{ opacity }}>
        <motion.div className="hero-logo-wrap" initial={{ opacity: 0, scale: 0.84, filter: "blur(15px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1.05, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}>
          <Image src={assetPath("/images/logo-skull-nova-transparente.png")} alt="Skull Multimarcas" width={1254} height={1254} priority />
        </motion.div>
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.75 }}>
          <p className="hero-kicker">Seu brilho, seu estilo.</p>
          <p className="hero-sub">Streetwear, sneakers e atitude em um só lugar.</p>
          <div className="hero-actions">
            <a href="#colecoes" className="button button-orange">Ver coleções <ArrowDown /></a>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="button button-glass"><WhatsAppIcon /> Falar no WhatsApp <ArrowUpRight /></a>
          </div>
        </motion.div>
        <a href="#marcas" className="scroll-cue" aria-label="Rolar para marcas">
          <b aria-hidden="true" />
          <span>Scroll</span>
          <i aria-hidden="true" />
        </a>
      </motion.div>
      <span className="hero-side-note">Cidade Ocidental · GO / Brasil</span>
    </section>
  );
}

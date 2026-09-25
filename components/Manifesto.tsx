"use client";

import { motion } from "framer-motion";

const words = ["Não", "é", "só", "roupa.", "É", "identidade."];

export function Manifesto() {
  return (
    <section className="manifesto section" id="sobre">
      <div className="manifesto-orbit" aria-hidden="true" />
      <div className="container manifesto-inner">
        <span className="eyebrow"><i /> Manifesto Skull</span>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, margin: "-15%" }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          {words.map((word, index) => (
            <motion.span key={`${word}-${index}`} variants={{ hidden: { opacity: 0, y: 55, rotate: 2 }, show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }} className={index > 3 ? "accent" : ""}>{word}&nbsp;</motion.span>
          ))}
        </motion.h2>
        <motion.div className="manifesto-bottom" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <span className="manifesto-mark">S / 26</span>
          <p>A Skull Multimarcas reúne peças para quem entende que estilo também é uma forma de expressão.</p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/site";

export function Manifesto() {
  return (
    <section className="manifesto manifesto-cinematic section" id="sobre">
      <motion.div className="manifesto-media" initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} aria-hidden="true">
        <Image src={assetPath("/images/foto-vitrine-skull.png")} alt="" fill sizes="100vw" />
      </motion.div>
      <div className="manifesto-shade" aria-hidden="true" />
      <div className="container manifesto-inner">
        <span className="eyebrow light"><i /> 04 / Manifesto Skull</span>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, margin: "-12%" }} variants={{ show: { transition: { staggerChildren: 0.13 } } }}>
          <motion.span variants={{ hidden: { opacity: 0, y: 70 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}>Não é só</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 70 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}>Roupa.</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 70 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}>É <em>identidade.</em></motion.span>
        </motion.h2>
        <motion.div className="manifesto-bottom" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <span className="manifesto-line" aria-hidden="true" />
          <p>Streetwear é mais do que vestir.<br />É mostrar quem você é.</p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/site";

export function SiteLoader() {
  return (
    <motion.div className="site-loader" initial={{ opacity: 1 }} animate={{ opacity: 0, pointerEvents: "none" }} transition={{ duration: 0.55, delay: 1.15 }} aria-hidden="true">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}>
        <Image src={assetPath("/images/logo-skull-nova-transparente.png")} alt="" width={1254} height={1254} priority />
        <span className="loader-track"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }} /></span>
      </motion.div>
    </motion.div>
  );
}

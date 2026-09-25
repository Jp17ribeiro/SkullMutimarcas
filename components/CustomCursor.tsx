"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-50);
  const y = useMotionValue(-50);
  const smoothX = useSpring(x, { stiffness: 500, damping: 35 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 35 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: MouseEvent) => { x.set(e.clientX - 8); y.set(e.clientY - 8); };
    const over = (e: MouseEvent) => setActive(Boolean((e.target as HTMLElement).closest("a,button,.interactive")));
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); };
  }, [x, y]);

  return <motion.div className={`custom-cursor ${active ? "is-active" : ""}`} style={{ x: smoothX, y: smoothY }} aria-hidden="true" />;
}

"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { assetPath } from "@/lib/site";
import { whatsappUrl } from "@/lib/contact";
import { Reveal } from "./Reveal";

const products = [
  { brand: "Hocks", name: "Seleção Hocks", image: assetPath("/images/foto-loja-skull.png"), position: "center 68%" },
  { brand: "Trip Side", name: "Camiseta Trip Side", image: assetPath("/images/foto-vitrine-skull.png"), position: "center 36%" },
  { brand: "Chronic", name: "Drop Chronic", image: assetPath("/images/foto-loja-skull.png"), position: "35% 72%" },
  { brand: "Compton", name: "Linha Compton", image: assetPath("/images/juncao-marcas-skull.png"), position: "center" },
  { brand: "Cool Cat", name: "Seleção Cool Cat", image: assetPath("/images/foto-vitrine-skull.png"), position: "center 67%" },
];

export function ProductHighlights() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  const move = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.72, behavior: "smooth" });
  };

  const updateActive = () => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(rail.children) as HTMLElement[];
    const nearest = cards.reduce((best, card, index) => {
      const distance = Math.abs(card.offsetLeft - rail.scrollLeft);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });
    setActive(nearest.index + 1);
  };

  return (
    <section className="products section" aria-labelledby="products-title">
      <div className="container products-head">
        <Reveal>
          <span className="eyebrow"><i /> 03 / Drop selecionado</span>
          <h2 id="products-title">Destaques<br /><em>da Skull.</em></h2>
        </Reveal>
        <Reveal className="products-intro" delay={0.1}>
          <p>Peças escolhidas pra quem não segue tendência.<br />Cria a própria.</p>
          <div className="products-controls">
            <span><b>{String(active).padStart(2, "0")}</b> / {String(products.length).padStart(2, "0")}</span>
            <button onClick={() => move(-1)} aria-label="Produto anterior"><ArrowLeft /></button>
            <button onClick={() => move(1)} aria-label="Próximo produto"><ArrowRight /></button>
          </div>
        </Reveal>
      </div>

      <div className="product-rail" ref={railRef} onScroll={updateActive}>
        {products.map((product, index) => (
          <article className="product-card interactive" key={product.brand}>
            <div className="product-photo">
              <Image src={product.image} alt={`${product.name} na Skull Multimarcas`} fill sizes="(max-width: 600px) 82vw, (max-width: 1024px) 42vw, 28vw" style={{ objectPosition: product.position }} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="product-info">
              <span>{product.brand}</span>
              <h3>{product.name}</h3>
              <div><strong>Consultar</strong><a href={whatsappUrl(`Olá! Vi o produto "${product.name}" no site da Skull Multimarcas e gostaria de saber mais informações.`)} target="_blank" rel="noreferrer">Quero esse <ArrowUpRight /></a></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

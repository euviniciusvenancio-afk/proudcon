"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useState, useEffect } from "react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-[calc(100vh-5rem)] w-full flex items-center justify-center overflow-hidden">
      {heroImage && (
        <div
          className="absolute left-0 w-full h-[150%] -top-[25%]"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        >
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover filter grayscale"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground p-4">
        <Image
          src="https://i.postimg.cc/wB9TP8Vw/Chat-GPT-Image-1-de-mar-de-2026-23-27-24.png"
          alt="Engenharia com Precisão. Execução com Excelência."
          width={1024}
          height={281}
          className="h-auto w-full max-w-4xl"
          priority
        />
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://wa.me/553291258227" target="_blank" rel="noopener noreferrer">Solicitar orçamento</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

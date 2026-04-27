"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ProjectModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ images, isOpen, onClose }: ProjectModalProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  useEffect(() => {
    if (!isOpen) {
      // Reset to the first slide when the modal is closed and re-opened
      api?.scrollTo(0, true);
    }
  }, [isOpen, api]);


  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-6xl bg-transparent p-0 border-none shadow-none">
        <DialogTitle className="sr-only">Galeria de Imagens do Projeto</DialogTitle>
        <div>
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: images.length > 1,
            }}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={src}
                      alt={`Imagem do projeto ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 95vw, 70vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
           {images.length > 1 && (
            <div className="flex justify-center gap-3 mt-4">
                {Array.from({ length: count }).map((_, i) => (
                    <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                        current === i ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

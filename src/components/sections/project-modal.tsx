
"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ProjectModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ images, isOpen, onClose }: ProjectModalProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-5xl bg-card/95 backdrop-blur-sm border-border/50 p-2 sm:p-4 rounded-lg shadow-2xl">
        <DialogTitle className="sr-only">Galeria de Imagens do Projeto</DialogTitle>
        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full overflow-hidden rounded-md">
                  <Image
                    src={src}
                    alt={`Imagem do projeto ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50 border-none transition-colors sm:left-2" />
              <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50 border-none transition-colors sm:right-2" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

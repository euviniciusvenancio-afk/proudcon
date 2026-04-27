
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
      <DialogContent className="w-[95vw] max-w-6xl bg-transparent p-0 border-none shadow-none">
        <DialogTitle className="sr-only">Galeria de Imagens do Projeto</DialogTitle>
        <Carousel
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
          {images.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 border-none bg-transparent text-white opacity-70 transition-opacity hover:opacity-100 disabled:opacity-0 md:left-[-60px]" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 border-none bg-transparent text-white opacity-70 transition-opacity hover:opacity-100 disabled:opacity-0 md:right-[-60px]" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

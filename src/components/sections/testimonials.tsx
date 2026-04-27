"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Testimonials() {
  const testimonialImages = PlaceHolderImages.filter(p => p.id.startsWith('testimonial-ss-'));

  if (!testimonialImages.length) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A Opinião de Nossos Clientes
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              A satisfação de quem confia em nosso trabalho é nossa maior recompensa.
            </p>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: testimonialImages.length > 2,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonialImages.map((image) => (
                <CarouselItem key={image.id} className="pl-4 basis-full md:basis-1/2 lg:basis-[36%]">
                  <div className="p-1 h-full">
                    <Card className="overflow-hidden bg-secondary/20 border-border/50 h-full flex flex-col shadow-lg">
                      <div className="relative aspect-[9/18] bg-background/30 flex-grow">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-contain rounded-lg p-2 md:p-3"
                          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 33vw"
                        />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-10px] md:left-[-50px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 border-none bg-transparent text-white/70 transition-opacity hover:text-white disabled:opacity-0" />
            <CarouselNext className="absolute right-[-10px] md:right-[-50px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 border-none bg-transparent text-white/70 transition-opacity hover:text-white disabled:opacity-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

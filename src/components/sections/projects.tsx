"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Projects() {
  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith('project-'));
  
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projetos Executados
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              Explore uma seleção de nossos trabalhos, onde a precisão técnica encontra o design sofisticado.
            </p>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto mt-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projectImages.map((image, index) => (
                <CarouselItem key={image.id} className="sm:basis-1/2 lg:basis-1/3">
                   <div className="p-2 h-full">
                    <Card className="relative aspect-[4/3] overflow-hidden group border-0 shadow-none h-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105 filter grayscale group-hover:filter-none"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 p-4 md:p-6">
                        <h3 className="text-primary font-headline font-bold text-lg">Projeto #{index + 1}</h3>
                        <p className="text-sm text-foreground/80">{image.description}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
           <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: count }).map((_, i) => (
                  <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      current === i ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { ProjectModal } from "./project-modal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Projects() {
  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith('project-'));

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const openModal = (images: string[]) => {
    setSelectedImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImages([]);
  };

  const ProjectCard = ({ image }: { image: ImagePlaceholder }) => (
    <Card
      key={image.id}
      className="relative aspect-[4/3] w-full overflow-hidden group border-0 shadow-lg rounded-lg cursor-pointer transition-all duration-300 hover:shadow-primary/20"
      onClick={() => openModal(image.gallery ?? [image.imageUrl])}
    >
      <Image
        src={image.imageUrl}
        alt={image.description}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        data-ai-hint={image.imageHint}
        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
      />
    </Card>
  );

  return (
    <>
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

          {/* Mobile: Vertical List */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:hidden">
            {projectImages.map((image) => (
              <ProjectCard key={image.id} image={image} />
            ))}
          </div>

          {/* Desktop: Carousel */}
          <div className="hidden md:block mt-16">
            <Carousel
              opts={{
                align: "start",
                loop: projectImages.length > 2,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-8">
                {projectImages.map((image) => (
                  <CarouselItem key={image.id} className="pl-8 md:basis-1/2 lg:basis-1/3">
                    <ProjectCard image={image} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-card/70 text-primary hover:bg-card border-2 border-primary/40 transition-all disabled:opacity-0" />
              <CarouselNext className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-card/70 text-primary hover:bg-card border-2 border-primary/40 transition-all disabled:opacity-0" />
            </Carousel>
          </div>
        </div>
      </section>
      <ProjectModal images={selectedImages} isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}

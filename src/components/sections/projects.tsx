"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProjectModal } from "./project-modal";

export default function Projects() {
  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith('project-') && p.gallery && p.gallery.length > 0);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
            {projectImages.map((image) => (
              <Card
                key={image.id}
                className="relative aspect-[4/3] overflow-hidden group border-0 shadow-none rounded-lg cursor-pointer"
                onClick={() => openModal(image.gallery ?? [])}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal images={selectedImages} isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}

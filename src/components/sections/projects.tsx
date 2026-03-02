import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export default function Projects() {
  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith('project-'));

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
          {projectImages.map((image, index) => (
            <Card key={image.id} className="relative aspect-[4/3] overflow-hidden group border-0 shadow-none">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 filter grayscale group-hover:filter-none"
                data-ai-hint={image.imageHint}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4 md:p-6">
                <h3 className="text-primary font-headline font-bold text-lg">Projeto #{index + 1}</h3>
                <p className="text-sm text-foreground/80">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

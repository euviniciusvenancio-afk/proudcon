import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre a Proudcon
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-lg/relaxed font-headline">
                Somos referência em engenharia e execução técnica, comprometidos com a organização, planejamento e controle rigoroso de cada obra. Garantimos entregas no prazo e total transparência, estabelecendo uma relação de confiança com cada cliente.
              </p>
            </div>
            <Card className="bg-card p-6 border-border/50">
              <blockquote className="text-lg font-semibold leading-snug text-foreground">
                “Fundada e liderada por Jovane Venâncio, engenheiro com visão estratégica e foco absoluto em qualidade e previsibilidade.”
              </blockquote>
            </Card>
          </div>
          <div className="relative h-80 w-full md:h-[500px] rounded-lg overflow-hidden">
            {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover filter grayscale"
                  data-ai-hint={aboutImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

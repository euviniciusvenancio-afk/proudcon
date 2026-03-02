import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Carlos S.",
    title: "Investidor Imobiliário",
    quote: "A organização e o controle da Proudcon foram impecáveis. Pela primeira vez, tive uma obra sem surpresas e dentro do prazo.",
    imageId: "testimonial-client-1"
  },
  {
    id: "testimonial-2",
    name: "Ana P.",
    title: "Proprietária",
    quote: "Profissionalismo exemplar. A comunicação transparente me deu segurança durante toda a reforma do meu apartamento.",
    imageId: "testimonial-client-2"
  },
  {
    id: "testimonial-3",
    name: "Marcos T.",
    title: "Diretor de Empresa",
    quote: "A consultoria estratégica de Jovane foi fundamental para a viabilidade do nosso projeto de expansão. Visão técnica afiada.",
    imageId: "testimonial-client-3"
  }
];

export default function Testimonials() {
  const testimonialImages = PlaceHolderImages.filter(p => p.id.startsWith('testimonial-client-'));
  
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Depoimentos de Clientes
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              A satisfação de quem confia em nosso trabalho é nossa maior recompensa.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = testimonialImages.find(img => img.id === testimonial.imageId);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="h-full bg-secondary/20 border-border/50 flex flex-col">
                      <CardContent className="flex flex-col items-start p-6 flex-grow">
                        <blockquote className="text-foreground/90 text-lg mb-6 flex-grow">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 border-2 border-primary/50">
                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-primary">{testimonial.name}</p>
                            <p className="text-sm text-foreground/70">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building, GanttChartSquare, Landmark, DraftingCompass, Briefcase } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Reformas de Alto Padrão",
    description: "Execução completa com controle técnico, cronograma estruturado e relatórios detalhados.",
  },
  {
    icon: GanttChartSquare,
    title: "Gerenciamento de Obras",
    description: "Planejamento estratégico, acompanhamento técnico e gestão rigorosa de custos.",
  },
  {
    icon: Landmark,
    title: "Regularização Imobiliária",
    description: "Soluções técnicas e documentais para regularização de imóveis com segurança jurídica.",
  },
  {
    icon: DraftingCompass,
    title: "Projetos Técnicos e Laudos",
    description: "Projetos estruturais, elétricos e relatórios técnicos com responsabilidade profissional.",
  },
  {
    icon: Briefcase,
    title: "Consultoria Estratégica",
    description: "Análise técnica especializada para investidores e proprietários.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Soluções Completas em Engenharia
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos um portfólio de serviços que abrange todas as fases do seu projeto, com o mais alto padrão técnico.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto py-12"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={service.title} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-background border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                    <CardHeader className="relative p-6 flex-grow">
                      <div className="absolute -top-2 -left-2 text-7xl font-bold text-accent/10 select-none z-0">
                        0{index + 1}
                      </div>
                      <div className="relative z-10">
                        <div className="p-3 bg-secondary/50 rounded-md inline-block mb-4">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base text-foreground/70">{service.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20px] sm:left-[-50px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-20px] sm:right-[-50px] top-1/2 -translate-y-1/2" />
        </Carousel>
        <div className="text-center mt-8">
          <p className="text-xl font-medium text-foreground/90 italic tracking-tight">
            "Engenharia não é improviso. É método, cálculo e precisão."
          </p>
        </div>
      </div>
    </section>
  );
}

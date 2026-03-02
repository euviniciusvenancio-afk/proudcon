import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Reformas de Alto Padrão",
    description: "Execução completa com controle técnico, cronograma estruturado e relatórios detalhados.",
  },
  {
    title: "Gerenciamento de Obras",
    description: "Planejamento estratégico, acompanhamento técnico e gestão rigorosa de custos.",
  },
  {
    title: "Regularização Imobiliária",
    description: "Soluções técnicas e documentais para regularização de imóveis com segurança jurídica.",
  },
  {
    title: "Projetos Técnicos e Laudos",
    description: "Projetos estruturais, elétricos e relatórios técnicos com responsabilidade profissional.",
  },
  {
    title: "Consultoria Estratégica",
    description: "Análise técnica especializada para investidores e proprietários.",
  },
];

// Helper to group services into pairs for the carousel
const servicePairs = services.reduce<(typeof services)[]>((result, _value, index, array) => {
  if (index % 2 === 0) {
    result.push(array.slice(index, index + 2));
  }
  return result;
}, []);


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
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {servicePairs.map((pair, slideIndex) => (
              <CarouselItem key={slideIndex}>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 min-h-[350px] px-4">
                  {/* First item in the pair */}
                  {pair[0] && (
                    <div className="relative pt-2 w-full md:w-1/2 md:mb-24">
                      <h3 className="font-headline text-2xl font-bold pl-12">{pair[0].title}</h3>
                      <p className="mt-2 text-foreground/80 pl-12">{pair[0].description}</p>
                      <span className="absolute left-0 top-0 font-headline text-5xl font-bold text-primary/20 select-none">
                        {String((slideIndex * 2) + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                  
                  {/* Second item in the pair */}
                  {pair[1] && (
                    <div className="relative pt-2 w-full md:w-1/2 md:mt-24">
                      <h3 className="font-headline text-2xl font-bold pl-12">{pair[1].title}</h3>
                      <p className="mt-2 text-foreground/80 pl-12">{pair[1].description}</p>
                      <span className="absolute left-0 top-0 font-headline text-5xl font-bold text-primary/20 select-none">
                        {String((slideIndex * 2) + 2).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 md:left-[-50px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-0 md:right-[-50px] top-1/2 -translate-y-1/2" />
        </Carousel>

        <div className="text-center mt-16">
          <p className="text-xl font-medium text-foreground/90 italic tracking-tight">
            "Engenharia não é improviso. É método, cálculo e precisão."
          </p>
        </div>
      </div>
    </section>
  );
}
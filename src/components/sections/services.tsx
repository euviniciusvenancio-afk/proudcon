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
        
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => (
            <div key={service.title} className="relative pt-2">
              <h3 className="font-headline text-2xl font-bold pl-12">{service.title}</h3>
              <p className="mt-2 text-foreground/80 pl-12">{service.description}</p>
              <span className="absolute left-0 top-0 font-headline text-5xl font-bold text-primary/20 select-none">{String(index + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl font-medium text-foreground/90 italic tracking-tight">
            "Engenharia não é improviso. É método, cálculo e precisão."
          </p>
        </div>
      </div>
    </section>
  );
}

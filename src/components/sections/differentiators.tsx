import { ClipboardCheck, Banknote, BarChartHorizontalBig, Users, CalendarClock, Gem } from "lucide-react";

const differentiators = [
  {
    icon: ClipboardCheck,
    title: "Planejamento antes da execução",
    description: "Nenhum passo é dado sem um plano detalhado e aprovado."
  },
  {
    icon: Banknote,
    title: "Controle financeiro estruturado",
    description: "Visibilidade total sobre os custos, evitando surpresas."
  },
  {
    icon: BarChartHorizontalBig,
    title: "Relatórios semanais detalhados",
    description: "Acompanhamento transparente do progresso da obra."
  },
  {
    icon: Users,
    title: "Comunicação transparente",
    description: "Linha direta para esclarecimentos e decisões."
  },
  {
    icon: CalendarClock,
    title: "Cumprimento rigoroso de prazos",
    description: "Seu projeto entregue no tempo acordado."
  },
  {
    icon: Gem,
    title: "Alto padrão de acabamento",
    description: "Foco na qualidade final e na valorização do seu imóvel."
  }
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Por Que Escolher a Proudcon?
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              Nossa metodologia é o que nos diferencia. Unimos técnica e gestão para garantir resultados previsíveis e de alta qualidade.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-px rounded-lg border border-border bg-border mt-12 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {differentiators.map((item) => (
            <div key={item.title} className="bg-background p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/50 rounded-md">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                  <p className="text-foreground/80 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

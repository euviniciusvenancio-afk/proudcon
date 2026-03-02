import AiQualifier from "@/components/ai-qualifier";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Seu Projeto Merece Engenharia de Verdade.
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              Converse com nosso assistente virtual para uma avaliação técnica inicial. É o primeiro passo para um projeto de sucesso.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <AiQualifier />
        </div>
      </div>
    </section>
  );
}

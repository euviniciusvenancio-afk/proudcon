
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Seu Projeto Merece Engenharia de Verdade.
            </h2>
            <p className="mx-auto max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              Pronto para dar o próximo passo? Clique abaixo e peça seu orçamento com nossos especialistas.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
           <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10">
              <Link href="https://wa.me/553291258227" target="_blank" rel="noopener noreferrer">
                Fazer orçamento
              </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

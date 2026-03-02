import { Button } from "@/components/ui/button";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      {...props}
    >
      <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.315 0-.765.11-1.057.33-.29.22-.72.686-.94 1.46-.22.774-.33 1.433-.33 1.963 0 1.31.39 2.335 1.7 3.555 1.31 1.22 2.996 2.128 4.787 2.128 1.43 0 2.51-.33 2.922-.9c.41-.57.686-1.46.686-1.46s.073-.545-.02-.614c-.09-.07-.37-.144-.73-.288z"></path>
      <path d=" M16 .01C7.17 0 0 7.17 0 16s7.17 16 16 16c8.84 0 16-7.17 16-16S24.84.01 16 .01zM16 29C8.28 29 2 22.72 2 15S8.28 1 16 1c7.73 0 14 6.28 14 14S23.73 29 16 29z"></path>
    </svg>
);

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
              Clique no botão abaixo para iniciar uma conversa via WhatsApp. É o primeiro passo para um projeto de sucesso.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
           <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90 gap-3">
            <Link href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-6 w-6" />
              Fale com um Especialista no WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-foreground/70" />
          <p className="text-sm text-foreground/70">
            © {currentYear} Proudcon Engenharia. Todos os direitos reservados.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm hover:underline underline-offset-4 text-foreground/70">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4 text-foreground/70">
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}

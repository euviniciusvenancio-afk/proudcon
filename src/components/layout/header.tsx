"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre a Proudcon" },
  { href: "#services", label: "Serviços" },
  { href: "#differentiators", label: "Diferenciais" },
  { href: "#projects", label: "Projetos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#contact", label: "Contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navContent = (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={handleLinkClick}
          className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm border-b" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center">
          <Image
            src="https://i.postimg.cc/wB9TP8Vw/Chat-GPT-Image-1-de-mar-de-2026-23-27-24.png"
            alt="Proudcon Engenharia Logo"
            width={180}
            height={50}
            className="h-auto w-36"
            priority
            unoptimized
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navContent}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://wa.me/553291258227" target="_blank" rel="noopener noreferrer">Fazer orçamento</Link>
          </Button>
          {isMounted && (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                </SheetHeader>
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}

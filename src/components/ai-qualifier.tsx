"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getAiResponse } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, Loader2, Send } from "lucide-react";
import type { ProjectQualifierOutput } from "@/ai/flows/project-qualifier-ai";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "model";
  text: string;
};

const formSchema = z.object({
  message: z.string().min(1, "A mensagem não pode estar vazia."),
});

export default function AiQualifier() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [qualificationResult, setQualificationResult] = useState<ProjectQualifierOutput | null>(null);
  const [isPending, startTransition] = useTransition();
  const scrollAreaViewportRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { message: "" },
  });

  useEffect(() => {
    if (scrollAreaViewportRef.current) {
      scrollAreaViewportRef.current.scrollTo({
        top: scrollAreaViewportRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [conversation, isPending]);

  useEffect(() => {
    setConversation([{ role: "model", text: "Olá! Sou o assistente de projetos da Proudcon. Para dar início à sua avaliação, por favor, descreva brevemente o tipo de projeto de engenharia que você tem em mente. (ex: reforma, construção, laudo, etc.)" }]);
  }, []);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const userMessage = values.message;
    setConversation((prev) => [...prev, { role: "user", text: userMessage }]);
    form.reset();

    startTransition(async () => {
      const response = await getAiResponse({
        conversationHistory: conversation,
        currentMessage: userMessage,
      });

      if ('error' in response) {
        toast({
          variant: "destructive",
          title: "Erro de Comunicação",
          description: response.error,
        });
        setConversation(prev => prev.slice(0, -1));
        return;
      }
      
      setConversation((prev) => [...prev, { role: "model", text: response.aiResponse }]);
      
      if (response.isQualificationComplete) {
        setQualificationResult(response);
      }
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-background/50 border-border/50 shadow-2xl">
      <CardContent className="p-0">
        <ScrollArea className="h-[450px] w-full" >
          <div className="p-4 md:p-6 space-y-6" ref={scrollAreaViewportRef}>
            {conversation.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                {msg.role === "model" && <div className="p-2 bg-secondary rounded-full"><Bot className="h-6 w-6 text-primary shrink-0" /></div>}
                <div className={`rounded-lg p-3 text-sm md:text-base max-w-[85%] break-words ${msg.role === "model" ? "bg-secondary" : "bg-primary text-primary-foreground"}`}>
                  <p>{msg.text}</p>
                </div>
                {msg.role === "user" && <div className="p-2 bg-secondary rounded-full"><User className="h-6 w-6 text-primary shrink-0" /></div>}
              </div>
            ))}
            {isPending && (
              <div className="flex items-start gap-3">
                 <div className="p-2 bg-secondary rounded-full"><Bot className="h-6 w-6 text-primary shrink-0" /></div>
                <div className="rounded-lg p-3 bg-secondary flex items-center">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        {qualificationResult?.isQualificationComplete ? (
          <div className="p-4 md:p-6 border-t text-center">
            <h3 className="font-headline text-lg font-bold">Qualificação Concluída</h3>
            <p className="text-foreground/80 mt-2">Obrigado pelas informações. Em breve, nossa equipe entrará em contato para agendar uma consulta com nosso especialista, Jovane Venâncio.</p>
          </div>
        ) : (
          <div className="p-2 border-t bg-background">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2 p-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="Digite sua mensagem..." {...field} disabled={isPending} className="bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending} size="icon">
                  {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  <span className="sr-only">Enviar</span>
                </Button>
              </form>
            </Form>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber muito de C# para começar?",
    answer: "Você precisa apenas da lógica de programação básica e fundamentos de C#. O curso te guia passo a passo na construção web."
  },
  {
    question: "Razor Pages ainda é usado? Achei que tudo era React.",
    answer: "Sim! Razor Pages é extremamente popular em ambientes corporativos, intranets e sistemas de gestão onde a produtividade e SEO são prioridades. É a base fundamental do ASP .NET Core."
  },
  {
    question: "Vou receber certificado?",
    answer: "Sim, ao concluir todas as aulas você recebe um certificado oficial para adicionar ao seu LinkedIn."
  },
  {
    question: "Tenho suporte se tiver dúvidas?",
    answer: "Com certeza. Você terá acesso à área de membros para tirar dúvidas diretamente sobre o conteúdo das aulas."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Perguntas <span className="text-primary">Frequentes (FAQ)</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card/50 border border-border rounded-xl px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

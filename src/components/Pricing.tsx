import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  "Acesso vitalício ao curso completo",
  "Mais de 80 aulas práticas",
  "Projeto real: Blog profissional",
  "Aprenda ASP.NET Razor Pages do zero",
  "Entity Framework Core e SQL Server",
  "Deploy e CI/CD com Azure",
  "Autenticação e autorização",
  "Upload de arquivos na nuvem",
  "Área administrativa completa",
  "Certificado de conclusão"
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Comece Sua Jornada Agora
          </h2>
          <p className="text-xl text-muted-foreground">
            Investimento único para acesso completo e vitalício
          </p>
        </div>
        
        <Card 
          className="max-w-lg mx-auto p-8 border-2 border-primary/20 hover:border-primary/40 transition-all"
          style={{ boxShadow: 'var(--hover-shadow)' }}
        >
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Oferta Especial
            </div>
            <div className="mb-2">
              <span className="text-5xl font-bold text-foreground">R$ 47</span>
              <span className="text-muted-foreground ml-2">pagamento único</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Acesso completo e vitalício
            </p>
          </div>
          
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="w-full text-lg py-6 shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href="https://pay.kiwify.com.br/0DlsvX7" target="_blank" rel="noopener noreferrer">
              Garantir Minha Vaga Agora
            </a>
          </Button>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            🔒 Pagamento 100% seguro • Acesso imediato
          </p>
        </Card>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { useState, useEffect } from "react";

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

const getTimeRemaining = () => {
  const endDate = new Date("2026-01-01T00:00:00").getTime();
  const now = new Date().getTime();
  const difference = endDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000)
  };
};

export const Pricing = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        
        {/* Urgency Banner */}
        <div className="max-w-lg mx-auto mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-destructive animate-pulse" />
            <span className="text-destructive font-bold text-lg">Oferta válida até 31/12!</span>
          </div>
          <div className="flex justify-center gap-3">
            <div className="text-center bg-background/50 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold text-foreground">{timeRemaining.days}</div>
              <div className="text-xs text-muted-foreground">dias</div>
            </div>
            <div className="text-center bg-background/50 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold text-foreground">{timeRemaining.hours}</div>
              <div className="text-xs text-muted-foreground">horas</div>
            </div>
            <div className="text-center bg-background/50 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold text-foreground">{timeRemaining.minutes}</div>
              <div className="text-xs text-muted-foreground">min</div>
            </div>
            <div className="text-center bg-background/50 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold text-foreground">{timeRemaining.seconds}</div>
              <div className="text-xs text-muted-foreground">seg</div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">
            Depois volta para <span className="line-through text-destructive font-semibold">R$ 297,00</span>
          </p>
        </div>
        
        <Card 
          className="max-w-lg mx-auto p-8 border-2 border-primary/20 hover:border-primary/40 transition-all"
          style={{ boxShadow: 'var(--hover-shadow)' }}
        >
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Oferta Especial de Lançamento
            </div>
            <div className="mb-2">
              <span className="line-through text-muted-foreground text-xl">De R$ 297,00</span>
            </div>
            <div className="mb-2">
              <span className="text-2xl text-muted-foreground">até</span>
              <span className="text-7xl md:text-8xl font-extrabold text-primary drop-shadow-lg mx-2">11x</span>
              <span className="text-2xl text-muted-foreground">de</span>
            </div>
            <div className="mb-4">
              <span className="text-6xl md:text-7xl font-extrabold text-primary">R$ 5,22</span>
            </div>
            <p className="text-lg text-muted-foreground font-medium">
              ou R$ 47,00 à vista • Acesso vitalício
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

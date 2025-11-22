import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Users, FileCode, Zap } from "lucide-react";

const benefits = [
  {
    icon: Code2,
    title: "Razor Pages Completo",
    description: "Aprenda desde o básico até recursos avançados do Razor Pages"
  },
  {
    icon: Database,
    title: "Entity Framework",
    description: "Domine o acesso a dados com EF Core e migrations"
  },
  {
    icon: Cloud,
    title: "Deploy na Azure",
    description: "Configure ambiente completo na nuvem com Azure DevOps"
  },
  {
    icon: Users,
    title: "Autenticação",
    description: "Implemente sistema de login e gerenciamento de usuários"
  },
  {
    icon: FileCode,
    title: "Projeto Real",
    description: "Construa um blog profissional do zero"
  },
  {
    icon: Zap,
    title: "Prático e Direto",
    description: "Aulas objetivas com foco em aplicação prática"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            O Que Você Vai Aprender
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todas as habilidades necessárias para criar aplicações web modernas com ASP.NET
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border-2 hover:border-primary/50"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: 'var(--card-shadow)'
              }}
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

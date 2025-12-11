import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Cloud, Shield, Database } from "lucide-react";

const portfolioItems = [
  {
    icon: Briefcase,
    title: "Blog Profissional",
    description: "Com painel administrativo, gestão de posts e comentários."
  },
  {
    icon: Cloud,
    title: "Ambiente Real",
    description: "Deploy automatizado (CI/CD) usando Azure DevOps."
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Sistema de Login, Permissões e Proteção contra ataques."
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "Integração completa com SQL Server e Entity Framework."
  }
];

export const Portfolio = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              O Que Você Vai Construir <span className="text-primary">(Seu Portfólio)</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Esqueça o "Hello World". Ao final deste curso, você terá um projeto robusto rodando na nuvem para mostrar em entrevistas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.title}
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

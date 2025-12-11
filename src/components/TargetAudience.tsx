import { CheckCircle } from "lucide-react";

const audiences = [
  {
    title: "Iniciantes em .NET",
    description: "Que sabem o básico de C# mas travam na hora de criar um projeto web completo."
  },
  {
    title: "Devs de outras linguagens",
    description: "Que querem migrar para o ecossistema Microsoft da forma mais rápida possível."
  },
  {
    title: "Estudantes",
    description: "Que precisam de um projeto de portfólio forte para conseguir o primeiro estágio ou vaga Júnior."
  }
];

export const TargetAudience = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Para Quem é Este <span className="text-primary">Treinamento?</span>
            </h2>
          </div>

          <div className="grid gap-6">
            {audiences.map((audience, index) => (
              <div 
                key={audience.title}
                className="flex items-start gap-4 bg-card/50 border border-border rounded-xl p-6 animate-fade-in hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{audience.title}</h3>
                  <p className="text-muted-foreground">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

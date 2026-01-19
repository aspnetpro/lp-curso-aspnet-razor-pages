import { AlertTriangle, Target } from "lucide-react";

export const Problem = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Problem Section */}
          <div className="mb-16 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O Problema: Por que a maioria dos iniciantes trava?
              </h2>
            </div>
            
            <div className="bg-card/50 border border-border rounded-xl p-6 md:p-8">
              <p className="text-lg text-muted-foreground mb-4">
                Você tenta aprender React, Angular, APIs, Banco de Dados e Docker tudo ao mesmo tempo? O resultado é quase sempre o mesmo: <strong className="text-foreground">Paralisia por análise.</strong>
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Você estuda muito, mas sente que não consegue sair do lugar e nunca está pronto para entregar um projeto real de ponta a ponta.
              </p>
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                <p className="text-foreground font-medium">
                  <strong>A Verdade:</strong> Grandes empresas não querem saber quantas ferramentas você "conhece", elas querem saber se você consegue <span className="text-primary">resolver problemas e entregar software funcionando</span>.
                </p>
              </div>
              <p className="text-xl text-center mt-6 text-primary font-semibold">
                É aqui que entra o ASP .NET Razor Pages.
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                A Solução: Domine o Padrão Corporativo
              </h2>
            </div>
            
            <div className="bg-card/50 border border-border rounded-xl p-6 md:p-8">
              <p className="text-lg text-muted-foreground mb-6">
                O Razor Pages é a recomendação oficial da Microsoft para o desenvolvimento de aplicações web produtivas. Ele elimina a complexidade desnecessária e permite que você foque no que importa: <strong className="text-primary">Lógica de Negócio, Banco de Dados e Entrega de Valor.</strong>
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Neste curso, você não vai apenas "assistir aulas". Você vai sentar ao lado de um CTO experiente e construir um <strong className="text-foreground">Blog Profissional Completo</strong>, idêntico ao que é usado no mercado de trabalho.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-muted-foreground bg-primary/5 rounded-r-lg">
                "Como CTO que lidera times em projetos gigantes (Centauro, Riachuelo), vejo muitos juniores falhando no básico. Criei este treinamento para te ensinar exatamente o que eu busco quando vou contratar um desenvolvedor."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

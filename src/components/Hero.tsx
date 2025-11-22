import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-curso-razor-pages.png";

export const Hero = () => {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: 'var(--hero-gradient)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="Curso Razor Pages" 
              className="w-full max-w-2xl h-auto"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Domine o ASP.NET Razor Pages do Zero ao Avançado
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Aprenda a criar aplicações web completas com ASP.NET Razor Pages. 
            Do ambiente de desenvolvimento até deploy na Azure, construa um blog profissional passo a passo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToPrice}
            >
              Começar Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Conteúdo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

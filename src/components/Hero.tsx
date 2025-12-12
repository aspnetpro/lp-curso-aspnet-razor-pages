import { Button } from "@/components/ui/button";
import { Shield, Trophy, Infinity } from "lucide-react";
import logo from "@/assets/logo-curso-razor-pages.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--hero-gradient)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 flex justify-center">
            <img 
              src={logo} 
              alt="Curso Razor Pages Pro" 
              className="w-full max-w-md h-auto"
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
            O Caminho Mais Rápido para se Tornar um <span className="text-primary">Desenvolvedor ASP .NET</span> e Conquistar sua Primeira Vaga
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Pare de se perder na complexidade de SPAs e Microsserviços agora. Aprenda a criar, do zero, aplicações web completas, seguras e performáticas — do código ao deploy na Azure — usando a tecnologia que o mercado corporativo realmente exige.
          </p>
          
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all mb-6"
            onClick={scrollToPrice}
          >
            QUERO DOMINAR O ASP.NET AGORA
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Infinity className="w-4 h-4 text-primary" />
              <span>Acesso Vitalício</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

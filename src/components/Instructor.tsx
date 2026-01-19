import instructorImage from "@/assets/instrutor.png";

export const Instructor = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Quem é seu <span className="text-primary">Professor?</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-card/50 border border-border rounded-2xl p-8 animate-fade-in">
            <div className="shrink-0">
              <img 
                src={instructorImage} 
                alt="Instrutor do Curso" 
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary mb-3">
                Especialista em ASP .NET, Arquiteto de Software e CTO na Leanwork Group
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Com <strong className="text-foreground">15 anos de experiência</strong> no campo de batalha, atuo na liderança técnica de grandes e-commerces como <strong className="text-foreground">Centauro, Ultrafarma e Riachuelo</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Não sou apenas um "professor de internet". Eu contrato, demito e treino desenvolvedores todos os dias. Sei exatamente o que o mercado exige e condensei esse conhecimento neste treinamento prático.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

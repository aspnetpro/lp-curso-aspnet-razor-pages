import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/20">
                <ShieldCheck className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Garantia Blindada de <span className="text-primary">7 Dias</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              O risco é todo meu. Entre, assista às aulas, configure seu ambiente. Se em 7 dias você achar que este curso não vai elevar o nível da sua carreira, eu devolvo <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem letras miúdas.
            </p>
            
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://pay.kiwify.com.br/Avl2i7g', '_blank')}
            >
              COMEÇAR AGORA COM RISCO ZERO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Posicionamos</span><br />
                empresas para<br />
                crescer com<br />
                consistência.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Tráfego pago, estratégias e criativos focados em escala.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('contato')}
              >
                Solicite uma consultoria gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('servicos')}
              >
                Ver serviços
              </Button>
            </div>
          </div>

          {/* Logo/Image Placeholder */}
          <div className="flex justify-center">
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center max-w-md w-full">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  <span className="text-destructive">COPY</span><span className="text-foreground">ADS</span>
                </h2>
                <p className="text-muted-foreground">Adicione sua logo aqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
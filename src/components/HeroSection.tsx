import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoComplete from "@/assets/copyads-logo-complete.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Content with integrated logo */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 md:gap-8 lg:gap-16">
              <div className="space-y-4 md:space-y-6 flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-primary">Posicionamos</span><br />
                  empresas para<br />
                  crescer com<br />
                  consistência.
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Tráfego pago, estratégias e criativos focados em escala.
                </p>
              </div>
              
              {/* Complete Logo */}
              <div className="flex-shrink-0">
                <img 
                  src={logoComplete} 
                  alt="COPYADS Logo" 
                  className="w-64 h-auto sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] object-contain"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-4 sm:px-6"
                onClick={() => scrollToSection('contato')}
              >
                Solicite uma consultoria gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base px-4 sm:px-6"
                onClick={() => scrollToSection('servicos')}
              >
                Ver serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
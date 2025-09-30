import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/copyads-logo.png";

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
        <div className="max-w-5xl mx-auto">
          {/* Content with integrated logo */}
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="space-y-6 flex-1">
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
              
              {/* Logo integrated with text */}
              <div className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt="COPYADS Logo" 
                  className="w-28 h-28 lg:w-36 lg:h-36 object-contain"
                />
              </div>
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
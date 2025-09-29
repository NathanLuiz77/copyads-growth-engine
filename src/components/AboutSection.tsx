import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Logo Placeholder */}
          <div className="flex justify-center">
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center max-w-md w-full">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  <span className="text-copy-red">COPY</span><span className="text-foreground">ADS</span>
                </h2>
                <p className="text-muted-foreground text-sm">Adicione uma imagem aqui</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Quem Somos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é levar uma assessoria eficaz de marketing para empresas que desejam 
                resultados concretos, para que conquistem mais clientes, aumentem a visibilidade 
                e posicionem suas marcas no digital e fora dele.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <Badge 
                variant="outline" 
                className="px-6 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-default"
              >
                Autenticidade
              </Badge>
              <Badge 
                variant="outline" 
                className="px-6 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-default"
              >
                Personalização
              </Badge>
              <Badge 
                variant="outline" 
                className="px-6 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-default"
              >
                Eficiência
              </Badge>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection('servicos')}
            >
              Ver serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
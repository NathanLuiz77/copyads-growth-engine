import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, FileText, Lightbulb, BarChart3, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: DollarSign,
      title: "Gestão de Redes Sociais",
      description: "Criamos e gerenciamos conteúdo relevante para suas redes sociais, aumentando o engajamento e fortalecendo sua marca."
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      description: "Campanhas estratégicas de anúncios online para atrair clientes qualificados e maximizar seu retorno sobre investimento."
    },
    {
      icon: FileText,
      title: "Criação de Conteúdo",
      description: "Produção de conteúdo persuasivo e relevante que conecta sua marca ao seu público-alvo e gera conversões."
    },
    {
      icon: Lightbulb,
      title: "Estratégia Digital",
      description: "Desenvolvimento de estratégias personalizadas para alcançar seus objetivos de negócio e destacar sua marca no ambiente digital."
    },
    {
      icon: BarChart3,
      title: "Análise e Acompanhamento",
      description: "Monitoramento constante de métricas e resultados para otimizar suas campanhas e garantir o melhor desempenho."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-section-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            O que fazemos por você
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções completas para impulsionar sua presença digital e alcançar resultados concretos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card border border-border/50 hover:border-copy-red/30 transition-all duration-300 group">
                <CardHeader className="space-y-6 pb-4">
                  <div className="w-16 h-16 bg-transparent rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-copy-red stroke-[1.5]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="w-16 h-1 bg-copy-red rounded-full"></div>
                </CardContent>
              </Card>
            );
          })}

          {/* CTA Card */}
          <Card className="relative bg-gradient-to-br from-muted/50 to-muted/30 border-2 border-copy-red/50 flex flex-col justify-center items-center text-center p-12 overflow-hidden group hover:border-copy-red/70 transition-all duration-300">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-copy-red/20 via-transparent to-copy-red/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-8">
              <h3 className="text-3xl font-bold text-foreground leading-tight">
                Pronto para impulsionar seus resultados?
              </h3>
              <Button 
                size="lg" 
                variant="default"
                onClick={() => scrollToSection('contato')}
                className="text-lg px-8 py-4 font-bold"
              >
                Solicite um orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
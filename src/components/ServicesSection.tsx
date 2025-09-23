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
    <section id="servicos" className="py-20">
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
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="w-12 h-1 bg-primary mt-6 rounded-full"></div>
                </CardContent>
              </Card>
            );
          })}

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 flex flex-col justify-center items-center text-center p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Pronto para impulsionar seus resultados?
              </h3>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('contato')}
              >
                Solicite um orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
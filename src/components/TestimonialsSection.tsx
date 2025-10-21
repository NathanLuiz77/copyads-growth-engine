import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "TechStart",
    text: "A COPYADS transformou nosso marketing digital. Em 6 meses, nosso ROI triplicou e continuamos crescendo."
  },
  {
    name: "Marina Costa",
    company: "E-commerce Plus",
    text: "Profissionais excepcionais! As campanhas são otimizadas constantemente e os resultados são impressionantes."
  },
  {
    name: "Roberto Lima",
    company: "Consultoria Pro",
    text: "Melhor investimento que fizemos. A equipe é dedicada e entende realmente de growth marketing."
  }
];

const TestimonialsSection = () => {
  const scrollToCards = () => {
    const cardsSection = document.getElementById('testimonials-cards');
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="depoimentos" className="py-12 md:py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Header */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Depoimentos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Veja os depoimentos de clientes satisfeitos com os resultados alcançados pela COPYADS.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-8 md:mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base px-6 md:px-8"
              onClick={scrollToCards}
            >
              Clique aqui para acessar os depoimentos
            </Button>
          </div>

          {/* Testimonials Cards */}
          <div id="testimonials-cards" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
                  {/* 5 Stars */}
                  <div className="flex gap-1 justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-sm md:text-base text-muted-foreground italic text-left leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="text-left space-y-1">
                    <p className="font-bold text-foreground text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
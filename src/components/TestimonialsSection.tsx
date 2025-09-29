import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Depoimentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Veja os depoimentos de clientes satisfeitos com os resultados alcançados pela COPYADS.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Clique aqui para acessar os depoimentos
            </Button>
          </div>

          {/* Testimonials Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-12 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Área de Depoimentos</h3>
                  <p className="text-muted-foreground">
                    Os depoimentos de clientes serão adicionados aqui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
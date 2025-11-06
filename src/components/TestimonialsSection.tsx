import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: "Grandes pessoas com intuito de um mundo melhor. 5 estrelas com toda certeza."
  },
  {
    text: "Ótimos profissionais, custo-benefício e ótima qualidade no serviço prestado."
  },
  {
    text: "Equipe alinhada e com foco no resultado que já está aparecendo!"
  },
  {
    text: "Estamos tendo uma ótima experiência com a agência na divulgação da nossa marca."
  },
  {
    text: "Agência com uns dos melhores profissionais do mercado em Marketing Digital!"
  }
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

          {/* Testimonials Carousel */}
          <div className="max-w-7xl mx-auto relative px-4 md:px-12">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full">
                      <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6 flex flex-col h-full">
                        {/* 5 Stars */}
                        <div className="flex gap-1 justify-start">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="text-sm md:text-base text-muted-foreground italic text-left leading-relaxed flex-grow">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Carousel>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === current 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
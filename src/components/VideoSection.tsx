import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-12 md:py-20 bg-section-blue">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Header */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Conheça a <span className="text-copy-red">COPY</span><span className="text-primary">ADS</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Veja como podemos transformar sua presença digital e impulsionar seus resultados.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-secondary rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:bg-secondary/80 transition-colors">
              <div className="text-center space-y-3 md:space-y-4 px-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">Vídeo Institucional</h3>
                  <p className="text-sm md:text-base text-muted-foreground">Insira o vídeo institucional da COPYADS aqui.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
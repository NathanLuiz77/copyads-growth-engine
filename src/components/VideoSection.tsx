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

          {/* Vídeo Institucional */}
          <div className="max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <video
                src="/videos/institucional.mp4"
                title="Vídeo Institucional COPYADS"
                className="w-full h-auto"
                controls
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
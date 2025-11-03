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

          {/* YouTube Video */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/2PuFyjAs7JA?si=tGRqM-PnWjF9K4bl"
                title="Vídeo Institucional COPYADS"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
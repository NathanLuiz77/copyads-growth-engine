import { Play } from "lucide-react";
import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
          <div className="max-w-[280px] md:max-w-sm mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <video
                ref={videoRef}
                src="/videos/institucional.mp4"
                title="Vídeo Institucional COPYADS"
                className="w-full h-auto relative z-[1]"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
              
              {/* Play Button Overlay - Only show when paused */}
              {!isPlaying && (
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-copy-red rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl z-[2]"
                  onClick={handlePlayClick}
                  aria-label="Play video"
                >
                  <Play className="h-8 w-8 md:h-10 md:w-10 text-white ml-1" fill="white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
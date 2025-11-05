import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    // Evita conflito com os controles nativos
    const video = e.currentTarget;
    const rect = video.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const videoHeight = rect.height;
    
    // Só alterna play/pause se clicar fora da área de controles (últimos 48px)
    if (clickY < videoHeight - 48) {
      handlePlayPauseClick();
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
          <div className="max-w-xs md:max-w-sm mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <video
                ref={videoRef}
                src="/videos/institucional.mp4"
                title="Vídeo Institucional COPYADS"
                className="w-full h-auto"
                controls
                playsInline
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
              
              {/* Play/Pause Button Overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ bottom: '48px' }}
              >
                <button
                  className="w-16 h-16 md:w-20 md:h-20 bg-copy-red rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg pointer-events-auto opacity-90 hover:opacity-100"
                  onClick={handlePlayPauseClick}
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8 md:h-10 md:w-10 text-white" fill="white" />
                  ) : (
                    <Play className="h-8 w-8 md:h-10 md:w-10 text-white ml-1" fill="white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
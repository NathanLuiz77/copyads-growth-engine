import { Mail, Instagram, MessageCircle } from "lucide-react";
import logoSymbol from "@/assets/copyads-symbol.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          {/* Coluna 1: Logo */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={logoSymbol} 
                alt="COPYADS Symbol" 
                className="w-7 h-7 md:w-8 md:h-8 object-contain"
              />
              <span className="text-xl md:text-2xl font-bold">
                <span className="text-copy-red">COPY</span><span className="text-white">ADS</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              COPYADS - Assessoria de Growth e Marketing
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-white font-semibold text-base md:text-lg">Navegação</h4>
            <nav className="flex flex-col space-y-2 md:space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-white font-semibold text-base md:text-lg">Contato</h4>
            <div className="space-y-2 md:space-y-3">
              <a 
                href="mailto:copyadsoficial@gmail.com"
                className="text-gray-400 hover:text-white transition-colors text-sm block"
              >
                copyadsoficial@gmail.com
              </a>
              <a 
                href="https://www.instagram.com/copyadsbrasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm block"
              >
                @copyadsbrasil
              </a>
            </div>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-white font-semibold text-base md:text-lg">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="mailto:copyadsoficial@gmail.com" 
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a 
                href="https://www.instagram.com/copyadsbrasil/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a 
                href="https://wa.me/message/H2ZR5UPKLQR4N1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória e direitos autorais */}
        <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 COPYADS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
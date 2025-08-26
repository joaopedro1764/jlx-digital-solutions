import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para desenvolvimento de sistema/landing page.";
    const whatsappUrl = `https://wa.me/5511978387886?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              JLX SYSTEMS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold px-6 py-2"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={handleWhatsAppContact}
                  className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold w-full"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
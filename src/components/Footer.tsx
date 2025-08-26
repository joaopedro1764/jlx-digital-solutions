import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Code,
  Globe,
  Smartphone,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Tenho interesse em conhecer os serviços da JLX SYSTEMS.";
    const whatsappUrl = `https://wa.me/5511978387886?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: Globe, name: "Landing Pages", id: "services" },
    { icon: Code, name: "Sistemas Web", id: "services" },
    { icon: Smartphone, name: "Apps Mobile", id: "services" }
  ];

  return (
    <footer className="bg-secondary/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              JLX SYSTEMS
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Especialistas em desenvolvimento de sistemas e landing pages.
              Transformamos suas ideias em soluções digitais de alto impacto.
            </p>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(service.id)}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <IconComponent className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {service.name}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Code className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  APIs & Integrações
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Globe className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Code className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Consultoria Tech
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppContact}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Solicitar Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">(11) 97838-7886</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">jlxsystemsdev@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Cotia, SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              {new Date().getFullYear()} © JLX SYSTEMS. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-sm">
                Desenvolvido por João e Laryssa
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-primary rounded-full text-primary-foreground hover:shadow-glow transition-all duration-300 group"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
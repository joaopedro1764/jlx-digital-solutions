import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Target } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Vi o site da JLX SYSTEMS e gostaria de solicitar um orçamento personalizado.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToServices = () => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/95" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Transformamos </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ideias
            </span>
            <br />
            <span className="text-foreground">em </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Soluções Digitais
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos <strong className="text-primary">sistemas personalizados</strong> e 
            <strong className="text-primary"> landing pages de alta conversão</strong> para 
            impulsionar o crescimento do seu negócio.
          </p>

          {/* Features Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2 shadow-glow">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Sistemas</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2 shadow-glow">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Landing Pages</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2 shadow-glow">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Otimização</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold px-8 py-4 text-lg group"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 text-lg"
            >
              Conhecer Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-sm text-muted-foreground mb-4">Tecnologias que utilizamos:</p>
            <div className="flex flex-wrap justify-center gap-6 opacity-60">
              <span className="px-4 py-2 bg-card rounded-lg border font-medium">React</span>
              <span className="px-4 py-2 bg-card rounded-lg border font-medium">Node.js</span>
              <span className="px-4 py-2 bg-card rounded-lg border font-medium">TypeScript</span>
              <span className="px-4 py-2 bg-card rounded-lg border font-medium">Python</span>
              <span className="px-4 py-2 bg-card rounded-lg border font-medium">WordPress</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
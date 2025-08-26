import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Trophy, 
  Clock, 
  Star,
  ArrowRight,
  Code,
  Lightbulb,
  Target
} from "lucide-react";

const AboutSection = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de conhecer melhor a JLX SYSTEMS e seus serviços.";
    const whatsappUrl = `https://wa.me/5511978387886?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Projetos Entregues",
      description: "Soluções desenvolvidas para diversos segmentos"
    },
    {
      icon: Clock,
      number: "24h",
      label: "Suporte Técnico",
      description: "Atendimento rápido e eficiente"
    },
    {
      icon: Trophy,
      number: "100%",
      label: "Clientes Satisfeitos",
      description: "Focamos na satisfação total do cliente"
    },
    {
      icon: Star,
      number: "5.0",
      label: "Avaliação Média",
      description: "Excelência reconhecida pelos clientes"
    }
  ];

  const values = [
    {
      icon: Code,
      title: "Tecnologia de Ponta",
      description: "Utilizamos as mais modernas tecnologias e frameworks para garantir soluções robustas e escaláveis."
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Sempre buscamos as melhores práticas e soluções inovadoras para resolver os desafios dos nossos clientes."
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Nosso objetivo é entregar soluções que realmente impactem positivamente o crescimento do seu negócio."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Sobre a </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">JLX SYSTEMS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa especializada em desenvolvimento de soluções tecnológicas, 
            com foco em sistemas personalizados e landing pages de alta conversão.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Nossa História e Missão
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                A <strong className="text-primary">JLX SYSTEMS</strong> nasceu da paixão por transformar 
                ideias em soluções digitais eficientes. Nossa equipe combina expertise técnica com 
                visão estratégica para entregar projetos que realmente fazem a diferença.
              </p>
              <p className="text-lg leading-relaxed">
                Acreditamos que a tecnologia deve ser acessível e orientada a resultados. Por isso, 
                desenvolvemos soluções sob medida que se adaptam perfeitamente às necessidades de cada cliente.
              </p>
              <p className="text-lg leading-relaxed">
                Nosso compromisso é com a <strong className="text-primary">excelência técnica</strong>, 
                <strong className="text-primary"> inovação constante</strong> e 
                <strong className="text-primary"> resultados mensuráveis</strong>.
              </p>
            </div>
            <Button 
              onClick={handleWhatsAppContact}
              className="mt-6 bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold"
            >
              Conhecer Nossa Equipe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-tech">
              <div className="bg-background/95 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4 text-foreground">Por que escolher a JLX SYSTEMS?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Desenvolvimento ágil e eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Suporte técnico especializado</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Preços competitivos e transparentes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Foco em resultados mensuráveis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300 border-border/50 bg-gradient-card group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Nossos Valores e Diferenciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
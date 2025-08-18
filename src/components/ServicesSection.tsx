import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Code2, 
  Smartphone, 
  Database, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const handleWhatsAppContact = (service: string) => {
    const message = `Olá! Tenho interesse no serviço de ${service}. Gostaria de solicitar um orçamento.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Páginas de alta conversão que transformam visitantes em clientes",
      features: [
        "Design responsivo e moderno",
        "Otimização para conversão",
        "Integração com WhatsApp",
        "Analytics e métricas"
      ],
      color: "text-primary"
    },
    {
      icon: Code2,
      title: "Sistemas Web",
      description: "Desenvolvimento de sistemas personalizados para sua empresa",
      features: [
        "Arquitetura escalável",
        "Interface intuitiva",
        "Segurança avançada",
        "Suporte contínuo"
      ],
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos móveis nativos e híbridos para iOS e Android",
      features: [
        "Performance otimizada",
        "UI/UX profissional",
        "Sincronização em nuvem",
        "Push notifications"
      ],
      color: "text-secondary"
    },
    {
      icon: Database,
      title: "APIs & Integrações",
      description: "Desenvolvimento de APIs REST e integrações com sistemas externos",
      features: [
        "Documentação completa",
        "Versionamento de API",
        "Autenticação segura",
        "Monitoramento 24/7"
      ],
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "E-commerce",
      description: "Lojas virtuais completas com gestão de produtos e vendas",
      features: [
        "Gateway de pagamento",
        "Gestão de estoque",
        "Relatórios de vendas",
        "SEO otimizado"
      ],
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Consultoria Tech",
      description: "Análise e otimização de infraestrutura tecnológica",
      features: [
        "Auditoria de código",
        "Arquitetura de soluções",
        "Melhores práticas",
        "Treinamento de equipe"
      ],
      color: "text-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Nossos </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas completas para empresas de todos os tamanhos, 
            desde startups até grandes corporações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="relative group hover:shadow-card transition-all duration-300 border-border/50 bg-gradient-card hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleWhatsAppContact(service.title)}
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl shadow-tech max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Nossa equipe está pronta para desenvolver a solução perfeita para seu negócio.
            </p>
            <Button 
              onClick={() => handleWhatsAppContact("Solução Personalizada")}
              variant="secondary"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 font-semibold px-8 py-4"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
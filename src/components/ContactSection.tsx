import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send,
  MapPin,
  Clock
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleWhatsAppContact = () => {
    const message = "Olá! Vi o site da JLX SYSTEMS e gostaria de conversar sobre um projeto.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio do formulário
    console.log("Form submitted:", formData);
    
    // Preparar mensagem para WhatsApp com dados do formulário
    const whatsappMessage = `Olá! Segue meu contato via formulário do site:
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone || 'Não informado'}
Empresa: ${formData.company || 'Não informado'}
Serviço de interesse: ${formData.service || 'Não especificado'}

Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Formulário enviado!",
      description: "Redirecionando para WhatsApp para finalizar contato."
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Entre em </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Nossa equipe está aqui para ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border/50 bg-gradient-card hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                  WhatsApp Direto
                </CardTitle>
                <CardDescription>
                  Converse conosco agora mesmo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="font-semibold text-foreground">Telefone</p>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">contato@jlxsystems.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="font-semibold text-foreground">Localização</p>
                      <p className="text-muted-foreground">São Paulo, SP</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="font-semibold text-foreground">Horário</p>
                      <p className="text-muted-foreground">Seg - Sex: 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Solicite seu Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em até 24h
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço de Interesse</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="landing-page">Landing Page</SelectItem>
                        <SelectItem value="sistema-web">Sistema Web</SelectItem>
                        <SelectItem value="app-mobile">App Mobile</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="api-integracao">API & Integração</SelectItem>
                        <SelectItem value="consultoria">Consultoria Tech</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold py-3"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Solicitação
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios. Seus dados estão seguros conosco.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-products.jpg";
import featuredProduct from "@/assets/featured-product.jpg";
import { ExternalLink, Shield, TrendingUp, Award, RefreshCw } from "lucide-react";

const Index = () => {
  const products = [
    {
      title: "Whey Protein Concentrado - 900g",
      image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&h=400&fit=crop",
      price: "R$ 89,90",
      affiliateLink: "https://amazon.com.br"
    },
    {
      title: "Kit Elásticos para Treino",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
      price: "R$ 54,90",
      affiliateLink: "https://amazon.com.br"
    },
    {
      title: "Smartwatch Fitness Tracker",
      image: "https://images.unsplash.com/photo-1523395243481-163f8f6155ab?w=400&h=400&fit=crop",
      price: "R$ 149,90",
      affiliateLink: "https://amazon.com.br"
    },
    {
      title: "Garrafa Térmica 1L",
      image: "https://images.unsplash.com/photo-1624467463843-1c62a0eca8a2?w=400&h=400&fit=crop",
      price: "R$ 39,90",
      affiliateLink: "https://amazon.com.br"
    },
    {
      title: "Tapete de Yoga Premium",
      image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&h=400&fit=crop",
      price: "R$ 69,90",
      affiliateLink: "https://amazon.com.br"
    },
    {
      title: "Fone Bluetooth Sport",
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop",
      price: "R$ 129,90",
      affiliateLink: "https://amazon.com.br"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      text: "Produtos de excelente qualidade e entrega super rápida! Recomendo.",
      rating: 5
    },
    {
      name: "Marina Costa",
      text: "Adorei a curadoria! Encontrei exatamente o que procurava.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      text: "Preços justos e produtos verificados. Voltarei a comprar!",
      rating: 5
    }
  ];

  const scrollToFeatured = () => {
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Hero Products" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Os produtos que valem o{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                seu dinheiro
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Selecionados com cuidado pela Loja Império do Norte, direto da Amazon.
            </p>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToFeatured}
              className="animate-glow group"
            >
              Ver Ofertas
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section id="featured" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Produto da Semana
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Destaque Especial
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-background border border-border/50 rounded-2xl p-8 hover:shadow-glow-green transition-all duration-300">
              <div className="relative">
                <img 
                  src={featuredProduct} 
                  alt="Creatina Monohidratada" 
                  className="w-full rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Soldiers Nutrition Creatina Monohidratada – 300g
                </h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    ✓ 100% Creatina Pura<br />
                    ✓ Melhora Performance<br />
                    ✓ Ganho de Força e Massa Muscular<br />
                    ✓ 60 doses por embalagem
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-3xl font-bold text-primary">R$ 79,90</p>
                  <Button 
                    variant="affiliate" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://amazon.com.br', '_blank')}
                  >
                    Conferir na Amazon
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Link afiliado seguro – você será redirecionado para a Amazon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="produtos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Outros Produtos{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Recomendados
              </span>
            </h2>
            <p className="text-muted-foreground">
              Seleção especial de produtos com melhor custo-benefício
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que confiar na{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Loja Império do Norte?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center space-y-4 p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Curadoria Especializada</h3>
              <p className="text-muted-foreground text-sm">
                Selecionamos apenas os melhores produtos com excelente custo-benefício
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Atualizações Semanais</h3>
              <p className="text-muted-foreground text-sm">
                Novos produtos e ofertas toda semana para você aproveitar
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">100% Seguro</h3>
              <p className="text-muted-foreground text-sm">
                Links oficiais da Amazon com proteção garantida
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Melhor Preço</h3>
              <p className="text-muted-foreground text-sm">
                Monitoramos preços para trazer as melhores ofertas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre a Loja{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Império do Norte
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              A <strong className="text-foreground">Loja Império do Norte</strong> nasceu com a missão de facilitar sua vida na busca pelos melhores produtos da Amazon. Sabemos que a quantidade de opções pode ser avassaladora, e é por isso que fazemos o trabalho pesado por você.
            </p>
            <p>
              Nossa equipe analisa, testa e seleciona cuidadosamente cada produto que recomendamos, levando em consideração qualidade, preço, avaliações de clientes e nosso próprio teste de experiência. Trabalhamos com total transparência e nosso compromisso é único: ajudar você a fazer as melhores escolhas.
            </p>
            <p>
              Como afiliados da Amazon, quando você realiza uma compra através dos nossos links, recebemos uma pequena comissão - sem nenhum custo adicional para você. Esse suporte nos permite continuar trazendo as melhores recomendações toda semana.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

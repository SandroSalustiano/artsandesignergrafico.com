import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  featured?: boolean;
};

const logos: Project[] = [
  {
    title: "Américo",
    category: "Logotipo",
    description: "Identidade visual desenvolvida para Américo.",
    image: "https://artsandesignergrafico.netlify.app/logos/americo.jpg",
  },
  {
    title: "Barbearia",
    category: "Logotipo",
    description: "Marca e comunicação visual para barbearia.",
    image: "https://artsandesignergrafico.netlify.app/logos/barbearia.jpg",
  },
  {
    title: "Associação dos Moradores Rurais",
    category: "Logotipo",
    description: "Identidade visual para associação de moradores rurais.",
    image: "https://artsandesignergrafico.netlify.app/logos/Associacaodosmoradoresrurais.jpg",
  },
  {
    title: "Família do Acampa",
    category: "Logotipo",
    description: "Criação de logo para grupo de acampamento.",
    image: "https://artsandesignergrafico.netlify.app/logos/familiadoacampa.jpg",
  },
  {
    title: "Grupo Seg",
    category: "Logotipo",
    description: "Identidade visual para empresa de segurança.",
    image: "https://artsandesignergrafico.netlify.app/logos/grupo-seg.jpg",
  },
  {
    title: "Sandra Ateliê",
    category: "Logotipo",
    description: "Logo e material gráfico para ateliê de costura.",
    image: "https://artsandesignergrafico.netlify.app/logos/sandraatelie.jpg",
  },
  {
    title: "Velozes",
    category: "Logotipo",
    description: "Identidade visual para equipe esportiva.",
    image: "https://artsandesignergrafico.netlify.app/logos/velozes.jpg",
  },
  {
    title: "VSF",
    category: "Logotipo",
    description: "Criação de logo para projeto especial.",
    image: "https://artsandesignergrafico.netlify.app/logos/vsf.jpg",
  },
];

const camisasReligiosas: Project[] = [
  {
    title: "Santo Antônio",
    category: "Camisa Religiosa",
    description: "Design exclusivo para camisa evangélica.",
    image: "https://artsandesignergrafico.netlify.app/camisas-evangelicas/santoantonio2.jpg",
  },
  {
    title: "Cheios do Espírito Santo",
    category: "Camisa Religiosa",
    description: "Design exclusivo para camisa evangélica.",
    image: "https://artsandesignergrafico.netlify.app/camisas-evangelicas/cheios-do-espirito-santo.jpg",
  },
  {
    title: "Santa Luzia",
    category: "Camisa Religiosa",
    description: "Design exclusivo para camisa evangélica.",
    image: "https://artsandesignergrafico.netlify.app/camisas-evangelicas/santaluzia.jpg",
  },
  {
    title: "Santa Terezinha",
    category: "Camisa Religiosa",
    description: "Design exclusivo para camisa evangélica.",
    image: "https://artsandesignergrafico.netlify.app/camisas-evangelicas/santaterezinha.jpg",
  },
  {
    title: "Santo Antônio II",
    category: "Camisa Religiosa",
    description: "Design exclusivo para camisa evangélica.",
    image: "https://artsandesignergrafico.netlify.app/camisas-evangelicas/santoantonio.jpg",
  },
];

const camisasTerceirao: Project[] = [
  {
    title: "Águia",
    category: "Camisa Terceirão",
    description: "Design exclusivo para camisa de terceirão.",
    image: "https://artsandesignergrafico.netlify.app/terceirao/aguia.jpg",
  },
  {
    title: "Cobra",
    category: "Camisa Terceirão",
    description: "Design exclusivo para camisa de terceirão.",
    image: "https://artsandesignergrafico.netlify.app/terceirao/cobra.jpg",
  },
  {
    title: "Dragão",
    category: "Camisa Terceirão",
    description: "Design exclusivo para camisa de terceirão.",
    image: "https://artsandesignergrafico.netlify.app/terceirao/dragao.jpg",
  },
  {
    title: "Jaguar",
    category: "Camisa Terceirão",
    description: "Design exclusivo para camisa de terceirão.",
    image: "https://artsandesignergrafico.netlify.app/terceirao/jaguar.jpg",
  },
  {
    title: "Lobo",
    category: "Camisa Terceirão",
    description: "Design exclusivo para camisa de terceirão.",
    image: "https://artsandesignergrafico.netlify.app/terceirao/lobo.jpg",
  },
];

const ProjectCarousel = ({ items, label }: { items: Project[]; label: string }) => (
  <div className="mb-16">
    <motion.h3
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl font-display font-bold mb-6 text-center"
    >
      {label}
    </motion.h3>
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {items.map((project, i) => (
          <CarouselItem key={project.title} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-gold h-full"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-card">
                <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">{project.category}</span>
                <h3 className="text-lg font-display font-bold mt-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-8">
        <CarouselPrevious className="static translate-y-0 border-border hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="static translate-y-0 border-border hover:bg-primary hover:text-primary-foreground" />
      </div>
    </Carousel>
  </div>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-3">Trabalhos realizados</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Nosso <span className="text-gradient-gold">Portfólio</span>
          </h2>
        </motion.div>

        {/* Featured project */}
        <motion.a
          href="https://harukicarservice.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative block rounded-2xl overflow-hidden mb-16 border border-border hover:border-primary/40 transition-all duration-500"
        >
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80"
                alt="Haruki Car Service"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
              <span className="text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-3">Logotipo + Site</span>
              <h3 className="text-3xl font-display font-bold mb-4">Haruki Car Service</h3>
              <p className="text-muted-foreground mb-6">Identidade visual completa e site profissional.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Ver Projeto <ExternalLink size={16} />
              </span>
            </div>
          </div>
        </motion.a>

        {/* Carousels by category */}
        <ProjectCarousel items={logos} label="Logotipos" />
        <ProjectCarousel items={camisasReligiosas} label="Camisas Religiosas" />
        <ProjectCarousel items={camisasTerceirao} label="Camisas Terceirão" />
      </div>
    </section>
  );
};

export default PortfolioSection;

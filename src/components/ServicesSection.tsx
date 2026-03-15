import { motion } from "framer-motion";
import { Pen, Globe, Palette, Layers } from "lucide-react";

const services = [
  {
    icon: Pen,
    title: "Logotipos",
    description: "Criação de logotipos únicos que comunicam a essência da sua marca com impacto e memorabilidade.",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Desenvolvimento de sites modernos e responsivos que convertem visitantes em clientes.",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Sistemas visuais completos: cores, tipografia, padrões e aplicações para fortalecer sua marca.",
  },
  {
    icon: Layers,
    title: "Material Gráfico",
    description: "Cartões de visita, flyers, banners e todo material que sua empresa precisa para se destacar.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-3">O que fazemos</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-gold"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

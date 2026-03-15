import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "250", label: "Projetos Entregues" },
  { icon: Users, value: "70", label: "Clientes Satisfeitos" },
  { icon: Clock, value: "20+", label: "Anos de Experiência" },
  { icon: Star, value: "100%", label: "Dedicação" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-3">Quem somos</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Sobre o <span className="text-gradient-gold">Artsan</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Somos um estúdio de design gráfico liderado por <strong className="text-foreground">Sandro Salustiano</strong>, 
              com foco em criar marcas únicas e memoráveis. Unimos criatividade e técnica para oferecer 
              soluções visuais personalizadas que elevam a imagem do seu negócio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Especializados em logotipos para empresas e desenvolvimento de sites profissionais, 
              acreditamos que uma identidade visual forte comunica valores, diferencia uma marca 
              e gera conexões reais com o público.
            </p>
            <a
              href="#contato"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-gold"
            >
              Vamos Conversar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-500"
              >
                <stat.icon className="text-primary mx-auto mb-3" size={28} />
                <p className="text-3xl font-display font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

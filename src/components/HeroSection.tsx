import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Design studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6"
          >
            Designer Gráfico & Logotipos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-extrabold leading-[1.05] mb-6"
          >
            Criamos marcas que{" "}
            <span className="text-gradient-gold">marcam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Logotipos profissionais e sites que transformam a identidade visual 
            da sua empresa. Design com propósito e originalidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/5519989797511"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-gold"
            >
              Solicitar Orçamento
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Ver Portfólio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-3">Fale conosco</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Vamos criar algo <span className="text-gradient-gold">incrível</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Conte-nos sobre o seu projeto. Estamos prontos para transformar sua ideia em uma marca memorável.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <a
              href="https://wa.me/5519989797511"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-gold group"
            >
              <Phone className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
              <p className="font-display font-semibold text-sm">WhatsApp</p>
              <p className="text-muted-foreground text-xs mt-1">Fale agora</p>
            </a>

            <a
              href="mailto:artsandesignergrafico@gmail.com"
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-gold group"
            >
              <Mail className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
              <p className="font-display font-semibold text-sm">E-mail</p>
              <p className="text-muted-foreground text-xs mt-1">Envie uma mensagem</p>
            </a>

            <a
              href="https://www.instagram.com/artsan.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-gold group"
            >
              <Instagram className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
              <p className="font-display font-semibold text-sm">Instagram</p>
              <p className="text-muted-foreground text-xs mt-1">@artsan.design</p>
            </a>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/5519989797511"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-gold"
          >
            <Send size={20} />
            Solicitar Orçamento Agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

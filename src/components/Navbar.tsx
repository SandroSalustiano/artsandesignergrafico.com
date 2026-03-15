import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-tight">
          <span className="text-gradient-gold">Artsan</span>
          <span className="text-foreground ml-1 font-light text-sm tracking-widest uppercase">Design</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5519989797511"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Solicitar Orçamento
        </a>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-glass border-t border-border"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold"
              >
                Solicitar Orçamento
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

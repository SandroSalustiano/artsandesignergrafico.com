const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm">
          <span className="text-gradient-gold font-bold">Artsan</span>
          <span className="text-muted-foreground ml-2">Design Gráfico</span>
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Artsan Design. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

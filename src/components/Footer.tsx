const Footer = () => {
  const menuItems = [
    { id: "inicio", label: "Início" },
    { id: "quem-somos", label: "Quem Somos" },
    { id: "eventos", label: "Eventos" },
    { id: "associados", label: "Associados" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <footer className="border-t border-neutral-800 bg-black py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-xl font-bold text-white">
            CVB Campina Grande
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-neutral-400 transition-colors hover:text-emerald-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Convention Bureau Campina Grande. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

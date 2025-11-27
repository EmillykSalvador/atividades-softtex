import logo from '../assets/logo_cvbcg.svg';

const Header = () => {
  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "quem-somos", label: "Quem Somos" },
    { id: "o-que-fazemos", label: "O que Fazemos" },
    { id: "diretoria", label: "Diretoria" },
    { id: "eventos", label: "Eventos" },
    { id: "associados", label: "Associados" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="CVB Campina Grande" 
            className="h-10 w-auto"
          />
          <span className="text-lg font-bold text-white">
            CVB Campina Grande
          </span>
        </div>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-neutral-300 transition-colors hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-white">
          <span className="text-2xl">☰</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

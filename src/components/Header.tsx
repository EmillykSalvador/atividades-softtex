import { useState } from "react";
import logo from "../assets/logo_cvbcg.svg";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react"; // Apenas para o ícone de idioma

const Header = () => {
  const { t, i18n } = useTranslation("header");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: t("menu.inicio") },
    { id: "quem-somos", label: t("menu.quemSomos") },
    { id: "o-que-fazemos", label: t("menu.oQueFazemos") },
    { id: "diretoria", label: t("menu.diretoria") },
    { id: "eventos", label: t("menu.eventos") },
    { id: "associados", label: t("menu.associados") },
    { id: "contato", label: t("menu.contato") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* HEADER PRINCIPAL */}
      <div className="bg-black/90 backdrop-blur border-b border-neutral-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt={t("logoAlt")} className="h-10 w-auto" />
            <span className="text-lg font-bold text-white">CVB Campina Grande</span>
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

          {/* SEÇÃO IDIOMA NO CANTO DIREITO */}
          <div className="relative flex items-center gap-3">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-emerald-400 transition-colors"
              aria-label="Selecionar idioma"
              aria-expanded={isLanguageOpen}
            >
              <Globe className="h-5 w-5" aria-hidden="true" />
              Idioma
            </button>

            {/* DROPDOWN DE BANDEIRAS */}
            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 flex flex-col gap-2 bg-black/90 backdrop-blur border border-neutral-700 rounded-lg p-3 shadow-lg z-10">
                <img
                  src="/bandeiras/brasil.svg"
                  alt="Português"
                  className="h-8 w-8 object-cover cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => {
                    i18n.changeLanguage("pt");
                    setIsLanguageOpen(false);
                  }}
                />
                <img
                  src="/bandeiras/eua.svg"
                  alt="English"
                  className="h-8 w-8 object-cover cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setIsLanguageOpen(false);
                  }}
                />
                <img
                  src="/bandeiras/espanha.svg"
                  alt="Español"
                  className="h-8 w-8 object-cover cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => {
                    i18n.changeLanguage("es");
                    setIsLanguageOpen(false);
                  }}
                />
              </div>
            )}
          </div>

          <button className="md:hidden text-white" aria-label="Abrir menu">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

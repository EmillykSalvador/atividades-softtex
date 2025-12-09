import { useTranslation } from "react-i18next";
import logo from "../assets/logo_cvbcg.svg";
import { Home, Users, Calendar, Handshake, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-black text-neutral-300 border-t border-neutral-800" translate="no">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* LOGO + SOBRE */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt={t("logoAlt")} className="h-12 w-auto" />
              <span className="text-xl font-semibold text-white">CVB Campina Grande</span>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm">
              {t("description", { defaultValue: "Promovendo o turismo, eventos e desenvolvimento da região." })}
            </p>
          </div>

          {/* MENU — COLUNAS RESPONSIVAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:w-auto">

            <div className="group">
              <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                <Home className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                {t("menu.title", { defaultValue: "Menu" })}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="flex items-center gap-2 hover:text-emerald-400 transition group-hover:translate-x-1" aria-label={t("menu.home")}>
                    <Home className="h-4 w-4" aria-hidden="true" />
                    {t("menu.home")}
                  </a>
                </li>
                <li>
                  <a href="#quem-somos" className="flex items-center gap-2 hover:text-emerald-400 transition group-hover:translate-x-1" aria-label={t("menu.about")}>
                    <Users className="h-4 w-4" aria-hidden="true" />
                    {t("menu.about")}
                  </a>
                </li>
                <li>
                  <a href="#eventos" className="flex items-center gap-2 hover:text-emerald-400 transition group-hover:translate-x-1" aria-label={t("menu.events")}>
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {t("menu.events")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="group">
              <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                <Handshake className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                {t("sections.title", { defaultValue: "Seções" })}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#associados" className="flex items-center gap-2 hover:text-emerald-400 transition group-hover:translate-x-1" aria-label={t("menu.partners")}>
                    <Handshake className="h-4 w-4" aria-hidden="true" />
                    {t("menu.partners")}
                  </a>
                </li>
                <li>
                  <a href="#contato" className="flex items-center gap-2 hover:text-emerald-400 transition group-hover:translate-x-1" aria-label={t("menu.contact")}>
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {t("menu.contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="group">
              <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                {t("contact.title", { defaultValue: "Contato" })}
              </h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Campina Grande - PB
                </li>
                <li>Brasil</li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  contato@cvbcg.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} Convention Bureau Campina Grande — {t("rights")}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
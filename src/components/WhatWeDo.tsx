import { useTranslation } from "react-i18next";
// Opcional: Adicione ícones se quiser (instale lucide-react se não tiver)
import { Star, Eye, Handshake, Megaphone, HelpCircle, BookOpen, Award, BarChart, Users } from "lucide-react";

const WhatWeDo = () => {
  const { t } = useTranslation("whatwedo");

  const services = [
    {
      key: "captacao",
      color: "text-emerald-400",
      icon: Star, // Ícone opcional para cada serviço
    },
    {
      key: "monitoramento",
      color: "text-blue-400",
      icon: Eye,
    },
    {
      key: "intermediacao",
      color: "text-orange-400",
      icon: Handshake,
    },
    {
      key: "promocao",
      color: "text-pink-400",
      icon: Megaphone,
    },
    {
      key: "apoio",
      color: "text-yellow-400",
      icon: HelpCircle,
    },
    {
      key: "consultoria",
      color: "text-indigo-400",
      icon: BookOpen,
    },
    {
      key: "qualificacao",
      color: "text-emerald-400",
      icon: Award,
    },
    {
      key: "observatorio",
      color: "text-orange-400",
      icon: BarChart,
    },
    {
      key: "articulacao",
      color: "text-pink-400",
      icon: Users,
    },
  ];

  return (
    <section className="bg-neutral-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-white">
          {t("title")}
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.key} // Melhor key: use algo único
              className={`group rounded-xl border border-neutral-700 bg-neutral-800 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-${service.color.split('-')[1]}-500`} // Hover usa a cor do serviço
            >
              <div className={`mb-3 text-3xl ${service.color}`}>
                {service.icon ? <service.icon className="h-8 w-8" /> : "●"} {/* Ícone ou ponto colorido */}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-white transition-colors">
                {t(`${service.key}.title`)}
              </h3>

              <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                {t(`${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

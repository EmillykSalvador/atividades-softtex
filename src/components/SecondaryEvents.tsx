import { useTranslation } from "react-i18next";
// Opcional: Ícones para visual (remova se não quiser)
import { Calendar } from "lucide-react";

const SecondaryEvents = () => {
  const { t } = useTranslation("secondaryEvents");

  const secondaryEvents = t("list", { returnObjects: true }) as string[];

  return (
    <section className="bg-neutral-800 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-yellow-400">
          {t("title")}
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryEvents.map((event, index) => (
            <div
              key={event} // Melhor key: use o evento como string única
              className="group rounded-xl border border-neutral-700 bg-neutral-900 p-6 text-neutral-300 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-yellow-500/50 hover:bg-neutral-800"
            >
              <div className="mb-3 flex items-center gap-3">
                <Calendar className={`h-6 w-6 ${index % 2 === 0 ? 'text-yellow-400' : 'text-yellow-300'}`} />
                <span className="text-sm font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  Evento {index + 1}
                </span>
              </div>

              <p className="text-base leading-relaxed group-hover:text-neutral-200 transition-colors">
                {event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondaryEvents;
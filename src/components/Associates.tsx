import { useTranslation } from "react-i18next";

const Associates = () => {
  const { t } = useTranslation("associates");

  const associates = t("associates", { returnObjects: true }) as string[];
  const benefits = t("benefits", { returnObjects: true }) as string[];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-orange-500">
          {t("title")}
        </h2>

        <div className="mb-16 grid gap-6 md:grid-cols-4">
          {associates.map((associate, index) => (
            <div
              key={index}
              className="flex h-32 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400"
            >
              [Logo {associate}]
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 p-8 md:p-12">
          <h3 className="mb-4 text-2xl font-bold text-slate-900">
            {t("callTitle")}
          </h3>

          <p className="mb-6 text-slate-600">{t("callText")}</p>

          <ul className="mb-8 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-600">
                <span className="text-orange-500">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <button className="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600">
            {t("button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Associates;

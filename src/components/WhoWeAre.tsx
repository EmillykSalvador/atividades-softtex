const WhoWeAre = () => {
  const cards = [
    {
      title: "Missão",
      description: "Promover Campina Grande como destino de eventos e negócios.",
    },
    {
      title: "Visão",
      description: "Ser referência nacional em turismo de eventos e negócios.",
    },
    {
      title: "Valores",
      description: "Transparência, colaboração e compromisso com o desenvolvimento local.",
    },
  ];

  return (
    <section className="bg-neutral-800 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-3xl font-bold text-indigo-400">
          Quem somos
        </h2>

        <p className="mb-12 max-w-3xl text-lg text-neutral-300">
          O Convention Bureau de Campina Grande é uma organização que atua
          como elo entre o trade turístico, poder público e iniciativa privada,
          com o objetivo de captar e promover eventos na cidade.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl border border-indigo-500/40 bg-neutral-900/60 p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-indigo-300">
                {card.title}
              </h3>
              <p className="text-sm text-neutral-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

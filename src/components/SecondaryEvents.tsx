const SecondaryEvents = () => {
  const secondaryEvents = [
    "Workshop de Capacitação Turística - 05 Dez",
    "Reunião Mensal de Associados - 12 Dez",
    "Visita Técnica ao Centro de Convenções - 18 Dez",
    "Palestra sobre Eventos Sustentáveis - 20 Dez",
  ];

  return (
    <section className="bg-neutral-800 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-3xl font-bold text-yellow-400">
          Eventos secundários
        </h2>

        <div className="space-y-4">
          {secondaryEvents.map((event, index) => (
            <div
              key={index}
              className="rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-neutral-300"
            >
              {event}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondaryEvents;

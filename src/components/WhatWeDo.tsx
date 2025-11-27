const WhatWeDo = () => {
  const services = [
    {
      title: "Captação de eventos",
      description: "Atraímos grandes eventos para Campina Grande.",
      color: "text-emerald-400",
    },
    {
      title: "Monitoramento",
      description: "Acompanhamos eventos e oportunidades.",
      color: "text-blue-400",
    },
    {
      title: "Intermediação",
      description: "Conectamos organizadores e fornecedores locais.",
      color: "text-orange-400",
    },
    {
      title: "Promoção",
      description: "Divulgamos a cidade como destino de eventos.",
      color: "text-pink-400",
    },
    {
      title: "Apoio institucional",
      description: "Facilitamos relações com poder público.",
      color: "text-yellow-400",
    },
    {
      title: "Consultoria",
      description: "Orientamos sobre infraestrutura e serviços.",
      color: "text-indigo-400",
    },
    {
      title: "Qualificação",
      description: "Capacitamos o trade turístico local.",
      color: "text-emerald-400",
    },
    {
      title: "Observatório",
      description: "Coletamos e analisamos dados do setor.",
      color: "text-orange-400",
    },
    {
      title: "Articulação",
      description: "Criamos parcerias estratégicas.",
      color: "text-pink-400",
    },
  ];

  return (
    <section className="bg-neutral-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-white">
          O que fazemos
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-700 bg-neutral-800 p-6 transition-colors hover:border-neutral-600"
            >
              <div className={`mb-3 text-3xl ${service.color}`}>●</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

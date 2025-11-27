const Contact = () => {
  return (
    <section className="bg-neutral-800 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-white">
          Contato
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-emerald-400">Endereço</h3>
              <p className="text-neutral-300">
                Rua Exemplo, 123 - Centro<br />
                Campina Grande - PB, 58400-000
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-emerald-400">Redes Sociais</h3>
              <a
                href="https://www.instagram.com/campinagrandecvb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-emerald-400"
              >
                @campinagrandecvb
              </a>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-emerald-400">WhatsApp</h3>
              <a
                href="https://wa.me/558300000000"
                className="text-neutral-300 hover:text-emerald-400"
              >
                (83) 0000-0000
              </a>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Assunto"
              className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
            />
            <textarea
              placeholder="Mensagem"
              rows={5}
              className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

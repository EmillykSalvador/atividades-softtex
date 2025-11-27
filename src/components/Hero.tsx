import eventoImg from '../assets/campina_cvb.jpg'; 

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Campina Grande no mapa dos grandes eventos
          </h1>
          <p className="text-lg text-neutral-300">
            Promovemos e captamos eventos que fortalecem o turismo de negócios
            e impulsionam a economia local.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-600">
              Quero trazer meu evento
            </button>
            <button className="rounded-lg border-2 border-orange-500 px-6 py-3 font-semibold text-orange-500 transition-colors hover:bg-orange-500 hover:text-white">
              Quero ser associado
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img 
            src={eventoImg} 
            alt="Eventos em Campina Grande" 
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

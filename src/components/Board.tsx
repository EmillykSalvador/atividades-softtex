import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import andreImg from "../assets/andremotta.jpg";
import pabloImg from "../assets/pablojatoba.jpg";
import fabiolaImg from "../assets/fabiolacortezzi.jpg";
import divaildoImg from "../assets/divaildojunior.jpg";
import manuelaImg from "../assets/manueladantas.jpg";
import luizImg from "../assets/luizcarloslira.jpg";
import izabelliImg from "../assets/izabelliaraujo.jpg";
import tupacImg from "../assets/tupacrodrigues.jpg";

const Board = () => {
  const { t } = useTranslation("board");

  const boardMembers = [
    { name: "ANDRÉ DANTAS MOTTA", role: t("roles.president"), photo: andreImg },
    { name: "PABLO BARBOSA JATOBÁ", role: t("roles.vicePresident"), photo: pabloImg },
    { name: "MANUELA DANTAS MOTTA LOPES", role: t("roles.firstFinanceDirector"), photo: manuelaImg },
    { name: "FABÍOLA CORTEZZI GUIMARÃES DUARTE", role: t("roles.executiveDirector"), photo: fabiolaImg },
    { name: "DIVAILDO BARTOLOMEU DE LIMA JUNIOR", role: t("roles.firstSecretaryDirector"), photo: divaildoImg },
    { name: "TUPAC RODRIGUES ALBUQUERQUE DANTAS", role: t("roles.eventsDirector"), photo: tupacImg },
    { name: "LUIZ CARLOS LIRA", role: t("roles.heritageDirector"), photo: luizImg },
    { name: "IZABELLI ARAÚJO DINIZ", role: t("roles.publicRelations"), photo: izabelliImg },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-neutral-800 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-3xl font-bold text-emerald-400">
          {t("title")}
        </h2>

        <p className="mb-12 text-neutral-400">{t("subtitle")}</p>

        <Slider {...settings}>
          {boardMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div className="rounded-xl border border-neutral-700/40 bg-neutral-800/70 p-6 text-center shadow-md transition-all duration-200 hover:shadow-lg hover:bg-neutral-700/60 hover:-translate-y-0.5">
                <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-neutral-700 flex items-center justify-center text-neutral-500 overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span>[Foto]</span>
                  )}
                </div>

                <h3 className="mb-1 text-lg font-semibold text-white">
                  {member.name}
                </h3>

                <p className="text-sm text-emerald-400">{member.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Board;
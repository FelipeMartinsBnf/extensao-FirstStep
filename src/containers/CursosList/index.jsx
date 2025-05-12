import { useEffect, useState } from "react";
import { buscarAulasConcluidas } from "../../services/firestoreService";
import { Link } from "react-router-dom";
import "./cursosList.css";
import codeCamp from "../../assets/freecodecamp.jpg";
import cursovideo from "../../assets/cursoemvideo.jpg";
import rocket from "../../assets/rocket.jpg";
import bradesco from "../../assets/bradesco.jpg";
import htmlLogo from "../../assets/html.svg";
import Card from "../../components/Card";
import dropdownIcon from "../../assets/down.svg";
import upIcon from "../../assets/up.svg";

const CursosList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aulas, setAulas] = useState([]);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
     fetchAulas();
   }, []);

  async function fetchAulas() {
     const resultado = await buscarAulasConcluidas();
     setAulas(resultado);
  }

  return (
    <main>
      <div className="container container-cursos">
        <div className="back-btn">
          <Link to={"/dash"}>{"< Voltar"}</Link>
        </div>
        <h1 className="title-font">Cursos</h1>
        <p className="title-font-sec">Nossos cursos disponíveis:</p>

        <div className="cursos-list">
          <div className="cursos-list-item">
            {aulas.length == 4 ? (
              <span className="btn tag-completed">Concluído</span>
            ) : (
              ""
            )}
            <Card
              name={"Introdução ao Front-end"}
              desc={"Curso os conceitos de Html, Css e JavaScript"}
              btnName={"Assistir curso"}
              img={htmlLogo}
              className={"cursos-card"}
              page={"/curso"}
            />
          </div>
        </div>

        <div
          className={
            "cursos-externos" + (isOpen ? " cursos-externos-open" : "")
          }
        >
          <div className="cursos-externos-header" onClick={toggleAccordion}>
            <h3 className="title-font">Cursos externos</h3>
            <img
              src={isOpen ? upIcon : dropdownIcon}
              className="dropdown-icon"
              alt="toggle"
            />
          </div>

          {isOpen && (
            <div className="cursos-list">
              <div className="cursos-list-item">
                <Card
                  name={"FreeCode Camp"}
                  desc={
                    "Plataforma interativa com cursos completos em HTML, CSS, JavaScript, Python, entre outros. Oferece projetos práticos e certificados gratuitos."
                  }
                  btnName={"Visitar site"}
                  img={codeCamp}
                  className={"cursos-card card-static"}
                  page={"https://www.freecodecamp.org/"}
                />
              </div>
              <div className="cursos-list-item">
                <Card
                  name={"Curso em Vídeo"}
                  desc={
                    "Platadorma com cursos gratuitos de programação. Oferece aulas em vídeo e exercícios práticos."
                  }
                  btnName={"Visitar site"}
                  img={cursovideo}
                  className={"cursos-card card-static"}
                  page={"https://www.cursoemvideo.com"}
                />
              </div>
              <div className="cursos-list-item">
                <Card
                  name={"Rocketseat Discover"}
                  desc={
                    "Curso prático e gratuito que ensina HTML, CSS e JavaScript, com suporte de uma comunidade ativa."
                  }
                  btnName={"Visitar site"}
                  img={rocket}
                  className={"cursos-card card-static"}
                  page={"https://www.rocketseat.com.br/discover"}
                />
              </div>
              <div className="cursos-list-item">
                <Card
                  name={"Fundação Bradesco – Curso de Python Básico"}
                  desc={
                    "Curso introdutório de Python, abordando lógica de programação e desenvolvimento de programas básicos."
                  }
                  btnName={"Visitar site"}
                  img={bradesco}
                  className={"cursos-card card-static"}
                  page={
                    "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico"
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CursosList;

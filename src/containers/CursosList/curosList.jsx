import { useState } from "react";
import "./cursosList.css";
import htmlLogo from "../../assets/html.svg";
import Card from "../../components/Card/Card";
import dropdownIcon from "../../assets/down.svg";
import upIcon from "../../assets/up.svg";

const CursosList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <main>
      <div className="container container-cursos">
        <h1 className="title-font">Cursos</h1>
        <p className="title-font-sec">Nossos cursos disponíveis:</p>

        <div className="cursos-list">
          <div className="cursos-list-item">
            <span className="btn tag-completed">Concluído</span>
            <Card
              name={"Introdução ao Front-end"}
              desc={"Curso os conceitos de Html, Css e JavaScript"}
              btnName={"Assistir curso"}
              img={htmlLogo}
              className={"cursos-card"}
            />
          </div>
        </div>

        <div
          className={"cursos-externos" + (isOpen ? " cursos-externos-open" : "")}
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
              {[...Array(4)].map((_, i) => (
                <div className="cursos-list-item" key={i}>
                  <Card
                    name={"Introdução ao Front-end"}
                    desc={"Curso os conceitos de Html, Css e JavaScript"}
                    btnName={"Assistir curso"}
                    img={htmlLogo}
                    className={"cursos-card"}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CursosList;

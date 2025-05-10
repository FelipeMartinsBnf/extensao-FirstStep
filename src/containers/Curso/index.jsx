import { useState } from "react";
import Maincard from "../../components/MainCard";
import "./curso.css";
import { Link } from "react-router-dom";
import htmlLogo from "../../assets/html.svg";
import AulaCursoItem from "../../components/AulaCursoItem";
import AulaModal from "../../components/AulaModal";


const Curso = () => {

  const [aulaId, setAulaId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const alterarModalAula = (id) => {
    setAulaId(id);
    setIsOpen((prev) => !prev);
  };

  return (
    <main>
      <div className="container container-cursos">
        {isOpen && (
          <AulaModal
            onClick={alterarModalAula}
            name={"Aula 01 - Fundamentos do HTML 5"}
            url={
              "https://www.youtube.com/embed/Ejkb_YpuHWs?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n"
            }
            id={1}
          />
        )}
        <div className="back-btn">
          <Link to={"/cursos"}>{"< Voltar"}</Link>
        </div>
        <Maincard
          name={"Introdução ao Front-End"}
          desc={"Curso os conceitos de Html, Css e JavaScript"}
          img={htmlLogo}
        />
        <Maincard name={"100% Concluído"} className={"main-card-small"} />
        <div className="curso-aulas-list">
          <p className="title-font-sec">Aulas Disponíveis:</p>
          <AulaCursoItem
            name={"Aula 01 - Html e fundamentos"}
            duracao={10}
            status={"Concluida"}
            onClick={alterarModalAula}
            idCurso={1}
          />
          <AulaCursoItem
            name={"Aula 02 - CSS e estilização"}
            duracao={10}
            status={"Concluida"}
            onClick={alterarModalAula}
            idCurso={2}
          />
          <AulaCursoItem
            name={"Aula 03 - JavaScript e programação"}
            duracao={10}
            status={"Concluida"}
            onClick={alterarModalAula}
            idCurso={3}
          />
          <AulaCursoItem
            name={"Aula 04 - Projeto final"}
            duracao={10}
            status={"Concluida"}
            onClick={alterarModalAula}
            idCurso={4}
          />
        </div>
      </div>
    </main>
  );
}


export default Curso;
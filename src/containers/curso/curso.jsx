import Maincard from "../../components/mainCard/mainCard";
import "./curso.css";
import { Link } from "react-router-dom";
import htmlLogo from "../../assets/html.svg";
import Button from "../../components/button/button";
import AulaCursoItem from "../../components/aulaCursoItem/AulaCursoItem";

const Curso = () => {

  return (
    <main>
      <div className="container container-cursos">
        <div className="back-btn" ><Link to={"/cursos"}>{"< Voltar"}</Link></div>
        <Maincard
          name={"Introdução ao Front-End"}
          desc={"Curso os conceitos de Html, Css e JavaScript"}
          img={htmlLogo}
        />
        <Maincard
          name={"100% Concluído"}
          className={"main-card-small"}
        />
        <div className="curso-aulas-list">
          <p className="title-font-sec">Aulas Disponíveis:</p>
          <AulaCursoItem
            name={"Aula 01 - Html e fundamentos"}
            duracao={10}
            status={"Concluida"}
          />
          <AulaCursoItem
            name={"Aula 02 - CSS e estilização"}
            duracao={10}
            status={"Concluida"}
          />
          <AulaCursoItem
            name={"Aula 03 - JavaScript e programação"}
            duracao={10}
            status={"Concluida"}
          />
          <AulaCursoItem
            name={"Aula 04 - Projeto final"}
            duracao={10}
            status={"Concluida"}
          />
        </div>
      </div>
    </main>
  );
}


export default Curso;
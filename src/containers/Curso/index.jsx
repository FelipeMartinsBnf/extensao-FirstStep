import { useEffect, useState } from "react";
import { buscarAulasConcluidas } from "../../services/firestoreService";
import Maincard from "../../components/MainCard";
import "./curso.css";
import { Link } from "react-router-dom";
import htmlLogo from "../../assets/html.svg";
import AulaCursoItem from "../../components/AulaCursoItem";
import AulaModal from "../../components/AulaModal";
import { aulasHtml } from"../../util/cursos/html"


const Curso = () => {

  const [aulaId, setAulaId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [aulas, setAulas] = useState([]);

  const alterarModalAula = (id) => {
    setAulaId(id);
    setIsOpen((prev) => !prev);
    fetchAulas();
  };

  useEffect(() => {
    fetchAulas();
  }, []);

  async function fetchAulas() {
    const resultado = await buscarAulasConcluidas();
    setAulas(resultado);
  }

  const verificarAulaConcluida = (id) => {
    return aulas.includes(id);
  }

  return (
    <main>
      <div className="container container-cursos">
        {isOpen && (
          <AulaModal
            onClick={alterarModalAula}
            name={aulasHtml[aulaId - 1].nome}
            url={aulasHtml[aulaId - 1].url}
            id={aulaId}
            aulas={aulas}
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
        <Maincard
          name={(aulas.length / 4) * 100 + "% Concluído"}
          className={"main-card-small"}
        />
        <div className="curso-aulas-list">
          <p className="title-font-sec">Aulas Disponíveis:</p>
          <AulaCursoItem
            name={aulasHtml[0].nome}
            duracao={aulasHtml[0].duracao}
            concluida={verificarAulaConcluida(1)}
            onClick={alterarModalAula}
            idCurso={aulasHtml[0].id}
          />
          <AulaCursoItem
            name={aulasHtml[1].nome}
            duracao={aulasHtml[1].duracao}
            concluida={verificarAulaConcluida(2)}
            onClick={alterarModalAula}
            idCurso={aulasHtml[1].id}
          />
          <AulaCursoItem
            name={aulasHtml[2].nome}
            duracao={aulasHtml[2].duracao}
            concluida={verificarAulaConcluida(3)}
            onClick={alterarModalAula}
            idCurso={aulasHtml[2].id}
          />
          <AulaCursoItem
            name={aulasHtml[3].nome}
            duracao={aulasHtml[3].duracao}
            concluida={verificarAulaConcluida(4)}
            onClick={alterarModalAula}
            idCurso={aulasHtml[3].id}
          />
        </div>
      </div>
    </main>
  );
}


export default Curso;
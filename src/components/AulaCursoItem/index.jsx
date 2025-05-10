import "./aulaCursoItem.css";

const AulaCursoItem = ({ name, duracao, status, onClick, idCurso }) => {

  return (
    <div className="aula-curso-item" onClick={() => onClick(idCurso)}>
      <div>
        <h4 className="title-font-sec">{name}</h4>
      </div>
      <div className="aula-curso-item-info">
        <p className="text">Duração: {duracao} min </p>
        <p className="text">Status: {status}</p>
      </div>
    </div>
  );
}


export default AulaCursoItem;
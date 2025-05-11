import "./aulaCursoItem.css";

const AulaCursoItem = ({ name, duracao, concluida, onClick, idCurso }) => {

  return (
    <div className="aula-curso-item" onClick={() => onClick(idCurso)}>
      <div>
        <h4 className="title-font-sec">{name}</h4>
      </div>
      <div className="aula-curso-item-info">
        <p className="text">Duração: {duracao} min </p>
        <p className="text">
          Status:{" "}
          {concluida ? (
            <span className="concluida">concluido</span>
          ) : (
            <span className="pendente">pendente</span>
          )}
        </p>
      </div>
    </div>
  );
}


export default AulaCursoItem;
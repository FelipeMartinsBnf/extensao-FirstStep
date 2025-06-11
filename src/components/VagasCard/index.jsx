import "./card.css"

const VagasCard = ({ name, desc, tag, empresa, localizacao, className, onClick }) => {
  return (
    <div className={"card-link " + " " + className} onClick={onClick}>
      <div className="card-header-title">
        <div>
          <h3 className="title-font-sec">{name}</h3>
          <div>
            <div className="vaga-tags">
              <span className="vaga-tag">{tag}</span>
              <span className="vaga-tag">{localizacao}</span>
            </div>
            <p className="small-text">{empresa}</p>
          </div>
          <p className="text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default VagasCard;
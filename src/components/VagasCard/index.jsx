import "./card.css"

const VagasCard = ({ name, desc, tag, empresa, className, onClick }) => {
  return (
    <div className={"card-link " + " " + className} onClick={onClick}>
      <div className="card-header-title">
        <div>
          <h3 className="title-font-sec">{name}</h3>
          <div>
            <span className="vaga-tag">{tag}</span>
            <p className="small-text">{empresa}</p>
          </div>
          <p className="text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default VagasCard;
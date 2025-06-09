import "./card.css"
import { Link } from "react-router-dom"

const VagasCard = (
    {name, desc, tag , page, className}
) => {


    return (
        <div className={"card-link " + " " + className}>
          <div className="card-header-title">
            <div>
              <h3 className="title-font-sec">{name}</h3>
              <div>
                <span className="vaga-tag">{tag}</span>
              </div>
              <p className="text">{desc}</p>
            </div>
          </div>
        </div>
    );
}

export default VagasCard;
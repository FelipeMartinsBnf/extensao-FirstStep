import "./card.css"
import { Link } from "react-router-dom"
import Button from "../button/button"

const Card = (
    {name, desc, btnName, img}
) => {


    return(
        <div className="card-link">
            <div className="card-header-title">
                <div>
                    <h3 className="title-font-sec">{name}</h3>
                    <p className="text">{desc}</p>
                    <Link className="card-link-btn"><Button label={btnName} className={"btn-card"} /></Link>
                </div>
            </div>
            <div>
                <img src={img} className="card-img" />
            </div>
        </div>
    )
}

export default Card
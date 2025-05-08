import "./mainCard.css"

const Maincard = (
    {name, desc, img, className}
) => {


    return (
      <div className={"main-card-link" + " " + className}>
        <div className="card-header-title">
          <div>
            <h1 className="title-font">{name}</h1>
            <p className="text">{desc}</p>
          </div>
        </div>
        <div className="main-card-img">
          <img src={img} className="card-img" />
        </div>
      </div>
    );
}

export default Maincard;
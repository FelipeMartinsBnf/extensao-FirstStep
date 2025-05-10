import Button from "../Button";
import "./aulaModal.css";

const AulaModal = ({ onClick, name, url, id }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="back-btn">
          <p onClick={onClick} className="text">{"< Voltar"}</p>
        </div>
        <h1 className="title-font">{name} + {id}</h1>
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src={url}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="footer-btn">
          <Button label={"Marcar como concluída"} />
        </div>
      </div>
    </div>
  );
};

export default AulaModal;

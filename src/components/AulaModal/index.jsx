import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../../firebase";
import Button from "../Button";
import "./aulaModal.css";

const AulaModal = ({ onClick, name, url, id, aulas }) => {

    const verificarAulaConcluida = (id) => {
      return aulas.includes(id);
    };


  async function marcarAulaComoConcluida(aulaId) {
    if (verificarAulaConcluida(aulaId)) return;
    const user = auth.currentUser;
    if (!user) return;

    const docRef = doc(db, "progressoUsuarios", user.uid);

    try {
      await updateDoc(docRef, {
        aulasConcluidas: arrayUnion(aulaId), // adiciona o ID sem duplicar
      });
      console.log("Aula marcada como concluída!");
    } catch (e) {
      console.error("Erro ao atualizar progresso:", e);
    }

    onClick();

  }

  return (
    <div className="modal-overlay fade-in">
      <div className="modal-content">
        <div className="back-btn">
          <p onClick={onClick} className="text">
            {"< Voltar"}
          </p>
        </div>
        <h1 className="title-font">{name}</h1>
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              className="fade-in"
              src={url}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="footer-btn">
          {verificarAulaConcluida(id) ? (
            <Button
              className={"btn-aula-concluida"}
              label={"Aula já concluída"}
              onClick={() => {
                marcarAulaComoConcluida(id);
              }}
            />
          ) : (
            <Button
              label={"Marcar como concluída"}
              onClick={() => {
                marcarAulaComoConcluida(id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AulaModal;

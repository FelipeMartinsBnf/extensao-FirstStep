import { useState } from "react";
import './vagaModal.css'
import { motion } from "framer-motion";

const VagaModal = ({
  onClick,
  vaga,
  salvarOuRemoverVaga,
  setVagas,
  getVagasSalvas,
  vagas
}) => {
 
  const [vagaSalva, setVagaSalva] = useState(vaga.salva);

  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="modal-overlay fade-in">
        <div className="modal-content modal-content-vaga">
          <div className="back-btn">
            <p onClick={() => onClick(null)} className="text">
              {"< Voltar"}
            </p>
          </div>
          <div>
            <h1 className="title-font vaga-m-title">{vaga.titulo}</h1>
            <h2 className="title-font-sec vaga-s-title">{vaga.empresa}</h2>
          </div>
          <div className="vagas-tags">
            <span className="btn">{vaga.tipo}</span>
            <span className="btn">{vaga.localizacao}</span>
          </div>
          <div>
            <p className="small-text">Publicada em: {vaga.dataPublicacao}</p>
          </div>
          <div>
            <p className="text">{vaga.descricao.split('\n').map((linha, index) => (
              <span key={index}>
                {linha}
                <br />
              </span>
            ))}</p>
          </div>
          <div className="vaga-btns">
            <a 
              href={vaga.link} target="blank"
              ><button className="btn" disabled={vaga.link == null ? true : false }>Visitar Link Vaga</button> </a>
            <button
              className="btn"
              onClick={(e) => {
                salvarOuRemoverVaga(vaga.id);
                // Atualize o estado local:
                const salvosAtualizados = getVagasSalvas();
                const novasVagas = vagas.map((v) => ({
                  ...v,
                  salvo: salvosAtualizados.includes(v.id),
                }));
                setVagas(novasVagas);
                setVagaSalva(!vagaSalva);
              }}
            >
              {vagaSalva ? "Remover da lista de salvos" : "Salvar vaga"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VagaModal;
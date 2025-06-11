import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VagasCard from "../../components/VagasCard";
import "./style.css";
import { Link } from "react-router-dom";
import { vagasList } from "../../util/vaga/vaga";
import VagaModal from "../../components/VagaModal";

const Vagas = () => {

  const [vagas, setVagas] = useState(vagasList);
  const [modalVaga, setModalVaga] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroLocalizacao, setFiltroLocalizacao] = useState("");
  const [mostrarSalvas, setMostrarSalvas] = useState(false);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    atualizarVagasSalvas();
  }, []);
  
  const atualizarVagasSalvas = () => {
    const salvos = getVagasSalvas();
    const vagasAtualizadas = vagas.map((vaga) => ({
      ...vaga,
      salva: salvos.includes(vaga.id),
    }));
    setVagas(vagasAtualizadas);
  };

  const vagasFiltradas = vagas
    .filter((vaga) =>
      filtroTipo ? vaga.tipo.toLowerCase() === filtroTipo.toLowerCase() : true
    )
    .filter((vaga) =>
      filtroLocalizacao
        ? vaga.localizacao?.toLowerCase() === filtroLocalizacao.toLowerCase()
        : true
    )
    .filter((vaga) => (mostrarSalvas ? vaga.salva === true : true))
    .filter((vaga) =>
      busca ? vaga.titulo.toLowerCase().includes(busca.toLowerCase()) : true
    );

  const handleModal = (vaga) => {
    setModalVaga(!modalVaga);
    setVagaSelecionada(vaga);
    atualizarVagasSalvas();
  }

  const getVagasSalvas = () => {
    const data = localStorage.getItem("vagasSalvas");
    return data ? JSON.parse(data) : [];
  };

  const salvarOuRemoverVaga = (id) => {
    let salvos = getVagasSalvas();
    if (salvos.includes(id)) {
      salvos = salvos.filter((v) => v !== id); // remove
    } else {
      salvos.push(id); // adiciona
    }
    localStorage.setItem("vagasSalvas", JSON.stringify(salvos));
    atualizarVagasSalvas();
  };
  
  return (
    <main className="container">
      {modalVaga && (
        <VagaModal
          onClick={() => handleModal(null)}
          vaga={vagaSelecionada}
          salvarOuRemoverVaga={salvarOuRemoverVaga}
          setVagas={setVagas}
          getVagasSalvas={getVagasSalvas}
          vagas={vagas}
        />
      )}
      <div className="container-vagas">
        <div className="back-btn">
          <Link to={"/dash"}>{"< Voltar"}</Link>
        </div>
        <h1 className="title-font">Vagas</h1>
        <p className="title-font-sec">
          <span>
            <b>{vagasFiltradas.length}</b>
          </span>{" "}
          vagas encontradas.
        </p>
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Pesquisar vaga..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <label htmlFor="search">🔍</label>
          </div>
        </div>
        <div className="main-container">
          <div className="filtros-div">
            <h2 className="title-font">Filtros</h2>
            <div className="filtros">
              <div className="filtro-item">
                <label htmlFor="tipo">Tipo:</label>
                <select
                  id="tipo"
                  className="btn btn-select"
                  onChange={(e) => setFiltroTipo(e.target.value)}
                >
                  <option value="">Todos</option>
                  <option value="estágio">Estágio</option>
                  <option value="pj">PJ</option>
                  <option value="clt">CLT</option>
                </select>
              </div>
              <div className="filtro-item">
                <label htmlFor="localizacao">Localização:</label>
                <select
                  id="localizacao"
                  className="btn btn-select"
                  onChange={(e) => setFiltroLocalizacao(e.target.value)}
                >
                  <option value="">Todas</option>
                  <option value="remoto">Remoto</option>
                  <option value="presencial">Presencial</option>
                  <option value="híbrida">Híbrida</option>
                </select>
              </div>
              <div>
                <label htmlFor="salvos" className="chk-wrapper">
                  <label>Vagas salvas: </label>
                  <input
                    id="salvos"
                    type="checkbox"
                    className="chk-input"
                    checked={mostrarSalvas}
                    onChange={(e) => setMostrarSalvas(e.target.checked)}
                  />
                  <span class="chk-custom"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="vagas-list">
            {vagasFiltradas.map((vaga) => (
              <motion.div
                key={vaga.id}
                className="vaga-item"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="vaga-item" key={vaga.id}>
                  <VagasCard
                    key={vaga.id}
                    tag={vaga.tipo}
                    name={vaga.titulo}
                    empresa={vaga.empresa}
                    desc={vaga.descricao}
                    localizacao={vaga.localizacao}
                    btnName={"Mais informações"}
                    className={"vaga-card"}
                    onClick={() => handleModal(vaga)}
                  ></VagasCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Vagas;
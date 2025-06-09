import Card from "../../components/Card";
import VagasCard from "../../components/VagasCard";
import "./style.css";
import { Link } from "react-router-dom";

const Vagas = () => {

  return (
    <main className="container">
      <div className="container-vagas">
        <div className="back-btn">
          <Link to={"/dash"}>{"< Voltar"}</Link>
        </div>
        <h1 className="title-font">Vagas</h1>
        <p className="title-font-sec">
          <span>
            <b>1000</b>
          </span>{" "}
          vagas encontradas.
        </p>
        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Pesquisar vaga..." />
            <label htmlFor="search">🔍</label>
          </div>
        </div>
        <div className="main-container">
          <div className="filtros-div">
            <h2 className="title-font">Filtros</h2>
            <div className="filtros">
              <div className="filtro-item">
                <label htmlFor="tipo">Tipo:</label>
                <select id="tipo">
                  <option value="">Todos</option>
                  <option value="estagio">Estágio</option>
                  <option value="pj">PJ</option>
                  <option value="clt">CLT</option>
                </select>
              </div>
              <div className="filtro-item">
                <label htmlFor="localizacao">Localização:</label>
                <select id="localizacao">
                  <option value="">Todas</option>
                  <option value="remoto">Remoto</option>
                  <option value="presencial">Presencial</option>
                </select>
              </div>
            </div>
          </div>
          <div className="vagas-list">
            <div className="vaga-item">
              <VagasCard
                tag={"Estágio"}
                name={"Vaga 01"}
                desc={"Desenvolvedor Backend"}
                btnName={"Mains informações"}
                className={"vaga-card"}
              ></VagasCard>
            </div>
            <div className="vaga-item">
              <VagasCard
                name={"Vaga 01"}
                desc={
                  "Desenvolvedor Backend e Desenvolvedor Backend e Desenvolvedor Backend "
                }
                className={"vaga-card"}
              ></VagasCard>
            </div>
            <div className="vaga-item">
              <VagasCard
                name={"Vaga 01"}
                desc={"Desenvolvedor Backend"}
                btnName={"Mains informações"}
                className={"vaga-card"}
              ></VagasCard>
            </div>
            <div className="vaga-item">
              <VagasCard
                name={"Vaga 01"}
                desc={"Desenvolvedor Backend"}
                btnName={"Mains informações"}
                className={"vaga-card"}
              ></VagasCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Vagas;
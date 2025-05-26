import { useState } from "react";
import "./dicas.css";

const Dicas = () => {
const [entrevista, setEntrevista] = useState([]);
const [habilidades, setHabilidades] = useState([]);

const toggleEntrevista = () => {
  setEntrevista((prev) => !prev);
}

const toggleHabilidades = () => {
  setHabilidades((prev) => !prev);
};

return (
  <main className="container dicas-container">
    <aside className="asside-bar">
      <h2>Dicas</h2>
    </aside>
    <div>
      <h1 className="title-font">Dicas</h1>
      <div>
        <h2
          className="title-font-sec sec-title-dicas"
          onClick={toggleEntrevista}
        >
          Dicas para Entrevistas
        </h2>
        <div
          className={`dicas-content ${
            entrevista ? "dicas-open" : "dicas-close"
          }`}
        >
          <div className="dicas-item">
            <div className="dicas-item-header">
              <h3>1. 📌 Postura e Comportamento</h3>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">⏰</span> Pontualidade
              </h4>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Chegue{" "}
                <b>10-15 minutos antes</b> (se presencial).
              </p>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Para entrevistas
                online, <b>entre na chamada 5 minutos antes</b> e teste câmera e
                microfone.
              </p>
            </div>
          </div>
          <div className="dicas-item">
            <div className="dicas-item-header">
              <h3>2. 👔 Vestimenta Adequada</h3>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">🏢</span> Presencial
              </h4>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Use <b>roupa formal</b>
                , como camisa social, polo ou blusa social.
              </p>

              <h4 className="dicas-item-title">
                <span className="dicas-icon">💻</span> Online
              </h4>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Mantenha o{" "}
                <b>profissionalismo</b> mesmo em ambiente remoto.
              </p>
            </div>
          </div>
          <div className="dicas-item">
            <div className="dicas-item-header">
              <h3>3. 💬 Comunicação</h3>
            </div>
            <div className="dicas-item-content">
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Mantenha{" "}
                <b>contato visual</b> (se presencial) e comunique-se com
                clareza.
              </p>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Evite <b>gírias</b> e
                mantenha respostas <b>objetivas</b>.
              </p>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Demonstre{" "}
                <b>entusiasmo</b> e <b>vontade de aprender</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2
          className="title-font-sec sec-title-dicas"
          onClick={toggleHabilidades}
        >
          Habilidades para Destacar
        </h2>
        <div
          className={`dicas-content ${
            habilidades ? "dicas-open" : "dicas-close"
          }`}
        >
          <div className="dicas-item">
            <div className="dicas-item-header">
              <h3>1. 💻 Habilidades Técnicas (Depende da Vaga)</h3>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">👨‍💻</span> Linguagens de
                programação:
              </h4>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Ex.: Python,
                JavaScript, Java (mesmo em nível básico).
              </p>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Destaque projetos
                pessoais ou da faculdade.
              </p>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">🛠️</span>Ferramentas
              </h4>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Git/GitHub, SQL, Excel
                (para análise de dados).
              </p>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Frameworks (React,
                Node.js, Django – se aplicável).
              </p>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">📖</span>Conceitos importantes
              </h4>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Lógica de programação,
                estrutura de dados, algoritmos.
              </p>
            </div>
          </div>
          <div className="dicas-item">
            <div className="dicas-item-header">
              <h3>2. 🌟 Habilidades Comportamentais</h3>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">Proatividade:</h4>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Ex.: "Aprendi
                [tecnologia] por conta própria para desenvolver [projeto]."
              </p>
              <h4 className="dicas-item-title">Trabalho em equipe:</h4>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Ex.: "Participei de um
                projeto em grupo na faculdade onde [explique sua contribuição]."
              </p>
              <h4 className="dicas-item-title">Resolução de problemas:</h4>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Ex.: "Solucionei um
                erro no código através de pesquisa no Stack Overflow e
                documentei a solução."
              </p>
            </div>
          </div>
          <div className="dicas-item">
            <div className="dicas-item-header">
              <h3>3. 💬 Comunicação</h3>
            </div>
            <div className="dicas-item-content">
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Mantenha{" "}
                <b>contato visual</b> (se presencial) e comunique-se com
                clareza.
              </p>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Evite <b>gírias</b> e
                mantenha respostas <b>objetivas</b>.
              </p>
              <p className="text dicas-item-text">
                <span className="dicas-icon-sm">🟣</span>Demonstre{" "}
                <b>entusiasmo</b> e <b>vontade de aprender</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
}

export default Dicas;
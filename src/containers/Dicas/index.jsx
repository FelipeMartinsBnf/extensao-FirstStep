import { useState } from "react";
import { Link } from "react-router-dom";
import "./dicas.css";
import dropdown from "../../assets/arrow_drop_down_circle.svg"

const Dicas = () => {
const [entrevista, setEntrevista] = useState(false);
const [habilidades, setHabilidades] = useState(false);
const [perguntas, setPerguntas] = useState(false);
const [extras, setExtras] = useState(false);
const [pos, setPos] = useState(false);

const toggleEntrevista = () => {
  setEntrevista((prev) => !prev);
}

const toggleHabilidades = () => {
  setHabilidades((prev) => !prev);
};

const togglePerguntas = () => {
  setPerguntas((prev) => !prev);
};

const toggleExtras = () => {
  setExtras((prev) => !prev)
}

const togglePos = () => {
  setPos((prev) => !prev)
}

return (
  <main className="container dicas-container">
    <aside className="asside-bar">
      <div className="back-btn">
          <Link to={"/dash"}>{"< Voltar"}</Link>
      </div>
      <h2>Tópicos</h2>
      <h4 className="dicas-item-title page-link" onClick={() => setEntrevista(true)} ><a href="#entrevista">➡ Dicas para Entrevistas</a></h4>
      <h4 className="dicas-item-title page-link" onClick={() => setHabilidades(true)} ><a href="#habilidades">➡ Habilidades para Destacar</a></h4>
      <h4 className="dicas-item-title page-link" onClick={() => setPerguntas(true)}><a href="#perguntas">➡ Perguntas</a> </h4>
      <h4 className="dicas-item-title page-link" onClick={() => setExtras(true)}><a href="#extras">➡ Dicas Extras</a></h4>
      <h4 className="dicas-item-title page-link" onClick={() => setPos(true)}><a href="#pos">➡ Pós e Pre Entrevista</a></h4>
    </aside>
    <div>
      <h1 id="entrevista" className="title-font">Dicas</h1>
      <div>
        <div className="dicas-dropdown-btn"  onClick={toggleEntrevista}>
          <div className="dicas-dropdown-btn-btn">
            <img src={dropdown} alt="abrir conteudo" className={entrevista ? "dicas-dropdown-icon-open" : "dicas-dropdown-icon-close"} />
          </div>
          <h2
            className="title-font-sec sec-title-dicas"
          >
            Dicas para Entrevistas
          </h2>
        </div>
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
        <div className="dicas-dropdown-btn"  onClick={toggleHabilidades} id="habilidades">
          <div className="dicas-dropdown-btn-btn">
            <img src={dropdown} alt="abrir conteudo" className={habilidades ? "dicas-dropdown-icon-open" : "dicas-dropdown-icon-close"} />
          </div>
          <h2
            className="title-font-sec sec-title-dicas"
          >
            Habilidades para Destacar
          </h2>
        </div>
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
      <div>
        <div className="dicas-dropdown-btn"  onClick={togglePerguntas} id="perguntas">
          <div className="dicas-dropdown-btn-btn">
            <img src={dropdown} alt="abrir conteudo" className={perguntas ? "dicas-dropdown-icon-open" : "dicas-dropdown-icon-close"} />
          </div>
          <h2
            className="title-font-sec sec-title-dicas"
          >
           Perguntas Frequentes e Como Responder
          </h2>
        </div>
        <div
          className={`dicas-content ${
            perguntas ? "dicas-open" : "dicas-close"
          }`}
        >
          <div className="dicas-item">
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">🟣</span> "Fale sobre você."
              </h4>
              <p className="text dicas-item-text">
                Foque em formação, interesses na área e objetivos. Ex.: "Estudo [curso] e me interesso por [área tech] porque..."
              </p>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">🟣</span>"Por que quer esta vaga?"
              </h4>
              <p className="text dicas-item-text">
              Demonstre conhecimento sobre a empresa. Ex.: "Admiro [projeto/tecnologia da empresa] e desejo contribuir com..."
              </p>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">📖</span>"Qual seu maior desafio?"
              </h4>
              <p className="text dicas-item-text">
              Conte sobre um projeto ou problema que superou. Ex.: "Enfrentei um bug em um código e resolvi através de [X]."
              </p>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">📖</span>"O que sabe sobre a empresa?"
              </h4>
              <p className="text dicas-item-text">
              Pesquise antes! Mencione produtos, cultura ou valores.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="dicas-dropdown-btn"  onClick={toggleExtras} id="extras">
          <div className="dicas-dropdown-btn-btn">
            <img src={dropdown} alt="abrir conteudo" className={extras ? "dicas-dropdown-icon-open" : "dicas-dropdown-icon-close"} />
          </div>
          <h2
            className="title-font-sec sec-title-dicas"
          >
           🔥 Dicas Extras
          </h2>
        </div>
        <div
          className={`dicas-content ${
            extras ? "dicas-open" : "dicas-close"
          }`}
        >
          <div className="dicas-item">
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">✅</span>Leve um portfólio: GitHub, projetos pessoais, blog técnico (se tiver).
              </h4>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">✅</span>Faça perguntas relevantes:
              </h4>
              <p className="text dicas-item-text">
               ◾ Como é o dia a dia do estagiário?
              </p>
              <p className="text dicas-item-text">
               ◾ Quais habilidades são mais importantes para essa vaga?
              </p>
            </div>
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">✅</span>Seja sincero:
              </h4>
              <p className="text dicas-item-text">
              Se não souber algo, diga "Ainda não aprendi, mas estou estudando!"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="dicas-dropdown-btn"  onClick={togglePos} id="pos">
          <div className="dicas-dropdown-btn-btn">
            <img src={dropdown} alt="abrir conteudo" className={pos ? "dicas-dropdown-icon-open" : "dicas-dropdown-icon-close"} />
          </div>
          <h2
            className="title-font-sec sec-title-dicas"
          >
            Pós e Pré entrevista
          </h2>
        </div>
        <div
          className={`dicas-content ${
            pos ? "dicas-open" : "dicas-close"
          }`}
        >
          <div className="dicas-item">
            <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">📌</span>Checklist Pré-Entrevista
              </h4>
              <p className="text dicas-item-text">
               ◾ Pesquisar sobre a empresa
              </p>
              <p className="text dicas-item-text">
               ◾ Revisar meu portfólio/GitHub
              </p>
              <p className="text dicas-item-text">
               ◾ Preparar respostas para perguntas comuns
              </p>
              <p className="text dicas-item-text">
               ◾ Escolher roupa adequada
              </p>
              <p className="text dicas-item-text">
               ◾ Testar tecnologia (se for online)
              </p>
            </div>
          </div>
          <div className="dicas-item-content">
              <h4 className="dicas-item-title">
                <span className="dicas-icon">📩</span>Após a Entrevista
              </h4>
              <p className="text dicas-item-text">
               ◾ Envie um e-mail de agradecimento no mesmo dia.
              </p>
              <p className="text dicas-item-text">
               ◾ Caso não seja selecionado, solicite feedback para desenvolvimento.
              </p>
            </div>
          </div>
        </div>
    </div>
  </main>
);
}

export default Dicas;
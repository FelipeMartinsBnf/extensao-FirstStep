import { Link } from "react-router-dom";
import "./about.css"
import job from "../../assets/Resume-amico.svg";


const About = () => {

  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">Sobre o First-Step</h2>
        <p className="about-title-sec">
          <span>
            <b>👣 Dê o Primeiro Passo na Sua Carreira em Tecnologia</b>
          </span>
          <br />
          First-Step é um portal criado para ajudar estudantes de tecnologia a
          conquistarem seu primeiro estágio. Aqui, você encontra vagas focadas
          em quem está começando, além de dicas, materiais de estudo e
          ferramentas inteligentes que facilitam sua preparação para o mercado
          de trabalho. Tudo em um só lugar, pensado para quem quer dar o
          primeiro passo com mais confiança.
        </p>
        <div className="card">
          <div className="job-image-container">
            <img src={job} alt="Job" className="job-image" />
          </div>
          <div>
            <h4 className="job-title">Vagas de Emprego</h4>
            <p className="job-subheading">Procure oportunidades</p>
            <p className="job-desc">
              Temos várias vagas dem emprego selecionadas especialmente para
              estudantes de tecnologia. Aqui, você encontrará oportunidades que
              se encaixam no seu perfil e nas suas necessidades. Fique ligado!
            </p>
          </div>
          <Link to={"/vagas"} className="job-more-link">
            <div className="job-more">
              <span className="material-symbols-outlined">
                arrow_circle_right
              </span>
              <p className="job-subheading">Mais vagas</p>
            </div>
          </Link>
        </div>
      </div>
      <section className="container">
        <div className="cursos">
          <h4 className="about-title">Cursos</h4>
          <p className="job-subheading">Nossos cursos e mais!</p>
        </div>
        <div className="card">
          <Link to={"/curso"} className="job-more-link">
            <div>
              <div className="card-header">
                <span class="material-symbols-outlined icon-sec">book_5</span>
                <h4 className="card-title">Introdução ao Front-End</h4>
              </div>
              <p className="card-desc">
                Curso com os conceitos de Html, Css e JavaScript. Aqui você vai
                aprender a criar páginas web responsivas e dinâmicas. O curso é
                preparado para iniciantes e pessoa que querem aprender do zero.
                Ao final do curso, você terá um portfólio com projetos práticos
                e reais.
              </p>
            </div>
          </Link>
          <Link to={"/cursos"} className="job-more-link">
            <div>
              <div className="card-header">
                <span class="material-symbols-outlined icon-sec">book_5</span>
                <h4 className="card-title">Outros cursos externos</h4>
              </div>
              <p className="card-desc">
                Também selecionamos e indicamos cursos gratuitos de outras
                plataformas externas. Aqui você vai encontrar cursos de
                Front-End, Back-End, UX/UI e muito mais! Todos os cursos são
                gratuitos e com certificado.
              </p>
            </div>
          </Link>
          <Link to={"/cursos"} className="job-more-link">
            <div className="job-more">
              <span className="material-symbols-outlined">
                arrow_circle_right
              </span>
              <p className="job-subheading">Mais vagas</p>
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default About


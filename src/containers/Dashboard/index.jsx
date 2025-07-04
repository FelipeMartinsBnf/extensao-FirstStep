import { auth } from "../../firebase";
import Card from "../../components/Card";
import cursoImg from "../../assets/Lesson-amico.svg";
import vagasImg from "../../assets/Resume-amico.svg";
import dicasImg from "../../assets/Curious-amico.svg";
import "./dashboard.css";

const Dashboard = () => {

  return (
    <main>
      <div className="container container-dash">
        <h1 className="title-font">
          Bem vindo, {auth.currentUser?.displayName}
        </h1>
        <p className="text">Veja o que a First-step tem a oferecer</p>
        <div className="dash-cards">
          <Card
            name={"Cursos"}
            desc={"Veja os cursos gratuitos selecionados pela nossa equipe"}
            btnName={"Visualizar todos os cursos"}
            img={cursoImg}
            page={"/cursos"}
          />
          <Card
            name={"Vagas"}
            desc={"Veja vagas de estágio e empregos na área de tecnologia"}
            btnName={"Visualizar vagas"}
            img={vagasImg}
            page={"/vagas"}
          />
          <Card
            name={"Dicas"}
            desc={"Veja dicas de como se preparar para o mercado de trabalho"}
            btnName={"Visualizar dicas"}
            img={dicasImg}
            page={"/dicas"}
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

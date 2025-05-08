import "./home.css"
import dev_image from "./../../assets/dev_home.svg"
import About from "../About"
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {

    return (
      <>
        <section className="home_background">
          <div className="container">
            <div className="first-step-container">
              <div className="content">
                <h1>First Step</h1>
                <p>Seu primeiro passo na área de tecnologia</p>
                <div className="buttons">
                  <Link to={"/login"}>
                    <Button label={"Criar conta"} />
                  </Link>
                  <Link to={"/login"}>
                    <Button label={"Entrar"} />
                  </Link>
                </div>
              </div>
              <div className="image">
                <img src={dev_image} alt="First Step Illustration" />
              </div>
            </div>
          </div>
        </section>
        <About />
      </>
    );
}


export default Home
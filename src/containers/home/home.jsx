import "./home.css"
import dev_image from "./../../assets/dev_home.svg"
import About from "../about/about.jsx"

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
                            <button className="btn">Criar minha conta</button>
                            <button className="btn">Ver vagas</button>
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
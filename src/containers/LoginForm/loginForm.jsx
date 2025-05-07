import "./cadastroForm.css";
import InputCard from "../../components/inputCard/inputCard";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

const LoginForm = ({toogleForm}) => {


    return (
      <div className="cadastro-container">
        <h1 className="title-font">Login</h1>
        <form className="padding-sm cadastro-form-inputs">
          <InputCard label={"Seu Email"} type={"email"} />
          <InputCard label={"Sua senha"} type={"password"} />
          <Link to="/dash"><Button label={"Logar"} className={"btn-sm"} /></Link>
          <Button
            label={
              "Ainda não tem uma conta? Crie uma"
            }
            onClick={toogleForm}
            className={"btn-sm"}
          />
        </form>
      </div>
    );

}

export default LoginForm
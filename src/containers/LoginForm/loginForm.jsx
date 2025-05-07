import "./cadastroForm.css";
import InputCard from "../../components/inputCard/inputCard";
import Button from "../../components/button/button";

const LoginForm = ({toogleForm}) => {


    return (
      <div className="cadastro-container">
        <h1 className="title-font">Login</h1>
        <form className="padding-sm cadastro-form-inputs">
          <InputCard label={"Seu Email"} type={"email"} />
          <InputCard label={"Sua senha"} type={"password"} />
          <Button label={"Logar"} className={"btn-sm"} />
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
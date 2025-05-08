import Button from "../../components/Button"
import InputCard from "../../components/InputCard"
import "./cadastroForm.css"

const CadastroForm = ({toogleForm}) => {

    return (
      <div className="cadastro-container">
        <h1 className="title-font">Crie a sua Conta</h1>
        <form className="padding-sm cadastro-form-inputs">
          <InputCard label={"Seu Nome"} type={"text"} />
          <InputCard label={"Seu Email"} type={"email"} />
          <InputCard label={"Sua senha"} type={"password"} />
          <Button label={"Criar conta"} className={"btn-sm"} />
          <Button
            label={"Já tem uma conta? Faça login"}
            onClick={toogleForm}
            className={"btn-sm"}
          />
        </form>
      </div>
    );
}

export default CadastroForm
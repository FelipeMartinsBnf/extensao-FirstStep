import InputCard from "../../components/inputCard/inputCard"
import "./cadastroForm.css"

const CadastroForm = () => {


    return (
        <div className="cadastro-container">
            <h1 className="title-font">
                Crie a sua Conta
            </h1>
            <form className="padding-sm cadastro-form-inputs">
                <InputCard label={"Seu Nome"} />
                <InputCard label={"Seu Email"} />
                <InputCard label={"Sua senha"} />
               
            </form>
        </div>
    )
}

export default CadastroForm
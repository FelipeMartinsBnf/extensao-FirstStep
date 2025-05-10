import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import Button from "../../components/Button";
import InputCard from "../../components/InputCard";
import "./cadastroForm.css";

const CadastroForm = ({ toogleForm }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      await updateProfile(auth.currentUser, {
        displayName: nome, // vem do input do usuário
      });
      alert("Cadastro feito com sucesso!");
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <div className="cadastro-container">
      <h1 className="title-font">Crie a sua Conta</h1>
      <form className="padding-sm cadastro-form-inputs">
        <InputCard
          label={"Seu Nome"}
          type={"text"}
          value={nome}
          onChangefunc={(e) => setNome(e.target.value)}
        />
        <InputCard
          label={"Seu Email"}
          type={"email"}
          value={email}
          onChangefunc={(e) => setEmail(e.target.value)}
        />
        <InputCard
          label={"Sua senha"}
          type={"password"}
          value={senha}
          onChangefunc={(e) => setSenha(e.target.value)}
        />
        <Button
          label={"Criar conta"}
          onClick={handleRegister}
          className={"btn-sm"}
        />
        <Button
          label={"Já tem uma conta? Faça login"}
          onClick={toogleForm}
          className={"btn-sm"}
        />
        {erro && <p>{erro}</p>}
      </form>
    </div>
  );
};

export default CadastroForm;

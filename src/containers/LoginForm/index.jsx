import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./cadastroForm.css";
import InputCard from "../../components/InputCard";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const LoginForm = ({ toogleForm, setUserName }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert("Login realizado!");
      setUserName(auth.currentUser?.displayName + " | Sair");
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <div className="cadastro-container">
      <h1 className="title-font">Login</h1>
      <form className="padding-sm cadastro-form-inputs">
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
        <Link to="/dash">
          <Button label={"Logar"} className={"btn-sm"} onClick={handleLogin} />
        </Link>
        <Button
          label={"Ainda não tem uma conta? Crie uma"}
          onClick={toogleForm}
          className={"btn-sm"}
        />
        {erro && <p>{erro}</p>}
      </form>
    </div>
  );
};

export default LoginForm;

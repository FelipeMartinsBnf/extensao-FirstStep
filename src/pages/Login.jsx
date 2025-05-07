import React, { useState } from "react";
import CadastroForm from "../containers/CadastroForm/cadastroForm"
import LoginForm from "../containers/LoginForm/loginForm"
import Footer from "../containers/footer/footer"
import Header from "../containers/header/header"
import Button from "../components/button/button";



const LoginPage = () => {

    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    const alternarFormulario = () => {
        setMostrarCadastro((prev) => !prev);
    };

    return (
      <>
        <Header />
        <main className="container">
          {mostrarCadastro ? (
            <CadastroForm toogleForm={alternarFormulario} />
          ) : (
            <LoginForm toogleForm={alternarFormulario} />
          )}
        </main>
        <Footer />
      </>
    );
}

export default LoginPage
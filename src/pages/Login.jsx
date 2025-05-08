import React, { useState } from "react";
import CadastroForm from "../containers/CadastroForm"
import LoginForm from "../containers/LoginForm"
import Footer from "../containers/Footer"
import Header from "../containers/Header"



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
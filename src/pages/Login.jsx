import React, { useState } from "react";
import CadastroForm from "../containers/CadastroForm"
import LoginForm from "../containers/LoginForm"
import Footer from "../containers/Footer"
import Header from "../components/Header"



const LoginPage = ({setUserName}) => {

    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    const alternarFormulario = () => {
        setMostrarCadastro((prev) => !prev);
    };

    return (
      <>
        <main className="container">
          {mostrarCadastro ? (
            <CadastroForm toogleForm={alternarFormulario} />
          ) : (
            <LoginForm
              setUserName={setUserName}
              toogleForm={alternarFormulario}
            />
          )}
        </main>
        <Footer />
      </>
    );
}

export default LoginPage
import React, { useState } from "react";
import CadastroForm from "../containers/CadastroForm"
import LoginForm from "../containers/LoginForm"
import Footer from "../containers/Footer"



const LoginPage = ({setUserName}) => {

    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    const alternarFormulario = () => {
        setMostrarCadastro((prev) => !prev);
    };

    return (
      <>
        <main className="container">
          {mostrarCadastro ? (
            <CadastroForm
              toogleForm={alternarFormulario}
              setUserName={setUserName}
            />
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
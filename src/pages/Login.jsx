import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CadastroForm from "../containers/CadastroForm"
import LoginForm from "../containers/LoginForm"
import Footer from "../containers/Footer"

const LoginPage = ({setUserName}) => {

    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    const alternarFormulario = () => {
        setMostrarCadastro((prev) => !prev);
    };

    return (
      <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      >
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
      </motion.div>
    );
}

export default LoginPage
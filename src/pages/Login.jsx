import CadastroForm from "../containers/CadastroForm/cadastroForm"
import LoginForm from "../containers/LoginForm/loginForm"
import Footer from "../containers/footer/footer"
import Header from "../containers/header/header"



const LoginPage = () => {


    return (
        <>
        <Header />
        <main className="container">
            <CadastroForm />
        </main>
        <Footer />
        </>
    )
}

export default LoginPage
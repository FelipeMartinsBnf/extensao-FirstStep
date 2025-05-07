import "./header.css"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header>
      <div className="header-div">
        <div>
          <img src={logo} alt="" className="logo" />
          <h3 className="logo-name">
            <span className="logo-name-1">Fist-</span>
            <span className="logo-name-2">Step</span>
          </h3>
        </div>
        <div>
          <button className="btn-header">Minha Conta </button>
          <button className="btn-header">Vagas</button>
          <button className="btn-header">Cursos</button>
        </div>
      </div>
    </header>
  );
}

export default Header
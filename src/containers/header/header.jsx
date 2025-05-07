import "./header.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header>
      <div className="header-div">
        <div>
          <Link className="logo-link" to="/">
            <img src={logo} alt="" className="logo" />
            <h3 className="logo-name">
              <span className="logo-name-1">Fist-</span>
              <span className="logo-name-2">Step</span>
            </h3>
          </Link>
        </div>
        <div>
          <Link className="btn-header" to="/login">Minha conta</Link>
          <button className="btn-header">Vagas</button>
          <button className="btn-header">Cursos</button>
        </div>
      </div>
    </header>
  );
}

export default Header
import "./header.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo.png"
import Button from "../../components/button/button";

const Header = () => {
  return (
    <header>
      <div className="header-div">
        <div>
          <Link className="logo-link" to="/">
            <h3 className="logo-name">
              <span className="logo-name-1">First-</span>
              <span className="logo-name-2">Step</span>
            </h3>
          </Link>
        </div>
        <div>
          <Link className="btn-header " to="/login">
            <Button className="btn-header" label={"Minha Conta"} />
          </Link>
          <Link className="btn-header " to="/login">
            <Button className="btn-header" label={"Vagas"} />
          </Link>
          <Link className="btn-header " to="/login">
            <Button className="btn-header" label={"Cursos"} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header
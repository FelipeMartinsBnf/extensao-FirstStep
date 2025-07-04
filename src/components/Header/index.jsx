import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./header.css";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = ({userName, setUserName}) => {

  const handleLogout = () => {
    setUserName("Logar");
    signOut(auth);
  };

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
          <Link className="btn-header" to="/login">
            <Button
              className="btn-header"
              label={userName}
              onClick={handleLogout}
            />
          </Link>
          <Link className="btn-header " to="/dash">
            <Button
              className="btn-header "
              label={"Dashboard"}
              disabled={false}
            />
          </Link>
          <Link className="btn-header btn-header-lg" to="/vagas">
            <Button className="btn-header " label={"Vagas"} disabled={false} />
          </Link>
          <Link className="btn-header btn-header-lg" to="/cursos">
            <Button className="btn-header" label={"Cursos"} />
          </Link>
          <Link className="btn-header btn-header-lg" to="/dicas">
            <Button className="btn-header" label={"Dicas"} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

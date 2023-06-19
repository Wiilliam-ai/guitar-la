import { Link} from "@remix-run/react";
import logoGuitar from '../../public/img/logo.svg'
import Navegacion from "./navegacion";
const Header = () => {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link 
              to='/'>
            <img className="logo" src={logoGuitar} alt="logo" />
        </Link>
        <nav className="navegacion">
          <Navegacion/>
        </nav>
      </div>
    </header>
  );
};

export default Header;

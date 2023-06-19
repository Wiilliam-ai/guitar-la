import Navegacion from "./navegacion"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            
            <nav className="navegacion">
                <Navegacion/>
            </nav>
            <p className="copyright">Proyecto {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer
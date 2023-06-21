import { Link,useLocation } from "@remix-run/react"
import imagenCarrito from '../../public/img/carrito.png'

const Navegacion = () => {                  
  const location = useLocation()
  return (                  
    <>
          <Link className={location.pathname === '/'?'active':''} to="/">Inicio</Link>
          <Link className={location.pathname === '/nosotros'?'active':''} to="/nosotros">Nosotros</Link>
          <Link className={location.pathname === '/guitarras'?'active':''}to="/guitarras">Tienda</Link>
          <Link className={location.pathname === '/blog'?'active':''}to="/blog">Blog</Link>
          <Link to="/carrito">
            <img src={imagenCarrito} alt="Icono carrito" />
          </Link>
    </>
  ) 
}

export default Navegacion
import { Link } from "@remix-run/react"

const Card = ({guitarra}) => {
  const {nombre,precio,descripcion,imagen,url} = guitarra
  const imgGuitarra = imagen.data.attributes.formats.small.url
  return (
    <div className="guitarra">
        <img src={imgGuitarra} alt={`Imagen guitarra ${nombre}`} loading="lazy"/>
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">S/{precio}</p>
            <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>            
        </div>
    </div>
  )
}

export default Card
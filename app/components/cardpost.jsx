import { Link } from "@remix-run/react"
import { formatearFecha } from "~/helpers/helpers"

const CardPost = ({post}) => {
  const {titulo,contenido,imagen,url,publishedAt} = post
  const imgPost = imagen.data.attributes.formats.small.url
  const fecha = formatearFecha(publishedAt)
  return (
    <article className="post">
        <figure>
            <img className="imagen" src={imgPost} alt={titulo} loading="lazy"/>
        </figure>
        <div className="contenido">
            <h2 className="titulo">{titulo}</h2>
            <p className="fecha">{fecha}</p>
            <p className="texto">{contenido}</p>
            <Link className="enlace" to={`/blog/${url}`}>Ver blog</Link>
        </div>
    </article>
  )
}

export default CardPost
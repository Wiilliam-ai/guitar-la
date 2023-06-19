import { useLoaderData } from "@remix-run/react"
import { formatearFecha } from "~/helpers/helpers"
import { obtenerPost } from "~/models/posts.server"

export async function loader({params}){
    const {postUrl} = params
    const post = await obtenerPost(postUrl)
    if (post.data.length === 0) {
        throw new Response("",{
          status: 404,
          statusText: "Post no encontrado"
        })
      }
    return post
}

export function meta({data}) {
    if (!data) {
      return [
        { 
          title: `Guitar no econtrada` 
        },
        {
          description: `Contamos guitarra no encontrada`
        }
      ]
    }
    const {titulo} = data.data[0].attributes
    return [
      { 
        title: `Guitar La - ${titulo}` 
      },
      {
        description: `Aprende algo de ${titulo}`
      }
    ]
}

const PostUrl = () => {
    const post = useLoaderData()
    const {titulo,contenido,imagen,publishedAt} = post.data[0].attributes
    const imgPost = imagen.data.attributes.formats.medium.url
    const fecha = formatearFecha(publishedAt)
  return (
    <article className="post-unique">
        <figure>
            <img className="imagen" src={imgPost} alt={titulo} />
        </figure>
        <div className="contenido">
            <h2 className="titulo">{titulo}</h2>
            <p className="fecha">{fecha}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default PostUrl
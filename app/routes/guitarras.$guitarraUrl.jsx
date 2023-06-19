import { obtenerGuitarra } from "~/models/guitarras.server"
import { useLoaderData } from "@remix-run/react"

export async function loader({params}){
  const {guitarraUrl} = params
  const guitarra = await obtenerGuitarra(guitarraUrl)
  if (guitarra.data.length === 0) {
    throw new Response("",{
      status: 404,
      statusText: "Guitarra no encontrada"
    })
  }
  return guitarra
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
  const {nombre,descripcion} = data.data[0].attributes
  const lista = descripcion.split(" ")
  const keyboar = lista.filter(e => e.length > 8).slice(1,5)

  return [
    { 
      title: `Guitar La - Guitarra ${nombre}` 
    },
    {
      description: `Contamos con la guitarra ${nombre} perfecta para que puedas empezar`
    },{
      keywords: keyboar
    }
  ]
}


const GuitarraUrl = () => {
  const guitarra = useLoaderData()
  const {nombre,descripcion,precio,imagen} = guitarra.data[0].attributes
  const imgGuitarra = imagen.data.attributes.formats.medium.url

  return (
    <div className="guitarra">
      <img className="imagen" src={imgGuitarra} alt={`Imagen Guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">S/{precio}</p>
      </div>
    </div>
  )
}

export default GuitarraUrl
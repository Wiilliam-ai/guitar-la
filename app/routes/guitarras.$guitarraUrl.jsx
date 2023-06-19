import { obtenerGuitarra } from "~/models/guitarras.server"
import { useLoaderData } from "@remix-run/react"

import guitarraCss from '../styles/tienda.css'

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

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: guitarraCss
    }
  ]
}



const GuitarraUrl = () => {
  const guitarra = useLoaderData()
  const {nombre,descripcion,precio,imagen} = guitarra.data[0].attributes
  const imgGuitarra = imagen.data.attributes.formats.medium.url

  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imgGuitarra} alt={`Imagen Guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">S/{precio}</p>
      </div>
    </main>
  )
}

export default GuitarraUrl
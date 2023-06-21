import { obtenerGuitarra } from "~/models/guitarras.server"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { useState } from "react"

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
      },{
        viewport: "width=device-width, initial-scale=1"
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
    },{
      viewport: "width=device-width, initial-scale=1"
    }
  ]
}


const GuitarraUrl = () => {
  const {agregarCarrito} = useOutletContext()
  const guitarra = useLoaderData()
  const {nombre,descripcion,precio,imagen} = guitarra.data[0].attributes
  const imgGuitarra = imagen.data.attributes.formats.medium.url

  const [cantidad, setCantidad] = useState(0)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (cantidad === 0) {
      alert("Debe ingresar una cantidad")
      return
    }
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imgGuitarra,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <div className="guitarra">
      <img className="imagen" src={imgGuitarra} alt={`Imagen Guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">S/{precio}</p>
        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select
            onChange={e => setCantidad(Number(e.target.value))}
            id="cantidad">
            <option value="0">-- Seleccionar --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agrgar al carrito" />
        </form>
      </div>
    </div>
  )
}

export default GuitarraUrl
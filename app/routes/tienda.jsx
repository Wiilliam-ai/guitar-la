import { useLoaderData } from "@remix-run/react"
import Card from "~/components/card";
import { obtenerGuitarras } from "~/models/guitarras.server";
import tiendaCss from '../styles/tienda.css'

export function meta() {
  return [
    { 
      title: 'Guitar La - Tienda' 
    },
    {
      description: 'Contamos con esta coleccion de guitarras'
    },{
      keywords: ['Guitarra Clapton','Guitarra Beck','Guitarra Morello','Guitarra Borland']
    },{
      author: 'Guitar La' 
    }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: tiendaCss
    }
  ]
}

export async function loader(){
  const guitarras = await obtenerGuitarras()
  return guitarras.data
}

const Tienda = () => {
  const guitarras = useLoaderData()
  
  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Coleccion</h2>
      {
        guitarras.length && (
          <div className="guitarras-grid">
            {
              guitarras.map(guitarra => (
                 <Card key={guitarra?.id} guitarra={guitarra?.attributes}/>
                )
              )
            }
          </div>
        )
      }
    </main>
  )
}

export default Tienda
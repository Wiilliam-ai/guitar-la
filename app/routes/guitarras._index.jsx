import { useLoaderData } from "@remix-run/react"
import { obtenerGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listado-guitarras";

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

export async function loader(){
  const guitarras = await obtenerGuitarras()
  return guitarras.data
}

const Tienda = () => {
  const guitarras = useLoaderData()
  
  return (
      <ListadoGuitarras guitarras={guitarras} cantidad={0}/>
  )
}

export default Tienda
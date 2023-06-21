import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import carritoCss from '../styles/carrito.css'
import CardCarrito from '~/components/card-carrito'
import { useEffect, useState } from 'react'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: carritoCss
    }
  ]
}

export function meta(){
  return [
    { 
      title: `Guitar La - Carrito` 
    },
    {
      description: `Carrito de compras de guitarras`
    },
    {
      viewport: "width=device-width, initial-scale=1"
    }
  ]
}

const Carrito = () => {
  const {carrito,actualizarCantidad,eliminarProducto} = useOutletContext()
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    const calculoTotal = carrito.reduce((acc,val)=> acc + (val.cantidad * val.precio),0)
    setTotal(calculoTotal)  
  }, [carrito])
  
  return (
    <ClientOnly fallback="Cargando...">
      {()=>(
        <main className=  "contenedor">
          <h1 className="heading">Carrito de Compras</h1>
          <div className="contenido">
            <div className="carrito">
              <h2>Acticulos</h2>
              {
                carrito?.length === 0 ? 'Carrito Vacio':(
                  carrito?.map( guitarra =>(
                    <CardCarrito 
                        key={guitarra.id} 
                        guitarra={guitarra} 
                        eliminarProducto={eliminarProducto}
                        actualizarCantidad={actualizarCantidad}/>
                  ))
                )
              }
            </div>
            <aside className="resumen">
              <h3>Resumen de pedido</h3>
              <p>Total a pagar: S/{total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  )
}

export default Carrito
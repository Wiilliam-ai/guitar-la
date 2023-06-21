import { Outlet, useOutletContext } from "@remix-run/react"
import tiendaCss from '../styles/tienda.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: tiendaCss
    }
  ]
}

const Tienda = () => {
  
  return (
    <main className="contenedor">
      <Outlet
        context={useOutletContext()}
        />
    </main>
  )
}

export default Tienda
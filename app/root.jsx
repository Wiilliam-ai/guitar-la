import { useEffect, useState } from 'react' 
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link
} from '@remix-run/react'

import styles from './styles/index.css'
import Header from './components/header'
import Footer from './components/footer'

export function meta(){
    return [
        { charset: 'uft-8' },
        { title: 'Guitar La - Remix' },
        { viewport: "width=device-width, initial-scale=1" }
    ]
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:'preconnect',
            href:'https://fonts.googleapis.com'
        },
        {
            rel:'preconnect',
            href:'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() {
  const carritoLS = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('carrito')) || []
  const [carrito, setCarrito] = useState(carritoLS)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('carrito', JSON.stringify(carrito))
      }
  }, [carrito])
  

  const agregarCarrito = guitarra =>{
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
        const carritoActualizado = carrito.map(guitarraState =>{
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }else{
        setCarrito([...carrito,guitarra])
    }
  }

  const actualizarCantidad = guitarra =>{
    const carritoActualizado = carrito.map(carritoState => {
        if (carritoState.id === guitarra.id) {
            carritoState.cantidad = guitarra.cantidad
        }
        return carritoState
    })
    setCarrito(carritoActualizado)
  }

  const eliminarProducto = id =>{
    const eliminarCarrito = carrito.filter(e => e.id !== id)
    setCarrito(eliminarCarrito)
  }

  return (
    <Document>
        <Outlet
            context={{
                agregarCarrito,
                carrito,
                actualizarCantidad,
                eliminarProducto,
            }}
            />
    </Document>
  )
}


function Document({children}) {
    return(
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

/** Manejo de Errores **/

export function ErrorBoundary(){
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return(
            <Document>
                <div className="error">
                    <p>Error:{error.status}</p>
                    <p>{error.statusText}</p>
                    <Link to='/'>Tal ves quieras volver a la pagina principal</Link>  
                </div>
            </Document>
        )
    }
}
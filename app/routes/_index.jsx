import { useLoaderData,Link } from "@remix-run/react"
import { obtenerGuitarras } from "~/models/guitarras.server"
import { obtenerPosts } from "~/models/posts.server"
import tiendaCss from '../styles/tienda.css'
import cursoCss from '../styles/curso.css'
import ListadoGuitarras from "~/components/listado-guitarras"
import blogsCss from '../styles/blogs.css'
import ListadoPosts from "~/components/listado-posts"
import { obtenerCurso } from "~/models/cursos.server"
import Curso from "~/components/curso"

export function meta(){
  return [
    { 
      title: `Guitar La` 
    },
    {
      description: `Pagina de guitarras`
    },
    {
      viewport: "width=device-width, initial-scale=1"
    }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: tiendaCss
    },
    {
      rel: 'stylesheet',
      href: blogsCss
    },
    {
      rel: 'stylesheet',
      href: cursoCss
    }
  ]
}

export async function loader(){
  const [guitarras,posts,curso] = await Promise.all([
    obtenerGuitarras(),
    obtenerPosts(),
    obtenerCurso()
  ])

  return {
    guitarras:guitarras.data,
    posts:  posts.data,
    curso: curso.data
  }
}

const Index = () => {
  const {guitarras,posts,curso} = useLoaderData()

  return (
    <>
      <main className="contenedor">
          <ListadoGuitarras guitarras={guitarras} cantidad={3}/>
          <Link className="boton boton-enlace" to='/guitarras' >Ver Mas</Link>
      </main>
      <Curso curso={curso?.attributes} />
      <section className="contenedor">
        <ListadoPosts posts={posts} cantidad={3}/>
        <Link className="boton boton-enlace" to='/blog' >Ver Mas</Link>
      </section>
    </>
  )
}

export default Index
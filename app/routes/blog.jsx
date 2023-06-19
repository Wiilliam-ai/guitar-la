import { Outlet } from "@remix-run/react"
import blogsCss from '../styles/blogs.css'
import postCss from '../styles/post.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: blogsCss
    },{
      rel: 'stylesheet',
      href: postCss
    }
  ]
}


const Blog = () => {
  return (
        <Outlet/>
  )
   // <main className="contenedor">
   // </main>
}

export default Blog
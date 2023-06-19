import { useLoaderData } from "@remix-run/react"
import { obtenerPosts } from "~/models/posts.server"
import ListadoPosts from "~/components/listado-posts"

export function meta() {
  return [
    { 
      title: 'Guitar La - Blogs' 
    },
    {
      description: 'Aprende sobre las guitarras con nuestros blogs'
    },{
      keywords: ['Guitarra Clapton','Guitarra Beck','Guitarra Morello','Guitarra Borland']
    },{
      author: 'Guitar La' 
    }
  ]
}


export async function loader(){
  const posts = await obtenerPosts()
  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()
  return (
    <main className="contenedor">
      <div className="blog">
        <ListadoPosts posts={posts} cantidad={0}/>
      </div>
    </main>
  )
}

export default Blog
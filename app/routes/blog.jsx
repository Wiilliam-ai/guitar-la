import { useLoaderData } from "@remix-run/react"
import CardPost from "~/components/cardpost"
import { obtenerPosts } from "~/models/posts.server"
import blogsCss from '../styles/blogs.css'

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

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: blogsCss
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
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {
          posts.length && (
            <div className="posts-grid">
              {
                posts.map(post =>(
                  <CardPost key={post?.id} post={post?.attributes}/>
                ))
              }
            </div>
          )
        }
      </div>
    </main>
  )
}

export default Blog